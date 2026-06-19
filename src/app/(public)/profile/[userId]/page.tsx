import st from "@/app/(public)/(home)/page.module.css";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<TParams>;
}): Promise<Metadata> {
  return {
    title: "@" + (await params).userId,
  };
}

type TParams = {
  userId: string;
};

type TSearchParams = {
  tag?: string;
};

interface IProps {
  params: Promise<TParams>;
  searchParams: Promise<TSearchParams>;
}

async function Profile({ params, searchParams }: IProps) {
  const { userId } = await params;
  const { tag } = await searchParams;

  return (
    <div>
      <h1 className={st.title}>
        @{userId} profile {!!tag && `by #${tag}`}
      </h1>
    </div>
  );
}

export default Profile;
