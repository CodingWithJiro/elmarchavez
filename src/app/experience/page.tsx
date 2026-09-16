import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';

export default function ExperiencePage() {
  return (
    <main
      id="main"
      className="mx-auto min-h-screen max-w-130 px-4 py-8 md:max-w-4xl"
    >
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb items={[]} currentLabel="Experience" />
        <ThemeToggle />
      </header>

      <section className="mb-8">
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Experience</h1>
        <h2 className="mb-6 text-sm font-medium md:text-base">
          My professional experience as a software engineer.
        </h2>
      </section>

      <p>Add list here.</p>
    </main>
  );
}
