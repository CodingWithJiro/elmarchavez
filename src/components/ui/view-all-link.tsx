import Link from 'next/link';

type ViewAllLinkProps = {
  href: string;
};

const ViewAllLink = ({ href }: ViewAllLinkProps) => {
  return (
    <Link
      className="group focus-visible:outline-muted-foreground absolute top-4 right-4 flex items-center gap-1 rounded-sm text-[1rem] font-normal outline-2 outline-offset-4 outline-transparent transition-all duration-150 ease-in-out"
      href={href}
    >
      <span className="max-w-0 overflow-hidden text-[0.75rem] whitespace-nowrap underline-offset-4 opacity-0 transition-all duration-150 group-hover:max-w-xs group-hover:underline group-hover:opacity-100 group-focus:max-w-xs group-focus:opacity-100">
        View all
      </span>
      <span className="group-hover:hidden group-focus:hidden">↗</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus:max-w-xs group-focus:opacity-100">
        →
      </span>
    </Link>
  );
};

export default ViewAllLink;
