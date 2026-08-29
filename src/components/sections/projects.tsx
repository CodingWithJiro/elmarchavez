import Image from 'next/image';
import { projectList } from '@/data/project-list';
import ViewAllLink from '../ui/view-all-link';

const Projects = () => {
  return (
    <section className="border-border/40 bg-card flex w-full flex-col gap-3 rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Projects</h2>
        <ViewAllLink href="/projects" />
      </header>

      <ul className="grid grid-cols-1 gap-y-3 min-[488px]:grid-cols-2">
        {projectList.map(
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
    </section>
  );
};

export default Projects;
