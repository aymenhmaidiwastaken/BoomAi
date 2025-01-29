"use client";

import Context from "@/context/Context";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "@/app/backToTop";
import SingleBlog from "@/components/BlogDetails/BlogDetails";

const BlogDetailsPage = ({ getBlog }) => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="boom-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Blog Details" text="Blog Details" />

          <SingleBlog getBlog={getBlog} />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default BlogDetailsPage;
