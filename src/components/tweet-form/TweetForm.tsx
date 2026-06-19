"use client";

import { postTweet } from "@/server-actions/post-tweet";
import st from "./tweet-form.module.css";

function TweetForm() {
  const handleChangeTextarea = (
    e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    const textarea = e.target;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <form action={postTweet} className={st.form}>
      <textarea
        className={st["form__textarea"]}
        name="content"
        placeholder="What's happening?"
        onChange={handleChangeTextarea}
      />
      <div className={st["form__button-wrapper"]}>
        <button className={st["form__button"]} type="submit">
          Tweet
        </button>
      </div>
    </form>
  );
}

export default TweetForm;
