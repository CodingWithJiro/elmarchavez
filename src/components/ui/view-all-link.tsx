import Link from 'next/link';

type ViewAllLinkProps = {
  href: string;
};

const ViewAllLink = ({ href }: ViewAllLinkProps) => {
  return (
    <Link
      className="group absolute top-4 right-4 flex items-center gap-1 text-[1rem] font-normal transition-all duration-150 ease-in-out"
      href={href}
    >
      <span className="max-w-0 overflow-hidden text-[0.75rem] whitespace-nowrap opacity-0 transition-all duration-150 group-hover:max-w-xs group-hover:opacity-100">
        View all
      </span>
      <span className="group-hover:hidden">↗</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100">
        →
      </span>
    </Link>
  );
};

export default ViewAllLink;
