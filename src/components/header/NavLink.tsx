import Link from "next/link";
import React from "react";

const NavLink = ({
  name,
  slug,
  onclick,
  isActive,
}: {
  name: string;
  slug: string;
  onclick?: () => void;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={slug}
      onClick={onclick}
      className={`text-base text-white hover:text-myGry hover:underline ${
        isActive ? "text-myGry underline" : "text-myWht"
      }`}
    >
      {name}
    </Link>
  );
};

export default NavLink; 