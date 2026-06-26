import { socialLinks } from '@/data/social-links';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t-foreground/30 mt-14 flex flex-col items-center justify-center gap-4 border-t pt-6 md:flex-row md:justify-between">
      <p className="text-[0.75rem] md:text-[0.875rem]">
        &copy; {currentYear} Elmar Chavez. All rights reserved.
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
    </footer>
  );
};

export default Footer;
