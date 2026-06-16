import Image from "next/image";
import Link from "next/link";
import st from "./header.module.css";
import Navbar from '../navbar/Navbar';

function Header() {
  return (
    <header className={st.header}>
      <Link href="/">
        <Image src="/tiger-logo.svg" alt="Tiger logo" width={40} height={40} priority />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
