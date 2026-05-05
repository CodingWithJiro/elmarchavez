import Image from 'next/image';
import ThemeToggle from '../theme/theme-toggle';

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
              <a href="https://github.com/CodingWithJiro" target="_blank">
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/elmar-chavez/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://www.frontendmentor.io/profile/CodingWithJiro"
                target="_blank"
              >
                Frontend Mentor
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
