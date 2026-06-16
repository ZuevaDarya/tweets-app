"use client";

import st from "@/app/(public)/(home)/page.module.css";
import { PAGES } from "@/config/pages-class.config";
import { useRouter } from "next/navigation";

function ProfileFake() {
  const router = useRouter();

  return (
    <div>
      <h1 className={st.title}>Profile fake</h1>
      <button onClick={() => router.push(PAGES.HOME)}>Go to Home</button>
    </div>
  );
}

export default ProfileFake;
