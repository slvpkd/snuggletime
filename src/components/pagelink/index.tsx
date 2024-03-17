import Link from "next/link";

const PageLink = (props: { href: string; label: string }) => {
  return (
    <Link
      href={props.href}
      className="inline-block rounded-lg mt-3 border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
    >
      {props.label}
    </Link>
  );
};

export default PageLink;
