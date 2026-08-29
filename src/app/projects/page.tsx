import type { Metadata } from 'next';
import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import Footer from '@/components/sections/footer';

const metaDescription =
  'List of built projects by Elmar Chavez as a full stack developer.';

export const metadata: Metadata = {
  title: 'Elmar Chavez | Projects',
  description: metaDescription,
  keywords: [
    'Elmar Chavez Projects',
    'Web Development Projects',
    'GitHub Repos',
    'Web Applications',
    'Software Engineering Projects',
  ],
  openGraph: {
    title: 'Projects | Elmar Chavez',
    description: metaDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Elmar Chavez',
    description: metaDescription,
  },
};

export default function ProjectsPage() {
  return (
    <main
      id="main"
      className="mx-auto min-h-screen max-w-130 px-4 py-8 md:max-w-2xl"
    >
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb items={[]} currentLabel="Projects" />
        <ThemeToggle />
      </header>

      <h1>Projects</h1>
      <p>To add more here</p>

      <Footer />
    </main>
  );
}
