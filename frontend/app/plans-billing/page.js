import BackToTop from "../backToTop";
import PlansBillingPage from "./index";

export const metadata = {
  title: "Plans & Billing | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const PlansBillingLayout = () => {
  return (
    <>
      <PlansBillingPage />
      <BackToTop />
    </>
  );
};

export default PlansBillingLayout;
