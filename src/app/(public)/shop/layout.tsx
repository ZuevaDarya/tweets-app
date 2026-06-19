import st from "@/app/(public)/(home)/page.module.css";
import ShopNavbar from '@/components/shop-menu/ShopNavbar';
import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1 className={st.title}>Shop</h1>
      <ShopNavbar />
      {children}
    </div>
  );
}

export default Layout;
