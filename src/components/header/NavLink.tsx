import Link from "next/link";
import React from "react";

const NavLink = ({
  name,
  slug,
  onclick,
}: {
  name: string;
  slug: string;
  onclick: () => void;
}) => {
  return (
    <Link
      href={slug}
      onClick={onclick}
      className="text-base font-semibold hover:underline text-myGry"
    >
      {name}
    </Link>
  );
};

export default NavLink;
