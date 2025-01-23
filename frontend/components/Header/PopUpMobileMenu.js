"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/Context";

import logoLight from "../../public/images/logo/logo.png";

import Nav from "./Nav";
import SmallNav from "./SmallNav";

const PopupMobileMenu = () => {
  const { activeMobileMenu, setActiveMobileMenu } = useAppContext();

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setActiveMobileMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMobileMenu]);

  return (
    <>
      <div className={`popup-mobile-menu ${activeMobileMenu ? "" : "active"}`}>
        <div
          className="bg"
          onClick={() => setActiveMobileMenu(!activeMobileMenu)}
        ></div>
        <div className="inner-popup">
          <div className="header-top">
            <div className="logo">
              <Link href="/">
                <Image
                  className="logo-light"
                  src={logoLight}
                  width={116}
                  height={30}
                  alt="Corporate Logo"
                />
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fa-sharp fa-regular fa-x"></i>
              </button>
            </div>
          </div>
          <div className="content">
            <Nav />

            <div className="boom-sm-separator"></div>
            <div className="boom-default-sidebar-wrapper">
              <SmallNav />
            </div>
          </div>
          <div className="header-btn d-block d-md-none">
            <Link
              className="btn-default"
              target="_blank"
              href="/text-generator"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupMobileMenu;
