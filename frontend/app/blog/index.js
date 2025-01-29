"use client";

import Context from "@/context/Context";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import CtaTwo from "@/components/CallToActions/Cta-Two";
import Blog from "@/components/Blog/Blog";

const BlogPage = () => {
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
          <Breadcrumb title="Our Blog" text="Blog" />

          <Blog />

          <div className="boom-cta-area boom-section-gap boom-section-gapBottom-big bg-color-1">
            <div className="container">
              <CtaTwo />
            </div>
          </div>

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default BlogPage;
