"use client";

import { SHOP_NAVBAR_ITEMS } from "@/shared/constants/navbar-item.data";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import NavbarItem from "../navbar-item/NavbarItem";
import st from "./shop-menu.module.css";

function ShopNavbar() {
  const currrentPathname = usePathname();

  return (
    <nav className={st.navbar}>
      {SHOP_NAVBAR_ITEMS.map((navbarItem, index) => (
        <NavbarItem
          key={`${navbarItem.name}_${index}`}
          navbarItem={navbarItem}
          isActive={!!match(navbarItem.pathname)(currrentPathname)}
        />
      ))}
    </nav>
  );
}

export default ShopNavbar;
