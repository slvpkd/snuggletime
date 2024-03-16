import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              <Link href="/">Snuggletime AI</Link>
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              An AI Enhanced Childrens Storyteller
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              href="/seasons"
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Get started...
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
