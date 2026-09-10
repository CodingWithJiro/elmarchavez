import Footer from '@/components/sections/footer';
import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-screen max-w-130 flex-col justify-between px-4 py-8 md:max-w-4xl"
    >
      <header>
        <div className="mb-12 flex items-center justify-between">
          <Breadcrumb items={[]} currentLabel="Page not found" />
          <ThemeToggle />
        </div>

        <h1 className="mb-4 text-[36px] leading-10 font-extrabold">
          Page not found
        </h1>
        <p className="text-muted-foreground text-base">
          Seems like this page doesn&apos;t exist{' '}
          <span className="whitespace-nowrap">¯\_(ツ)_/¯</span>
        </p>
      </header>

      <Footer />
    </main>
  );
}
