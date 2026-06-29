import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/lib/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post ? `${post.title} | Growin Finserv` : 'Blog | Growin Finserv',
  };
}

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2a5cbf 100%)' }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${getCategoryColor(post.category)}`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-blue-200 text-sm">
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>✍️ {post.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Main Article */}
          <div className="lg:w-2/3">
            <article
              className="[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4 [&_p]:mb-4 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1 [&_li]:text-gray-700 [&_strong]:font-semibold [&_a]:text-blue-600 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            {/* Apply CTA */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: '#1B3F8B' }}
            >
              <h3 className="text-xl font-bold mb-3">Apply for a Loan</h3>
              <p className="text-blue-100 text-sm mb-5">
                Ready to get started? Our experts offer free consultations and can process your application in 48 hours.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors mb-3"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/emi-calculator"
                className="block w-full text-center bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                Calculate EMI
              </Link>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#1B3F8B' }}>
                  Related Posts
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <div key={related.slug} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getCategoryColor(related.category)}`}>
                        {related.category}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-800 mt-1 leading-snug">
                        <Link href={`/blog/${related.slug}`} className="hover:text-blue-600 transition-colors">
                          {related.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{related.date} · {related.readTime}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#1B3F8B' }}>Contact Us</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span>📞</span>
                  <div>
                    <a href="tel:9769603074" className="text-blue-600 hover:text-blue-800 block">
                      Gopal: 9769603074
                    </a>
                    <a href="tel:8766507422" className="text-blue-600 hover:text-blue-800 block">
                      Shivdhar: 8766507422
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@growinfinserv.com" className="text-blue-600 hover:text-blue-800 break-all">
                    info@growinfinserv.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span>🕒</span>
                  <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
                </div>
              </div>
              <a
                href="https://wa.me/918766507422"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
