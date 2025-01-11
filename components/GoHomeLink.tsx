"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const GoHomeLink = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link href="/" className="fixed p-4 top-0 left-0">
      <HomeSvg className="stroke-white size-5" />
    </Link>
  );
};

const HomeSvg = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
