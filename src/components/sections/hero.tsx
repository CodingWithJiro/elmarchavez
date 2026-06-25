import Image from 'next/image';
import ThemeToggle from '../theme/theme-toggle';
import { socialLinks } from '@/data/social-links';

const Hero = () => {
  return (
    <header className="mb-6 flex flex-row items-center gap-2 md:gap-4">
      <Image
        src="/img/profile-picture_600x600.jpg"
        alt="Elmar Chavez - Full Stack Developer"
        className="border-ring/20 h-25 w-25 rounded-lg border md:h-40 md:w-40"
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
            {socialLinks.map(({ id, url, label, Icon }) => {
              return (
                <li key={id}>
                  <a
                    className="text-muted-foreground hover:text-accent focus-visible:outline-muted-foreground focus-visible:text-foreground inline-flex items-center justify-center rounded-sm outline-offset-4 outline-transparent transition-colors duration-150 ease-in-out focus-visible:outline-2"
                    href={url}
                    target="_blank"
                    aria-label={label}
                  >
                    <Icon className="size-4.5 md:size-5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Hero;
