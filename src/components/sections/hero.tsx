import Image from 'next/image';
import ThemeToggle from '../theme/theme-toggle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor, SiDevdotto, SiCodewars } from 'react-icons/si';

const Hero = () => {
  return (
    <header className="flex flex-row items-center gap-4">
      <Image
        src="/img/profile-picture_600x600.jpg"
        alt="Elmar Chavez - Full Stack Developer"
        className="h-40 w-40 rounded-lg"
        width={600}
        height={600}
        loading="eager"
      />

      <div className="flex w-full flex-row justify-between">
        <div className="">
          <h1 className="mb-1 text-3xl font-bold">Elmar Chavez</h1>

          <p className="mb-6 text-base font-medium">Full Stack Developer</p>

          <ul className="flex flex-row gap-4">
            <li>
              <a
                href="https://github.com/CodingWithJiro"
                target="_blank"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub className="size-5" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/elmar-chavez/"
                target="_blank"
                aria-label="Connect with me in LinkedIn"
              >
                <FaLinkedin className="size-5" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://www.frontendmentor.io/profile/CodingWithJiro"
                target="_blank"
                aria-label="See my work in Frontend Mentor"
              >
                <SiFrontendmentor className="size-5" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://www.codewars.com/users/CodingWithJiro"
                target="_blank"
                aria-label="Let's solve code challenges in CodeWars"
              >
                <SiCodewars className="size-5" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://dev.to/codingwithjiro"
                target="_blank"
                aria-label="Follow me in dev.to"
              >
                <SiDevdotto className="size-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Hero;
