"use client";

import React, { useState } from "react";

import RightPanelData from "../../data/header.json";
import SingleRightPanel from "./HeaderProps/SingleRightPanel";
import { useAppContext } from "@/context/Context";

const RightDashboardSidebar = () => {
  const { shouldCollapseRightbar } = useAppContext();
  const [sectionStates, setSectionStates] = useState({
    previous: true,
    yesterday: true,
    older: true,
  });

  const toggleSection = (section) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <>
      <div
        className={`boom-right-side-panel popup-dashboardright-section ${
          shouldCollapseRightbar ? "collapsed" : ""
        }`}
      >
        <div className="right-side-top">
          <a
            className="btn-default bg-solid-primary"
            data-bs-toggle="modal"
            data-bs-target="#newchatModal"
          >
            <span className="icon">
              <i className="feather-plus-circle"></i>
            </span>
            <span>New Chat</span>
          </a>
        </div>
        <div className="right-side-bottom">
          <div className="small-search search-section mb--20">
            <input type="search" placeholder="Search Here..." />
            <i className="feather-search"></i>
          </div>

          <div className="chat-history-section">
            <h6 className="title">Today</h6>
            <ul className="chat-history-list">
              {RightPanelData &&
                RightPanelData.rightPanel.map((data, index) => (
                  <SingleRightPanel
                    {...data}
                    key={index}
                    RightPanelData={data.today}
                  />
                ))}
            </ul>
          </div>

          <div
            className={`chat-history-section has-show-more ${
              !sectionStates.yesterday ? "active" : ""
            }`}
          >
            <h6 className="title">Yesterday</h6>
            <ul className="chat-history-list has-show-more-inner-content">
              {RightPanelData &&
                RightPanelData.rightPanel.map((data, index) => (
                  <SingleRightPanel
                    {...data}
                    key={index}
                    RightPanelData={data.yesterday}
                  />
                ))}
            </ul>
            <div
              className={`boom-show-more-btn ${
                !sectionStates.yesterday ? "active" : ""
              }`}
              onClick={() => toggleSection("yesterday")}
            >
              Show More
            </div>
          </div>

          <div
            className={`chat-history-section has-show-more ${
              !sectionStates.previous ? "active" : ""
            }`}
          >
            <h6 className="title">Previous 7 days</h6>
            <ul className="chat-history-list has-show-more-inner-content">
              {RightPanelData &&
                RightPanelData.rightPanel.map((data, index) => (
                  <SingleRightPanel
                    {...data}
                    key={index}
                    RightPanelData={data.previous}
                  />
                ))}
            </ul>
            <div
              className={`boom-show-more-btn ${
                !sectionStates.previous ? "active" : ""
              }`}
              onClick={() => toggleSection("previous")}
            >
              Show More
            </div>
          </div>

          <div
            className={`chat-history-section has-show-more ${
              !sectionStates.older ? "active" : ""
            }`}
          >
            <h6 className="title">November</h6>
            <ul className="chat-history-list has-show-more-inner-content">
              {RightPanelData &&
                RightPanelData.rightPanel.map((data, index) => (
                  <SingleRightPanel
                    {...data}
                    key={index}
                    RightPanelData={data.older}
                  />
                ))}
            </ul>
            <div
              className={`boom-show-more-btn mb--100 ${
                !sectionStates.older ? "active" : ""
              }`}
              onClick={() => toggleSection("older")}
            >
              Show More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightDashboardSidebar;
