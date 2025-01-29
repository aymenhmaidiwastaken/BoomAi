import BackToTop from "@/app/backToTop";
import BlogDetailsPage from "../index";

export const metadata = {
  title: "Blog Details | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const BlogDetailsLayout = ({ params }) => {
  return (
    <>
      <BlogDetailsPage getBlog={params} />
      <BackToTop />
    </>
  );
};

export default BlogDetailsLayout;
