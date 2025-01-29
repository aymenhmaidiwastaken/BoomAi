import BackToTop from "../backToTop";
import PricingPage from "./index";

export const metadata = {
  title: "Pricing | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const PricingLayout = () => {
  return (
    <>
      <PricingPage />
      <BackToTop />
    </>
  );
};

export default PricingLayout;
