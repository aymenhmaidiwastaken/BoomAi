"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import AdvanceTabData from "../../data/tabStyle.json";

const AdvanceTab = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <div className="row row--30">
        <div className="col-lg-12">
          <div className="tab-content">
            {AdvanceTabData &&
              AdvanceTabData.advanceTab.map((data, index) => (
                <div
                  className={`tab-pane fade ${
                    data.isSelect ? "show active" : ""
                  } advance-tab-content-1 right-top`}
                  id={`${data.tabId}-${index + 1}`}
                  role="tabpanel"
                  aria-labelledby={`${data.target}-${index + 1}`}
                  key={index}
                >
                  <div className="boom-splite-style">
                    <div className="split-wrapper">
                      <div className="row g-0 radius-10 align-items-center">
                        <div className="col-lg-12 col-xl-5 col-12">
                          <div className="thumbnail">
                            <Image
                              className="radius"
                              src={data.img}
                              width={544}
                              height={504}
                              alt="split Images"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-7 col-12">
                          <div className="split-inner">
                            <div className="subtitle">
                              <span className="theme-gradient">
                                {data.subTitle}
                              </span>
                            </div>
                            <h2
                              className="title sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="200"
                            >
                              {data.title}
                            </h2>
                            <p
                              className="description sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="300"
                            >
                              {data.desc}
                            </p>
                            <div
                              className="view-more-button mt--35 sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="400"
                            >
                              <Link
                                className="btn-default color-blacked"
                                href="/contact"
                              >
                                Try It Now{" "}
                                <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                              </Link>
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
        <div className="col-lg-12 mt--60">
          <div className="advance-tab-button advance-tab-button-1 right-top">
            <ul
              className="nav nav-tabs tab-button-list"
              id="myTab-3"
              role="tablist"
            >
              {AdvanceTabData &&
                AdvanceTabData.advanceTab.map((list, i) => (
                  <li className="col-lg-3 nav-item" role="presentation" key={i}>
                    <a
                      href="#"
                      className={`nav-link tab-button ${
                        list.isSelect ? "active" : ""
                      }`}
                      id={`${list.target}-${i + 1}`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${list.tabId}-${i + 1}`}
                      role="tab"
                      aria-controls={`${list.tabId}-${i + 1}`}
                      aria-selected={list.isSelect}
                    >
                      <div className="tab">
                        <div className="count-text">
                          <span className="theme-gradient">0{i + 1}</span>
                        </div>
                        <h4 className="title">{list.menuText} </h4>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceTab;
