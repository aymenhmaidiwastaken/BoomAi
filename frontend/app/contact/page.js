import BackToTop from "../backToTop";
import ContactPage from "./index";

export const metadata = {
  title: "Contact | BoomAI",
  description: "BoomAI - AI-Powered Content Generation Platform",
};

const ContactLayout = () => {
  return (
    <>
      <ContactPage />
      <BackToTop />
    </>
  );
};

export default ContactLayout;
