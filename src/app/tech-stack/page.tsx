import type { Metadata } from 'next';
import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import Footer from '@/components/sections/footer';
import TechList from '@/components/sections/tech-list';
import { TECH_STACK } from '@/data/tech-stack';

const metaDescription =
  'Technologies and tools Elmar Chavez has worked with across his projects.';

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

      <section className="mb-8">
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Tech Stack</h1>
        <p className="mb-6 text-sm font-medium md:text-base">
          Technologies and tools I&apos;ve worked with so far.
        </p>
      </section>

      <ul className="flex flex-col gap-10">
        {TECH_STACK.map(({ category, technologies }) => {
          return (
            <li key={category}>
              <TechList category={category} technologies={technologies} />
            </li>
          );
        })}
      </ul>

      <Footer />
    </main>
  );
}
