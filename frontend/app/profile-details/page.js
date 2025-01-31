import BackToTop from "../backToTop";
import ProfileDetailsPage from "./index";

export const metadata = {
  title: "Profile Details | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const ProfileDetailsLayout = () => {
  return (
    <>
      <ProfileDetailsPage />
      <BackToTop />
    </>
  );
};

export default ProfileDetailsLayout;
