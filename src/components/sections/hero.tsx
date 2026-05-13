import Image from 'next/image';
import ThemeToggle from '../theme/theme-toggle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor, SiDevdotto, SiCodewars } from 'react-icons/si';

const Hero = () => {
  return (
    <header className="mb-6 flex flex-row items-center gap-2 md:gap-4">
      <Image
        src="/img/profile-picture_600x600.jpg"
        alt="Elmar Chavez - Full Stack Developer"
        className="h-25 w-25 rounded-lg md:h-40 md:w-40"
        width={600}
        height={600}
        loading="eager"
      />

      <div className="flex w-full flex-row justify-between">
        <div>
          <h1 className="mb-1 text-lg font-bold md:text-3xl">Elmar Chavez</h1>

          <p className="mb-6 text-sm font-medium md:text-base">
            Full Stack Developer
          </p>

          <ul className="flex flex-row gap-3.5 md:gap-4">
            <li>
              <a
                className="text-muted-foreground hover:text-accent focus-visible:outline-muted-foreground focus-visible:text-foreground inline-flex items-center justify-center rounded-sm outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2"
                href="https://github.com/CodingWithJiro"
                target="_blank"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub className="size-4.5 md:size-5" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                className="text-muted-foreground hover:text-accent focus-visible:outline-muted-foreground focus-visible:text-foreground inline-flex items-center justify-center rounded-sm outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2"
                href="https://www.linkedin.com/in/elmar-chavez/"
                target="_blank"
                aria-label="Connect with me in LinkedIn"
              >
                <FaLinkedin className="size-4.5 md:size-5" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                className="text-muted-foreground hover:text-accent focus-visible:outline-muted-foreground focus-visible:text-foreground inline-flex items-center justify-center rounded-sm outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2"
                href="https://www.frontendmentor.io/profile/CodingWithJiro"
                target="_blank"
                aria-label="See my work in Frontend Mentor"
              >
                <SiFrontendmentor
                  className="size-4.5 md:size-5"
                  aria-hidden="true"
                />
              </a>
            </li>

            <li>
              <a
                className="text-muted-foreground hover:text-accent focus-visible:outline-muted-foreground focus-visible:text-foreground inline-flex items-center justify-center rounded-sm outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2"
                href="https://www.codewars.com/users/CodingWithJiro"
                target="_blank"
                aria-label="Let's solve code challenges in CodeWars"
              >
                <SiCodewars className="size-4.5 md:size-5" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                className="text-muted-foreground hover:text-accent focus-visible:outline-muted-foreground focus-visible:text-foreground inline-flex items-center justify-center rounded-sm outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2"
                href="https://dev.to/codingwithjiro"
                target="_blank"
                aria-label="Follow me in dev.to"
              >
                <SiDevdotto className="size-4.5 md:size-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Hero;
