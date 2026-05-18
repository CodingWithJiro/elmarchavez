import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  siteUrl: string;
};

const projectList: Project[] = [
  {
    id: 1,
    title: 'Where in the World',
    description: 'Explore countries around the world!',
    imgUrl: '/projects/where-in-the-world.png',
    siteUrl: 'https://where-in-the-world-fm-jiro.netlify.app/',
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description:
      'A technical and interactive documentation W3Schools JS Tutorial clone site!',
    imgUrl: '/projects/javascript-fundamentals.png',
    siteUrl: 'https://javascript-fundamentals-jiro.netlify.app/',
  },
  {
    id: 3,
    title: 'Extensions Manager',
    description:
      'Filter, remove, and restore your favorite browser extensions!',
    imgUrl: '/projects/extensions-manager.png',
    siteUrl: 'https://browser-extension-fm-jiro.netlify.app/',
  },
  {
    id: 4,
    title: 'No One Asked',
    description: 'Get a random advice, copy it or share it in X!',
    imgUrl: '/projects/no-one-asked.png',
    siteUrl: 'https://no-one-asked-fcc-jiro.netlify.app/',
  },
  {
    id: 5,
    title: 'Veil and Visions',
    description: 'Draw three cards to reveal your past, present, and future!',
    imgUrl: '/projects/veil-and-visions.png',
    siteUrl: 'https://veil-and-visions-fcc-jiro.netlify.app/',
  },
  {
    id: 6,
    title: 'Base Apparel',
    description: 'Sign-up your email, subscribe to Base Apparel!',
    imgUrl: '/projects/base-apparel.png',
    siteUrl: 'https://base-apparel-fm-jiro.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section className="border-border/40 bg-card flex flex-col gap-3 rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <h2 className="text-lg font-bold">Projects</h2>

      <ul className="grid grid-cols-1 gap-y-8 sm:grid-cols-2">
        {projectList.map(({ id, title, description, imgUrl, siteUrl }) => {
          return (
            <li
              className="flex flex-col items-center justify-center text-center"
              key={id}
            >
              <Image
                className="border-ring/20 mb-2 max-w-60 rounded-lg border"
                src={imgUrl}
                alt=""
                width={1440}
                height={960}
              />

              <h3 className="mb-1 text-base font-semibold">
                <a href={siteUrl} target="_blank">
                  {title}
                </a>
              </h3>

              <p className="text-[0.85rem]">{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
