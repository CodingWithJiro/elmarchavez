import type { Metadata } from 'next';
import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import Footer from '@/components/sections/footer';
import { PROJECTS } from '@/data/project-list';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react';

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

      <ul className="mb-8 grid grid-cols-1 gap-y-3 min-[520px]:grid-cols-2 min-[520px]:gap-x-3 md:grid-cols-3">
        {PROJECTS.map(
          ({
            id,
            title,
            description,
            imgUrl,
            imgUrlDark,
            siteUrl,
            githubUrl,
            technologies,
          }) => {
            return (
              <li
                className="border-ring/20 focus-within:border-ring has-hover:border-ring bg-background text-foreground mx-auto flex max-w-60 flex-col overflow-hidden rounded-lg border transition-all duration-150 ease-in-out min-[850px]:max-w-70"
                key={id}
              >
                <div className="relative mb-4 aspect-video max-w-60 shrink-0 overflow-hidden min-[850px]:max-w-70">
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

                  <ul className="absolute right-1 bottom-1 flex gap-1 text-[0.50rem] font-light">
                    {technologies.map((technology) => {
                      return (
                        <li
                          key={technology}
                          className="bg-background/90 border-border/30 rounded-sm border px-1 py-0.5 text-center"
                        >
                          {technology}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <section className="flex h-full flex-col justify-between">
                  <header className="mb-4 px-4">
                    <h2 className="mb-2 text-[0.875rem] font-semibold">
                      {title}
                    </h2>
                    <p className="text-[0.75rem]">{description}</p>
                  </header>

                  <div className="mb-4 flex items-center justify-center gap-2 px-4 text-[0.75rem]">
                    <Link
                      href={githubUrl}
                      target="_blank"
                      className="bg-background border-border/50 hover:bg-foreground hover:text-background focus-visible:outline-muted-foreground flex items-center justify-center gap-1 rounded-sm border px-4 py-1 outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2 min-[850px]:px-6"
                      aria-label={`Go to ${title}'s GitHub repository.`}
                    >
                      <FaGithub size={12} />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href={siteUrl}
                      target="_blank"
                      className="bg-background border-border/50 text-foreground hover:bg-foreground hover:text-background focus-visible:outline-muted-foreground flex items-center justify-center gap-1 rounded-sm border px-4 py-1 outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2 min-[850px]:px-6"
                      aria-label={`Go to ${title}'s live website.`}
                    >
                      <Globe size={12} />
                      <span>Website</span>
                    </Link>
                  </div>
                </section>
              </li>
            );
          },
        )}
      </ul>

      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="focus-visible:outline-muted-foreground flex items-center gap-1 rounded-sm text-[0.85rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent hover:underline md:text-[0.875rem]"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          <span>Back to homepage</span>
        </Link>

        <Link
          href="https://github.com/CodingWithJiro/Projects-Hub"
          className="focus-visible:outline-muted-foreground flex items-center gap-1 rounded-sm text-[0.85rem] font-normal underline-offset-4 outline-2 outline-offset-4 outline-transparent hover:underline md:text-[0.875rem]"
          target="_blank"
        >
          <span>View all projects</span>
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>

      <Footer />
    </main>
  );
}
