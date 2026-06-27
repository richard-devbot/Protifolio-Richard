import { XMLParser } from 'fast-xml-parser';
import BlogCard from "../components/homepage/blog/blog-card";
import { personalData } from "@/utils/data/personal-data";

// Helper function to extract the first image URL from HTML content
const extractImageUrl = (htmlContent) => {
  if (!htmlContent) return null;
  const imgTagMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

// Helper function to extract text from the first <p> tag and strip other tags
const extractSubtitle = (htmlContent) => {
  if (!htmlContent) return '';
  // Find the first paragraph tag
  const pTagMatch = htmlContent.match(/<p>(.*?)<\/p>/);
  let text = pTagMatch ? pTagMatch[1] : '';
  // Strip remaining HTML tags
  text = text.replace(/<[^>]*>/g, '');
  // Limit length if necessary
  // text = text.substring(0, 150) + (text.length > 150 ? '...' : ''); 
  return text;
};


async function getAllBlogs() {
  const mediumUsername = personalData.mediumUsername;
  if (!mediumUsername) {
    return [];
  }
  const rssFeedUrl = `https://medium.com/feed/@${mediumUsername}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(rssFeedUrl, { signal: controller.signal, next: { revalidate: 3600 } });
    clearTimeout(timeoutId);

    if (!res.ok) {
      console.error('Failed to fetch RSS feed:', res.status, await res.text());
      return [];
    }

    const xmlText = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false, // Need attributes like src
      attributeNamePrefix : "" // Don't prefix attributes
    });
    const rssJson = parser.parse(xmlText);

    if (!rssJson.rss || !rssJson.rss.channel || !rssJson.rss.channel.item) {
        console.error('Failed to parse RSS feed or feed is empty');
        return [];
    }

    // Ensure items is always an array
    const items = Array.isArray(rssJson.rss.channel.item)
      ? rssJson.rss.channel.item
      : [rssJson.rss.channel.item];

    const blogs = items.map(item => {
      const contentEncoded = item['content:encoded'] || item.description || '';
      const imageUrl = extractImageUrl(contentEncoded);
      const subtitle = extractSubtitle(contentEncoded) || item.title; // Fallback to title if no description

      return {
        // id: item.guid, // Can use guid as a unique key if needed
        title: item.title,
        subtitle: subtitle,
        url: item.link,
        publishedAt: item.pubDate,
        imageUrl: imageUrl, // Pass direct image URL
        // claps: 0, // Claps not available in RSS
      };
    });

    return blogs;

  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      console.error('RSS feed fetch timed out after 5s');
      return [];
    }
    console.error('Error fetching or parsing RSS feed:', error);
    return [];
  }
}

async function page() {
  const blogs = await getAllBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blogs ({blogs.length})
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.length > 0 ? (
          blogs.map((blog, i) => (
            <BlogCard blog={blog} key={blog.url || i} /> // Use URL as key if available
          ))
        ) : (
          <p className="text-center col-span-3 text-white">Could not fetch blogs from Medium.</p>
        )}
      </div>
    </div>
  );
}

export default page;
