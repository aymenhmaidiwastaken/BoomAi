"use client";

import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";

import darkImg from "../../public/images/switcher-img/dark.png";
import lightImg from "../../public/images/switcher-img/light.png";
import flag from "../../public/images/icons/en-us.png";
import flag2 from "../../public/images/icons/fr.png";

import UserNav from "../Common/UserNav";

const Appearance = () => {
  const [language, setLanguage] = useState({
    value: "English",
    label: "English",
    icon: flag,
  });
  const LanguageOptions = [
    { value: "English", label: "English", icon: flag },
    { value: "Spanish", label: "Spanish", icon: flag2 },
    { value: "Italic", label: "Italic", icon: flag },
    { value: "French", label: "French", icon: flag2 },
  ];

  const formatOptionLabel = ({ value, label, icon }) => (
    <div className="">
      <Image
        className="left-image"
        src={icon}
        alt={value}
        width={20}
        height={20}
      />
      <span style={{ marginLeft: "10px" }}>{label}</span>
    </div>
  );
  return (
    <>
      <div className="boom-main-content mb-0">
        <div className="boom-daynamic-page-content center-width">
          <div className="boom-dashboard-content">
            <UserNav title="Appearance" />
            <div className="content-page pb--50">
              <div className="chat-box-list">
                <div className="single-settings-box">
                  <h4 className="title">Appearance</h4>
                  <div className="switcher-btn-grp">
                    <button className="dark-switcher active">
                      <Image
                        src={darkImg}
                        width={200}
                        height={150}
                        alt="Switcher Image"
                      />
                      <span className="text">Dark Mode</span>
                    </button>
                    <button className="light-switcher disabled" disabled>
                      <Image
                        src={lightImg}
                        width={200}
                        height={150}
                        alt="Switcher Image"
                      />
                      <span className="text">Light Mode</span>
                      <span className="boom-badge-card badge-sm position-top-right">
                        Coming
                      </span>
                    </button>
                  </div>
                </div>

                <div className="single-settings-box">
                  <h4 className="title">Languages</h4>
                  <div className="select-area">
                    <h6 className="text">System Language</h6>
                    <div className="boom-modern-select bg-transparent height-45">
                      <Select
                        instanceId="sortByAuthor"
                        className="bootstrap-select"
                        classNamePrefix="bootstrap-select"
                        defaultValue={language}
                        onChange={setLanguage}
                        options={LanguageOptions}
                        formatOptionLabel={formatOptionLabel}
                        closeMenuOnSelect={true}
                        maxMenuHeight={150}
                      />
                    </div>
                  </div>
                  <div className="select-area mt--20">
                    <h6 className="text">Generate Language</h6>

                    <div className="boom-modern-select bg-transparent height-45">
                      <div className="dropdown bootstrap-select">
                        <Select
                          instanceId="sortByAuthor"
                          className="bootstrap-select"
                          classNamePrefix="bootstrap-select"
                          defaultValue={LanguageOptions[3]}
                          onChange={setLanguage}
                          options={LanguageOptions}
                          formatOptionLabel={formatOptionLabel}
                          closeMenuOnSelect={true}
                          menuPlacement="top"
                          maxMenuHeight={150}
                        />
                      </div>
                    </div>
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

export default Appearance;
