import Tweet from "@/components/tweet/Tweet";
import MOCK_TWEETS from "@/shared/data/mock-tweets";
import st from "./page.module.css";
import TweetForm from '@/components/tweet-form/TweetForm';

export default function Home() {
  return (
    <div className={st.wrapper}>
      <h1 className={st.title}>Home</h1>
      <TweetForm />
      <div className={st.tweets}>
        {MOCK_TWEETS.map((tweet, index) => (
          <Tweet key={`${tweet.author}_${index}`} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
