import BackToTop from "../backToTop";
import BlogPage from "./index";

export const metadata = {
  title: "Blog | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const BlogLayout = () => {
  return (
    <>
      <BlogPage />
      <BackToTop />
    </>
  );
};

export default BlogLayout;
