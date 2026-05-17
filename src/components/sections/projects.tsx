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
];

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>

      <ul>
        {projectList.map(({ id, title, description, imgUrl, siteUrl }) => {
          return (
            <li key={id}>
              <Image src={imgUrl} alt="" width={1440} height={960} />

              <h3>
                <a href={siteUrl} target="_blank">
                  {title}
                </a>
              </h3>

              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
