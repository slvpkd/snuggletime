import Link from "next/link";

const PageLink = (props: {
  href: string;
  label: string;
  align: "left" | "right";
  className?: string;
}) => {
  return (
    <Link
      href={props.href}
      className={
        props.className +
        " bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      }
    >
      {props.align === "right" && <span> {props.label}&nbsp;</span>}
      {props.align === "right" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M3.288 4.818A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.552l-6.323-3.906A1.5 1.5 0 0 0 10 6.095v2.972a1.506 1.506 0 0 0-.389-.343L3.288 4.818Z" />
        </svg>
      )}

      {props.align === "left" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
        </svg>
      )}
      {props.align === "left" && <span>&nbsp; {props.label}</span>}
    </Link>
  );
};

export default PageLink;
