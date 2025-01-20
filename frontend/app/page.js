"use client";

import React from "react";
import Context from "@/context/Context";
import BackToTop from "./backToTop";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Home from "@/components/Home/Home";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";

const HomePage = () => {
  return (
    <main className="page-wrapper">
      <Context>
        <HeaderTop />
        <Header
          headerTransparent="header-transparent"
          headerSticky="header-sticky"
          btnClass="boom-gradient-btn"
        />
        <PopupMobileMenu />
        <Home />
        <Footer />
        <Copyright />
      </Context>
      <BackToTop />
    </main>
  );
};

export default HomePage;
