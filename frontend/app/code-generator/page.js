import BackToTop from "../backToTop";
import CodeGeneratorPage from "./index";

export const metadata = {
  title: "Code Generator | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const CodeGeneratorLayout = () => {
  return (
    <>
      <CodeGeneratorPage />
      <BackToTop />
    </>
  );
};

export default CodeGeneratorLayout;
