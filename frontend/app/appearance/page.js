import BackToTop from "../backToTop";
import AppearancePage from "./index";

export const metadata = {
  title: "Appearance | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const AppearanceLayout = () => {
  return (
    <>
      <AppearancePage />
      <BackToTop />
    </>
  );
};

export default AppearanceLayout;
