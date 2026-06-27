import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
      <h2 className="text-2xl font-semibold text-white">Post Not Found</h2>
      <p className="text-slate-400">This blog post doesn&apos;t exist or has been removed.</p>
      <Link
        href="/blog"
        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm"
      >
        Back to Blog
      </Link>
    </div>
  );
}
