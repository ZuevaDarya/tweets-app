import type { Metadata } from "next";
import { Suspense } from "react";
import Explore from "./Explore";

export const metadata: Metadata = {
  title: "Explore",
};

function ExplorePage() {
  return (
    <Suspense>
      <Explore />
    </Suspense>
  );
}

export default ExplorePage;
