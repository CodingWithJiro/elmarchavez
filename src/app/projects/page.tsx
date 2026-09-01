import type { Metadata } from 'next';
import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import Footer from '@/components/sections/footer';
import { PROJECTS } from '@/data/project-list';
import Image from 'next/image';

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
      className="mx-auto min-h-screen max-w-130 px-4 py-8 md:max-w-4xl"
    >
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb items={[]} currentLabel="Projects" />
        <ThemeToggle />
      </header>

      <section>
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Projects</h1>
        <p className="mb-6 text-sm font-medium md:text-base">
          Things I built and worked on.
        </p>
      </section>

      <ul className="grid grid-cols-1 gap-y-3 min-[488px]:grid-cols-2 md:grid-cols-3">
        {PROJECTS.map(
          ({ id, title, description, imgUrl, imgUrlDark, siteUrl }) => {
            return (
              <li
                className="border-ring/20 focus-within:border-ring has-hover:border-ring bg-muted/40 mx-auto flex max-w-50 flex-col items-center justify-start rounded-lg border text-center transition-all duration-150 ease-in-out md:max-w-[clamp(12.5rem,1.25rem+23.4375vw,14.375rem)]"
                key={id}
              >
                <div className="mb-4 h-35.5 w-50 md:w-[clamp(12.5rem,1.25rem+23.4375vw,14.375rem)]">
                  <Image
                    className="border-ring/20 mb-2 h-full w-full rounded-lg border object-cover dark:hidden"
                    src={imgUrl}
                    alt=""
                    width={1440}
                    height={960}
                    loading="eager"
                  />
                  <Image
                    className="border-ring/20 mb-2 hidden h-full w-full rounded-lg border object-cover dark:block"
                    src={imgUrlDark}
                    alt={`${title} project preview.`}
                    width={1440}
                    height={960}
                    loading="eager"
                  />
                </div>

                <h3 className="mb-1 text-[0.875rem] font-semibold">
                  <a
                    className="decoration-0 underline-offset-4 opacity-90 hover:underline hover:opacity-100 focus-visible:underline focus-visible:opacity-100 focus-visible:outline-none"
                    href={siteUrl}
                    target="_blank"
                    aria-label={`Go to project ${title}.`}
                  >
                    {title}
                  </a>
                </h3>

                <p className="px-4 pb-2 text-[0.75rem]">{description}</p>
              </li>
            );
          },
        )}
      </ul>

      <Footer />
    </main>
  );
}
