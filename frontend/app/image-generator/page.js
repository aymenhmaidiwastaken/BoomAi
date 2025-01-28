import BackToTop from "../backToTop";
import ImageGeneratorPage from "./index";

export const metadata = {
  title: "Image Generator | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const ImageGeneratorLayout = () => {
  return (
    <>
      <ImageGeneratorPage />
      <BackToTop />
    </>
  );
};

export default ImageGeneratorLayout;
