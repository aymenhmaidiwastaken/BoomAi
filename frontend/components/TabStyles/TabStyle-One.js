import Link from "next/link";
import Image from "next/image";
import React from "react";

import TabData from "../../data/tabStyle.json";

const TabStyleOne = () => {
  return (
    <>
      <div className="row row--30 align-items-center">
        <div className="col-lg-12">
          <div className="boom-default-tab style-three generator-tab-defalt">
            <ul className="nav nav-tabs tab-button" role="tablist">
              {TabData &&
                TabData.TabStyleOne.map((data, index) => (
                  <li
                    className="nav-item tabs__tab "
                    role="presentation"
                    key={index}
                  >
                    <button
                      className={`nav-link boom-gradient-btn without-shape-circle ${
                        data.isSelect ? "active" : ""
                      }`}
                      id={`${data.menuId}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${data.target}`}
                      type="button"
                      role="tab"
                      aria-controls={data.target}
                      aria-selected="false"
                    >
                      <span className="generator-icon">
                        <Image
                          src={data.iconImg}
                          width={24}
                          height={24}
                          alt="Vedio Generator Icon"
                        />
                        {data.text}
                      </span>
                      <span className="border-bottom-style"></span>
                    </button>
                  </li>
                ))}
            </ul>

            <div className="boom-tab-content tab-content">
              {TabData &&
                TabData.TabStyleOne.map((tab, index) => (
                  <div
                    className={`tab-pane fade ${
                      tab.isSelect ? "show active" : ""
                    }`}
                    id={tab.target}
                    role="tabpanel"
                    aria-labelledby={`${tab.menuId}-tab`}
                    key={index}
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">{tab.title}</h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                {tab.subItem.map((item, i) => (
                                  <li key={i}>
                                    <i className="fa-regular fa-circle-check"></i>
                                    {item.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="read-more">
                              <Link
                                className="btn-default color-blacked"
                                href="#"
                              >
                                Start Exploring Now
                                <i className="fa-sharp fa-solid fa-arrow-right ps-2"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div className="export-img img-bg-shape">
                                <Image
                                  src={tab.img}
                                  width={569}
                                  height={483}
                                  alt="Chat example Image"
                                />
                                <div className="image-shape"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabStyleOne;
