import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User profile",
};

interface IProps {
  params: Promise<{
    userId: string;
  }>;
}

async function Profile({ params }: IProps) {
  const { userId } = await params;

  return (
    <div>
      <p>{userId} profile</p>
    </div>
  );
}

export default Profile;
