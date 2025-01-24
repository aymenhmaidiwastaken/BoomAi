"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "venobox/dist/venobox.min.css";

import TestimonialData from "../../data/testimonial.json";

const Testimonial = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "70%" : "100%",
      });
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Slider
            {...settings}
            className="service-wrapper boom-service-slider-actvation slick-grid-15 boom-slick-dot boom-gradient-arrows"
          >
            {TestimonialData &&
              TestimonialData.testimonial.map((data, index) => (
                <div className="slide-single-layout" key={index}>
                  <div
                    className={`boom-box-card ${
                      data.isActive ? "active" : ""
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
