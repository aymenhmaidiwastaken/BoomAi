"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import avatar from "../../public/images/team/team-01sm.jpg";

import SmallNavItem from "../../data/header.json";
import { useAppContext } from "@/context/Context";

const LeftSidebar = () => {
  const pathname = usePathname();
  const { shouldCollapseLeftbar } = useAppContext();

  const isActive = (href) => pathname.startsWith(href);
  return (
    <>
      <div
        className={`boom-left-panel popup-dashboardleft-section ${
          shouldCollapseLeftbar ? "collapsed" : ""
        }`}
      >
        <div className="boom-default-sidebar">
          <div className="inner">
            <div className="content-item-content">
              <div className="boom-default-sidebar-wrapper">
                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu boom-default-sidebar-list">
                    {SmallNavItem &&
                      SmallNavItem.smallNavItem
                        .slice(0, 7)
                        .map((data, index) => (
                          <li key={index}>
                            <Link
                              className={
                                isActive(data.link)
                                  ? "active"
                                  : "" || data.isDisable
                                  ? "disabled"
                                  : ""
                              }
                              href={data.link}
                            >
                              <Image
                                src={data.img}
                                width={35}
                                height={35}
                                alt="AI Generator"
                              />
                              <span>{data.text}</span>
                              {data.badge !== "" ? (
                                <div className="boom-badge-card badge-sm ml--10">
                                  {data.badge}
                                </div>
                              ) : (
                                ""
                              )}
                            </Link>
                          </li>
                        ))}
                  </ul>
                  <div className="boom-sm-separator"></div>
                  <div className="mainmenu-nav">
                    <ul className="dashboard-mainmenu boom-default-sidebar-list">
                      <li className="has-submenu">
                        <a
                          className="collapse-btn collapsed"
                          data-bs-toggle="collapse"
                          href="#collapseExampleMenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExampleMenu"
                        >
                          <i className="feather-plus-circle"></i>
                          <span>Setting</span>
                        </a>
                        <div className="collapse" id="collapseExampleMenu">
                          <ul className="submenu boom-default-sidebar-list">
                            {SmallNavItem &&
                              SmallNavItem.smallNavItem
                                .slice(7, 14)
                                .map((data, index) => (
                                  <li key={index}>
                                    <Link
                                      href={data.link}
                                      className={
                                        isActive(data.link) ? "active" : ""
                                      }
                                    >
                                      <i className={`feather-${data.icon}`}></i>
                                      <span>{data.text}</span>
                                    </Link>
                                  </li>
                                ))}
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link
                          href="/help"
                          className={isActive("/help") ? "active" : ""}
                        >
                          <i className="feather-award"></i>
                          <span>Help & FAQ</span>
                        </Link>
                      </li>
                    </ul>

                    <div className="boom-sm-separator"></div>
                    <ul className="dashboard-mainmenu boom-default-sidebar-list">
                      <li>
                        <Link
                          href="/release-notes"
                          className={isActive("/release-notes") ? "active" : ""}
                        >
                          <i className="feather-bell"></i>
                          <span>Release notes</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/terms-policy"
                          className={isActive("/terms-policy") ? "active" : ""}
                        >
                          <i className="feather-briefcase"></i>
                          <span>Terms & Policy</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="subscription-box">
            <div className="inner">
              <Link href="/profile-details" className="autor-info">
                <div className="author-img active">
                  <Image
                    className="w-100"
                    width={49}
                    height={48}
                    src={avatar}
                    alt="Author"
                  />
                </div>
                <div className="author-desc">
                  <h6>My Account</h6>
                  <p>user@boomai.com</p>
                </div>
                <div className="author-badge">Free</div>
              </Link>
              <div className="btn-part">
                <Link href="/pricing" className="btn-default btn-border">
                  Upgrade To Pro
                </Link>
              </div>
            </div>
          </div>
          <p className="subscription-copyright copyright-text text-center b3  small-text">
            © 2025
            <Link className="ps-2" href="/">
              BoomAI
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
