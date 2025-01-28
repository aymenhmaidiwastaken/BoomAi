import BackToTop from "../backToTop";
import TextGeneratorPage from "./index";

export const metadata = {
  title: "Text Generator | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const TextGeneratorLayout = () => {
  return (
    <>
      <TextGeneratorPage />
      <BackToTop />
    </>
  );
};

export default TextGeneratorLayout;
