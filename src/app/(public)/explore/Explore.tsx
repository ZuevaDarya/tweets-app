"use client";

import { useSearchParams } from "next/navigation";
import st from "@/app/(public)/(home)/page.module.css";

function Explore() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <div>
      <h1 className={st.title}>Explore {!!tag && `by #${tag}`}</h1>
    </div>
  );
}

export default Explore;
