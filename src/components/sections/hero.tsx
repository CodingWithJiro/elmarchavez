import Image from 'next/image';
import ThemeToggle from '../theme/theme-toggle';

const Hero = () => {
  return (
    <header>
      <Image
        src="/img/profile-picture_600x600.jpg"
        alt="Elmar Chavez - Full Stack Developer"
        width="600"
        height="600"
        loading="eager"
      />

      <div>
        <h1>Elmar Chavez</h1>

        <p>Full Stack Developer</p>

        <ul>
          <li>
            <a href="https://github.com/CodingWithJiro" target="_blank">
              GitHub
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/elmar-chavez/" target="_blank">
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

      <ThemeToggle />
    </header>
  );
};

export default Hero;
