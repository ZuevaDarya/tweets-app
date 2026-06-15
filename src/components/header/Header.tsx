import Image from "next/image";
import Link from "next/link";
import st from "./header.module.css";

function Header() {
  return (
    <header className={st.header}>
      <Link href="/">
        <Image src="/tiger-logo.svg" alt="Tiger logo" width={40} height={40} priority />
      </Link>
      <nav className={st["header__nav"]}>
        <Link href="/">Home</Link>
        <Link href="/">Explore</Link>
        <Link href="/">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
