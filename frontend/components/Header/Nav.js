"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import MenuData from "../../data/header.json";

import NavProps from "./NavProps";
import menuImg from "../../public/images/menu-img/menu-img-2.png";

const Nav = () => {
  const pathname = usePathname();

  const [sectionStates, setSectionStates] = useState({
    Tools: true,
    Pages: true,
  });

  const toggleSection = (subTitle) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [subTitle]: !prevState[subTitle],
    }));
  };

  const isActive = (href) => pathname.startsWith(href);

  return (
    <>
      <ul className="mainmenu">
        {MenuData &&
          MenuData.nav.map((data, index) => (
            <li
              className={`${
                data.dropdown
                  ? "has-dropdown has-menu-child-item position-relative"
                  : ""
              } ${data.megamenu ? "with-megamenu has-menu-child-item" : ""}`}
              key={index}
            >
              {data.link === "#" ? (
                <a
                  href="#"
                  className={` ${!sectionStates[data.text] ? "open" : ""}`}
                  onClick={() => toggleSection(data.text)}
                >
                  {data.text}
                  {data.isIcon ? (
                    <i className="fa-regular fa-chevron-down"></i>
                  ) : (
                    ""
                  )}
                </a>
              ) : (
                <Link
                  href={data.link}
                  className={isActive(data.link) ? "active" : ""}
                >
                  {data.text}
                  {data.isIcon ? (
                    <i className="fa-regular fa-chevron-down"></i>
                  ) : (
                    ""
                  )}
                </Link>
              )}

              {data.isMenu &&
              !data.inner &&
              !data.dashboard &&
              !data.upcoming ? (
                <ul
                  className={`submenu ${
                    !sectionStates[data.text] ? "d-block" : ""
                  }`}
                >
                  {data.subItem &&
                    data.subItem.map((innerData, innerIndex) => (
                      <li key={innerIndex}>
                        <Link
                          className={`${
                            isActive(innerData.link) ? "active" : ""
                          } ${innerData.isDisable ? "disabled" : ""}`}
                          href={!innerData.isDisable ? innerData.link : "#"}
                        >
                          <span>{innerData.title}</span>
                          {innerData.badge ? (
                            <div className="boom-badge-card badge-sm ml--5">
                              {innerData.badge}
                            </div>
                          ) : (
                            ""
                          )}
                        </Link>
                      </li>
                    ))}
                </ul>
              ) : data.isMenu ? (
                <div
                  className={`boom-megamenu ${
                    !sectionStates[data.text] ? "d-block active" : ""
                  }`}
                >
                  <div className="wrapper">
                    <div className="row row--0">
                      <NavProps list={data.inner} />
                      <NavProps list={data.dashboard} />
                      <NavProps list={data.upcoming} />
                      <div className="col-lg-3 single-mega-item">
                        <div className="header-menu-img">
                          <Image
                            src={menuImg}
                            width={326}
                            height={458}
                            alt="Menu Split Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Nav;
