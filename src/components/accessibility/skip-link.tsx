const SkipLink = () => {
  return (
    <a
      className="focus-visible:outline-muted-foreground focus-visible:text-foreground focus-visible:bg-card focus-visible:border-border/40 sr-only rounded-sm text-sm outline-offset-4 focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:border focus-visible:p-2 focus-visible:outline-2"
      href="#main"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
