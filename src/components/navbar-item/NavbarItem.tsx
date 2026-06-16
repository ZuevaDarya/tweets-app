"use client";

import type { INavbarItem } from "@/shared/constants/navbar-item.data";
import cn from "@/utils/cn";
import Link from "next/link";
import st from "./navbar-item.module.css";

interface IProps {
  navbarItem: INavbarItem;
  isActive: boolean;
}

function NavbarItem({ navbarItem, isActive }: IProps) {
  return (
    <Link
      className={cn(st["navbar__link"], isActive && st["navbar__link--active"])}
      href={navbarItem.pathname}
    >
      {navbarItem.name}
    </Link>
  );
}

export default NavbarItem;
