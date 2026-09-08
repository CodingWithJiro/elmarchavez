import type { Metadata } from 'next';
import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import Footer from '@/components/sections/footer';

const metaDescription =
  'List of all the technologies Elmar Chavez have experience with.';

export const metadata: Metadata = {
  title: 'Elmar Chavez | Tech Stack',
  description: metaDescription,
  keywords: [
    'Elmar Chavez Tech Stack',
    'Web Development Technologies',
    'Full Stack Development Skills',
    'Frontend Tech',
    'Backend Tech',
  ],
  openGraph: {
    title: 'Tech Stack | Elmar Chavez',
    description: metaDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Stack | Elmar Chavez',
    description: metaDescription,
  },
};

export default function TechStackPage() {
  return (
    <main
      id="main"
      className="mx-auto min-h-screen max-w-130 px-4 py-8 md:max-w-4xl"
    >
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb items={[]} currentLabel="Tech Stack" />
        <ThemeToggle />
      </header>

      <section>
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Tech Stack</h1>
        <p className="mb-6 text-sm font-medium md:text-base">
          List of technologies I used so far.
        </p>
      </section>

      <p>Add list here.</p>

      <Footer />
    </main>
  );
}
