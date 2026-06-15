import Link from 'next/link';
import st from "./not-found.module.css";
import cn from '@/utils/cn';

function NonFound() {
  return (
    <div className={st.wrapper}>
      <h1 className={st.title}>404</h1>
      <p className={cn(st.text, st["text--mg"])}>This page does not exist. Or maybe it moved.</p>
      <Link href="/" className={st.link}>Back to home</Link>
    </div>
  );
}

export default NonFound;
