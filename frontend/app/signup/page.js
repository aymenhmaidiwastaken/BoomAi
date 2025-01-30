"use client";

import Context from "@/context/Context";
import BackToTop from "../backToTop";
import SignupPage from "./index";

const SignupLayout = () => {
  return (
    <>
      <Context>
        <SignupPage />
      </Context>
      <BackToTop />
    </>
  );
};

export default SignupLayout;
