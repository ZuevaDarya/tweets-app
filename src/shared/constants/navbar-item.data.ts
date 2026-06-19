import { PAGES } from "@/config/pages-class.config";

export interface INavbarItem {
  pathname: string;
  name: string;
}

export const NAVBAR_ITEMS: Array<INavbarItem> = [
  {
    pathname: PAGES.HOME,
    name: "Home",
  },
  {
    pathname: PAGES.EXPLORE,
    name: "Explore",
  },
  {
    pathname: PAGES.PROFILE_FAKE,
    name: "Profile fake",
  },
  {
    pathname: PAGES.SHOP,
    name: "Shop",
  },
];

export const SHOP_NAVBAR_ITEMS: Array<INavbarItem> = [
  {
    pathname: PAGES.SHOP,
    name: "SSR",
  },
  {
    pathname: PAGES.SSG,
    name: "SSG",
  },
  {
    pathname: PAGES.ISR,
    name: "ISR",
  },
];
