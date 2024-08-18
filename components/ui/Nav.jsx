"use clients";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about-me",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  return (
    <nav>
      {links.map((link, index) => {
        return (
          <link href={link.path} key={index}>
            {link.name}
          </link>
        );
      })}
    </nav>
  );
};

export default Nav;
