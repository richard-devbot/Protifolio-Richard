// @flow strict
import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ blog }) {
  const publishDate = new Date(blog.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const imageUrl = blog.imageId 
    ? `https://miro.medium.com/max/1400/${blog.imageId}`
    : '/placeholder-image.png';

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          height={1080}
          width={1920}
          alt={blog.title}
          className='h-full w-full object-cover group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{publishDate}</p>
          <p>{blog.claps} claps</p>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.subtitle}
        </p>
        <div className="mt-auto">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
