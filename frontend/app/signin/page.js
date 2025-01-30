"use client";

import Context from "@/context/Context";
import BackToTop from "../backToTop";
import SigninPage from "./index";

const SigninLayout = () => {
  return (
    <>
      <Context>
        <SigninPage />
      </Context>
      <BackToTop />
    </>
  );
};

export default SigninLayout;
