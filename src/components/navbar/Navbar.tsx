"use client";

import { NAVBAR_ITEMS } from "@/shared/constants/navbar-item.data";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import NavbarItem from "../navbar-item/NavbarItem";
import st from "./navbar.module.css";

function Navbar() {
  const currentPathname = usePathname();

  return (
    <nav className={st["navbar"]}>
      {NAVBAR_ITEMS.map((navbarItem, index) => (
        <NavbarItem
          key={`${navbarItem.name}_${index}`}
          navbarItem={navbarItem}
          isActive={!!match(navbarItem.pathname)(currentPathname)}
        />
      ))}
    </nav>
  );
}

export default Navbar;
