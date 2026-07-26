const About = () => {
  return (
    <section className="border-border/40 bg-card flex flex-col gap-3 rounded-lg border p-4 transition-colors duration-150 ease-in-out md:max-w-[clamp(26.25rem,-11.25rem+78.125vw,32.5rem)]">
      <h2 className="text-lg font-bold">About</h2>

      <p className="text-sm/normal">
        Licensed civil engineer turned full stack developer who enjoys applying
        engineering principles to building software. I&apos;ve worked with
        modern web technologies while actively reviewing code, collaborating
        with other software engineers, and contributing to open source.
      </p>

      <p className="text-sm/normal">
        Currently, I&apos;m focused on building accessible and maintainable web
        applications with unit and end-to-end testing, reliable CI/CD pipelines,
        and clear project documentation.
      </p>

      <p className="text-sm/normal">
        I also enjoy writing technical articles and staying engaged with the
        developer community through organizations such as Virtual Coffee and
        Freedom in Tech.
      </p>
    </section>
  );
};

export default About;
