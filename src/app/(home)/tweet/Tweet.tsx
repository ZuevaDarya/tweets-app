import type { ITweet } from "@/shared/types/tweet.interface";
import cn from "@/utils/cn";
import Image from "next/image";
import st from "./tweet.module.css";

interface IProps {
  tweet: ITweet;
}

function Tweet({ tweet }: IProps) {
  return (
    <div className={st.tweet}>
      <div className={cn(st["tweet__tw-head"], st["tw-head"])}>
        <Image src="/tiger-logo.svg" alt="tiger logo" width={40} height={40} />
        <span className={st["tw-head__author"]}>@{tweet.author}</span>
      </div>
      <p className={st["tw-head__text"]}>{tweet.text}</p>
    </div>
  );
}

export default Tweet;
