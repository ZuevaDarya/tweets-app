import Header from "@/components/header/Header";
import type { PropsWithChildren } from "react";
import st from "./layout.module.css";
function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className={st["layout--padding"]}>{children}</div>
    </>
  );
}

export default Layout;
