import type { Metadata } from "next";
import ProfileFake from "./ProfileFake";

export const metadata: Metadata = {
  title: "Profile fake",
};

function ProfileFakePage() {
  return <ProfileFake />;
}

export default ProfileFakePage;
