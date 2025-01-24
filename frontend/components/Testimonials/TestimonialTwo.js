"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "venobox/dist/venobox.min.css";

import TestimonialData from "../../data/testimonial.json";

const TestimonialTwo = () => {
  const [showToggle, setShowToggle] = useState(false);
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "70%" : "100%",
      });
    });
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="section-title text-center"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="150"
          >
            <h4 className="subtitle">
              <span className="theme-gradient">customer saying</span>
            </h4>
            <h2 className="title w-600 mb--20">
              The opinions of the community
            </h2>
          </div>
        </div>
      </div>

      <div
        className={`testimonial-wrapper has-show-more ${
          showToggle ? "active" : ""
        }`}
      >
        <div className="has-show-more-inner-content large-height">
          <div className="row row--15">
            {TestimonialData &&
              TestimonialData.testimonial.map((data, index) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="700"
                  key={index}
                >
                  <div
                    className={`boom-box-card ${
                      data.isBorder ? "active" : ""
                    } card-style-default testimonial-style-defalt has-bg-shaped`}
                  >
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">{data.desc}</p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">{data.name}</p>
                            <p className="desc">{data.post}</p>
                            <div className="desc-img">
                              <Image
                                src={data.brandImg}
                                width={86}
                                height={23}
                                alt="Brand Image"
                              />
                            </div>
                          </div>
                          <div className="meta-img-section">
                            <Link
                              className="btn-default rounded-player style-two xs-size popup-video"
                              href="https://www.youtube.com/watch?v=ikEdN260zRg"
                              data-vbtype="video"
                            >
                              <span>
                                <i className="fa-duotone fa-play"></i>
                              </span>
                            </Link>
                            <a className="image" href="#">
                              <Image
                                src={data.userImg}
                                width={43}
                                height={43}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <Image
                        className="bg"
                        src={data.img}
                        width={415}
                        height={287}
                        alt=""
                      />
                      <Image
                        className="bg-hover"
                        src={data.imgHover}
                        width={415}
                        height={287}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div
          className={`boom-show-more-btn ${showToggle ? "active" : ""}`}
          onClick={() => setShowToggle(!showToggle)}
        >
          Show {!showToggle ? "More" : "Less"}
        </div>
      </div>
    </>
  );
};

export default TestimonialTwo;
