"use client";

import React, { useEffect } from "react";
import sal from "sal.js";

const Compare = ({ subTitle, title, postion, titleType }) => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <div className="boom-pricing-detailed-area mt--60">
      <div className="row">
        <div className="col-lg-12">
          <div
            className={`section-title text-${postion} mb--30`}
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="150"
          >
            {subTitle ? (
              <h4 className="subtitle">
                <span className="theme-gradient">{subTitle}</span>
              </h4>
            ) : (
              ""
            )}
            {titleType ? (
              <h2 className="title w-600 mb--0">{title}</h2>
            ) : (
              <h3 className="title w-600 mb--0">{title}</h3>
            )}
          </div>
        </div>
      </div>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="boom-compare-table style-1">
            <table className="table-responsive">
              <thead>
                <tr>
                  <th></th>
                  <th className="sm-radius-top-left">Free</th>
                  <th className="style-prymary">Creator</th>
                  <th className="style-prymary">Business</th>
                  <th className="style-prymary sm-radius-top-right">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="heading-row">
                  <td>
                    <h6>Price & Credits</h6>
                  </td>
                  <td>
                    <h6>Price & Credits</h6>
                  </td>
                  <td>
                    <h6>Price & Credits</h6>
                  </td>
                  <td>
                    <h6>Price & Credits</h6>
                  </td>
                  <td>
                    <h6>Price & Credits</h6>
                  </td>
                </tr>
                <tr>
                  <td>Photo Avatar</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Instant Avatar</td>
                  <td>Paid Add-On</td>
                  <td>Paid Add-On</td>
                  <td>Paid Add-On</td>
                  <td>Customizable</td>
                </tr>
                <tr>
                  <td>Unit Price</td>
                  <td>Free</td>
                  <td>$2 / Credit Monthly</td>
                  <td>$3 / Credit Monthly</td>
                  <td>Customizable</td>
                </tr>
                <tr>
                  <td>Credit Plans</td>
                  <td>1 Credit</td>
                  <td>15, 30, 60, 90, 120 / Month</td>
                  <td>30, 60, 120, 180, 300 / Month</td>
                  <td>Customizable</td>
                </tr>
                <tr>
                  <td>Switch/Cancel Anytime</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>Customizable</td>
                </tr>
                <tr>
                  <td>Unit Price</td>
                  <td>Free</td>
                  <td>$2 / Credit Monthly</td>
                  <td>$3 / Credit Monthly</td>
                  <td>Customizable</td>
                </tr>
                <tr className="heading-row">
                  <td>
                    <h6>Avatars</h6>
                  </td>
                  <td>
                    <h6>Avatars</h6>
                  </td>
                  <td>
                    <h6>Avatars</h6>
                  </td>
                  <td>
                    <h6>Avatars</h6>
                  </td>
                  <td>
                    <h6>Avatars</h6>
                  </td>
                </tr>
                <tr>
                  <td>Public Avatars</td>
                  <td>Free</td>
                  <td>100+ Premium Avatars</td>
                  <td>100+ Premium Avatars</td>
                  <td>100+ Premium Avatars</td>
                </tr>
                <tr>
                  <td>Photo Avatar</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Instant Avatar</td>
                  <td>Paid Add-On</td>
                  <td>Paid Add-On</td>
                  <td>Paid Add-On</td>
                  <td>Customizable</td>
                </tr>
                <tr>
                  <td>Studio Avatar</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="heading-row">
                  <td>
                    <h6>All Features</h6>
                  </td>
                  <td>
                    <h6>All Features</h6>
                  </td>
                  <td>
                    <h6>All Features</h6>
                  </td>
                  <td>
                    <h6>All Features</h6>
                  </td>
                  <td>
                    <h6>All Features</h6>
                  </td>
                </tr>
                <tr>
                  <td>Avatar FaceSwap</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Photo Avatar Generation</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Text2Image</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>GPT4 Script Writer</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>AI Matting</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>URL To Video</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="heading-row">
                  <td>
                    <h6>Team Collaboration</h6>
                  </td>
                  <td>
                    <h6>Team Collaboration</h6>
                  </td>
                  <td>
                    <h6>Team Collaboration</h6>
                  </td>
                  <td>
                    <h6>Team Collaboration</h6>
                  </td>
                  <td>
                    <h6>Team Collaboration</h6>
                  </td>
                </tr>
                <tr>
                  <td>Space Seats</td>
                  <td>2 Seats</td>
                  <td>3 Seats</td>
                  <td>5 Seats</td>
                  <td>Customizable</td>
                </tr>
                <tr>
                  <td>Credit Control</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Role Control</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Usage Report</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Brand Kit</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Access Control</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>SSO</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="heading-row">
                  <td>
                    <h6>Video Creation</h6>
                  </td>
                  <td>
                    <h6>Video Creation</h6>
                  </td>
                  <td>
                    <h6>Video Creation</h6>
                  </td>
                  <td>
                    <h6>Video Creation</h6>
                  </td>
                  <td>
                    <h6>Video Creation</h6>
                  </td>
                </tr>
                <tr>
                  <td>Audio Input</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Video Duration</td>
                  <td>1-Min Max Duration</td>
                  <td>5-Min Max Duration</td>
                  <td>20-Min Max Duration</td>
                  <td>60-Min Max Duration</td>
                </tr>
                <tr>
                  <td>Video Templates</td>
                  <td>400+</td>
                  <td>400+</td>
                  <td>400+</td>
                  <td>400+</td>
                </tr>
                <tr>
                  <td>Stock Elements</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Audio Recording</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Import PPT/PDF</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Image/Video Background</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Background Music</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Stock Library</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Video Animation</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>1080P Export</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Audio Input</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Priority Process</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>API Integration</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4K Export</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Auto Captions</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>SRT Download</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="heading-row">
                  <td>
                    <h6>Video Share</h6>
                  </td>
                  <td>
                    <h6>Video Share</h6>
                  </td>
                  <td>
                    <h6>Video Share</h6>
                  </td>
                  <td>
                    <h6>Video Share</h6>
                  </td>
                  <td>
                    <h6>Video Share</h6>
                  </td>
                </tr>
                <tr>
                  <td>Audio Input</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Stock Elements</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Audio Recording</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Import PPT/PDF</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Image/Video Background</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Background Music</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
