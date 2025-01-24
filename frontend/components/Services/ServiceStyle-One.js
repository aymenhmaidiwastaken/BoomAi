"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import ServiceData from "../../data/serviceStyle.json";

import bg from "../../public/images/service/bg.png";
import bgHover from "../../public/images/service/bg-hover.png";

const ServiceStyleOne = () => {
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
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider
              {...settings}
              className="service-wrapper boom-service-slider-actvation slick-grid-15 boom-slick-dot boom-gradient-arrows"
            >
              {ServiceData &&
                ServiceData.serviceOne.map((data, index) => (
                  <div className="slide-single-layout" key={index}>
                    <div className="boom-box-card card-style-default boom-service-default has-bg-shaped">
                      <div className="inner">
                        <div className="icon">
                          <Image
                            src={data.img}
                            width={48}
                            height={48}
                            alt="Servece Icon"
                          />
                        </div>
                        <div className="description centered-shape">
                          <h5 className="title">{data.title}</h5>
                          <p className="desc">{data.desc}</p>
                          <Link className="read-more-btn" href="#">
                            Explore More{" "}
                            <span>
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="bg-shaped">
                        <Image
                          src={bg}
                          width={415}
                          height={344}
                          alt=""
                          className="bg"
                        />
                        <Image
                          src={bgHover}
                          width={415}
                          height={344}
                          alt=""
                          className="bg-hover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStyleOne;
