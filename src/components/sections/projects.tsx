import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  imgUrlDark: string;
  siteUrl: string;
};

const projectList: Project[] = [
  {
    id: 1,
    title: 'Where in the World',
    description: 'Explore countries around the world!',
    imgUrl: '/projects/where-in-the-world.png',
    imgUrlDark: '/projects/where-in-the-world-dark.png',
    siteUrl: 'https://where-in-the-world-fm-jiro.netlify.app/',
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Technical W3Schools JS Tutorial clone site!',
    imgUrl: '/projects/javascript-fundamentals.png',
    imgUrlDark: '/projects/javascript-fundamentals-dark.png',
    siteUrl: 'https://javascript-fundamentals-jiro.netlify.app/',
  },
  {
    id: 3,
    title: 'Extensions Manager',
    description: 'Manage your favorite browser extensions!',
    imgUrl: '/projects/extensions-manager.png',
    imgUrlDark: '/projects/extensions-manager-dark.png',
    siteUrl: 'https://browser-extension-fm-jiro.netlify.app/',
  },
  {
    id: 4,
    title: 'No One Asked',
    description: 'Get a random advice, copy it or share it in X!',
    imgUrl: '/projects/no-one-asked.png',
    imgUrlDark: '/projects/no-one-asked-dark.png',
    siteUrl: 'https://no-one-asked-fcc-jiro.netlify.app/',
  },
  {
    id: 5,
    title: 'Veil and Visions',
    description: 'Draw three cards to reveal your past, present, and future!',
    imgUrl: '/projects/veil-and-visions.png',
    imgUrlDark: '/projects/veil-and-visions-dark.png',
    siteUrl: 'https://veil-and-visions-fcc-jiro.netlify.app/',
  },
  {
    id: 6,
    title: 'Base Apparel',
    description: 'Sign-up your email, subscribe to Base Apparel!',
    imgUrl: '/projects/base-apparel.png',
    imgUrlDark: '/projects/base-apparel-dark.png',
    siteUrl: 'https://base-apparel-fm-jiro.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section className="border-border/40 bg-card mb-4 flex flex-col gap-3 rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <h2 className="text-lg font-bold">Projects</h2>

      <ul className="grid grid-cols-1 gap-y-3 min-[488px]:grid-cols-2 md:grid-cols-3">
        {projectList.map(
          ({ id, title, description, imgUrl, imgUrlDark, siteUrl }) => {
            return (
              <li
                className="border-ring/20 focus-within:border-ring has-hover:border-ring bg-muted/40 mx-auto flex max-w-50 flex-col items-center justify-start rounded-lg border text-center transition-all duration-150 ease-in-out md:max-w-57.5"
                key={id}
              >
                <div className="mb-4 h-35.5 w-50 md:w-57.5">
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
