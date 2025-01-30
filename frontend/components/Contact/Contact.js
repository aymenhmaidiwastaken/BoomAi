"use client";

import React from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="boom-contact-area boom-section-gapTop-big">
          <div className="container">
            <div className="row mt--40 row--15">
              <div className="col-lg-8">
                <div className="contact-details-box">
                  <h3 className="title">Get in Touch</h3>
                  <p className="mb--30">
                    Have a question or want to learn more about BoomAI? Fill out
                    the form below and our team will get back to you shortly.
                  </p>
                  <ContactForm />
                </div>
              </div>
              <div className="col-lg-4 mt_md--30 mt_sm--30">
                <div className="boom-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p className="b2">
                      San Francisco, CA <br /> United States
                    </p>
                  </div>
                </div>
                <div className="boom-address">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-headphones"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Number</h4>
                    <p className="b2">
                      <Link href="tel:+14155550199">+1 (415) 555-0199</Link>
                    </p>
                  </div>
                </div>
                <div className="boom-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p className="b2">
                      <Link href="mailto:hello@boomai.com">hello@boomai.com</Link>
                    </p>
                    <p className="b2">
                      <Link href="mailto:support@boomai.com">
                        support@boomai.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
