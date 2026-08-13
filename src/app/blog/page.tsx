import type { Metadata } from 'next';

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
