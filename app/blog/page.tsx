import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: 'Blog | Growin Finserv',
};

const categoryColors: Record<string, string> = {
  'Home Loan': 'bg-blue-100 text-blue-700',
  'Personal Loan': 'bg-purple-100 text-purple-700',
  'Business Loan': 'bg-green-100 text-green-700',
  'Car Loan': 'bg-yellow-100 text-yellow-700',
  'LAP': 'bg-orange-100 text-orange-700',
  'EMI Tips': 'bg-pink-100 text-pink-700',
  'Finance Tips': 'bg-teal-100 text-teal-700',
};

function getCategoryColor(category: string): string {
  return categoryColors[category] ?? 'bg-gray-100 text-gray-700';
}

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pb-8 md:pb-12">
        <div className="w-full">
          <div
            className="py-16 text-white text-center shadow-xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2a5cbf 100%)' }}
          >
            <div className="px-4 md:px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Insights &amp; Tips</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Expert advice on home loans, personal finance, EMI planning, and more — written by the Growin Finserv team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden border border-gray-100 flex flex-col"
                >
                  {post.coverImage && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category Badge */}
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit ${getCategoryColor(post.category)}`}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 flex-1">{post.excerpt}</p>

                    {/* Footer */}
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">By {post.author}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
