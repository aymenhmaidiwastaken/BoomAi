"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sal from "sal.js";

import ImageGeneratorData from "../../data/dashboard.json";

import imgPhoto from "../../public/images/icons/photo-icon.png";

import TopBar from "../Common/TopBar";
import Reaction from "../Common/Reaction";

const ImageGenerator = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <TopBar
        padding={true}
        barImg={imgPhoto}
        title="Website roadmap title write me"
        wdt={24}
        htd={24}
      />
      {ImageGeneratorData &&
        ImageGeneratorData.imageGenerator.map((data, index) => (
          <div className="chat-box-list pt--0" id="chatContainer" key={index}>
            {data.isHead ? (
              <div className="chat-box author-speech">
                <div className="inner">
                  <div className="chat-section">
                    <div className="author">
                      <Image
                        className="w-100"
                        width={40}
                        height={40}
                        src={data.author}
                        alt="Author"
                      />
                    </div>
                    <div className="chat-content">
                      <h6 className="title">{data.title}</h6>
                      <p className="editable">{data.desc}</p>
                      <div className="img-box-grp mt--25 mb--20">
                        <div className="img-box">
                          <Image
                            className="radius"
                            width={250}
                            height={250}
                            src={data.img}
                            alt="Image Generation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className={`chat-box ai-speech ${
                data.isBorder ? "chat-border-bottom mb-0" : ""
              }`}
            >
              {data.content.map((innerData, innerIndex) => (
                <div className="inner" key={innerIndex}>
                  <div className="chat-section generate-section">
                    <div className="author">
                      <i className="fa-sharp fa-solid fa-check"></i>
                    </div>
                    <div className="chat-content">
                      <h6 className="title color-text-off mb--0">
                        {innerData.scan}
                      </h6>
                    </div>
                  </div>
                  <div className="chat-section generate-section">
                    <div className="author">
                      <Image
                        src={innerData.img}
                        width={41}
                        height={41}
                        alt="Loader Images"
                      />
                    </div>
                    <div className="chat-content">
                      <h6 className="title color-text-off mb--0">
                        {innerData.text}
                      </h6>
                    </div>
                  </div>
                  <div className="chat-section generate-details-section">
                    <div className="author">
                      <Image
                        className="w-100"
                        src={innerData.aiImg}
                        width={41}
                        height={41}
                        alt="BoomAI"
                      />
                    </div>
                    <div className="chat-content">
                      <h6 className="title mb--25">{innerData.title}</h6>

                      <div className="row img-box-grp img-checkbox-grp mb--25">
                        {innerData.checkBox ? (
                          innerData.checkBox.map((img, i) => (
                            <div className="col-md-6 single-checkbox" key={i}>
                              <div className="custom-control custom-checkbox image-checkbox">
                                <input type="checkbox" id={`ck${i + 1}a`} />

                                <label
                                  className="custom-control-label img-box"
                                  htmlFor={`ck${i + 1}a`}
                                >
                                  <Image
                                    className="img-fluid"
                                    src={img.generateImg}
                                    width={247}
                                    height={247}
                                    alt="#"
                                  />
                                </label>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="img-box xl-size mb--20">
                            <Image
                              className="radius"
                              src={innerData.generateImg}
                              width={522}
                              height={408}
                              alt="Image Generation"
                            />
                            <button className="download-btn btn-default btn-small bg-solid-primary">
                              <i className="fa-sharp fa-regular fa-download"></i>
                              <span>Download</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="button-group mb--20">
                        {innerData.tag &&
                          innerData.tag.map((list, i) => (
                            <a
                              className={`btn-default btn-extra-small btn-gray ${
                                list.isActive ? "active" : ""
                              }`}
                              href="#"
                              key={i}
                            >
                              {list.text}
                            </a>
                          ))}
                      </div>
                      <Reaction />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default ImageGenerator;
