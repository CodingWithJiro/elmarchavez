import type { Metadata } from 'next';
import Footer from '@/components/sections/footer';

const metaDescription =
  'Blog posts on full stack development and tech from Elmar Chavez.';

export const metadata: Metadata = {
  title: 'Elmar Chavez | Blog',
  description: metaDescription,
  keywords: [
    'Elmar Chavez Blog',
    'Web Development Blog',
    'Tech Articles',
    'Tech Community',
    'Software Engineering Blog',
  ],
  openGraph: {
    title: 'Blog | Elmar Chavez',
    description: metaDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Elmar Chavez',
    description: metaDescription,
  },
};

export default function BlogPage() {
  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
      <header>
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Blog</h1>
        <p className="mb-6 text-sm font-medium md:text-base">
          Articles, thoughts, and tech stuff.
        </p>
      </header>

      <Footer />
    </main>
  );
}
