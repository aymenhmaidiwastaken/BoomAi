"use client";

import React from "react";
import { Tooltip } from "react-tooltip";

const Form = () => {
  return (
    <>
      <Tooltip id="my-tooltip" className="custom-tooltip tooltip-inner" />
      <form className="new-chat-form border-gradient">
        <textarea rows="1" placeholder="Send a message..."></textarea>
        <div className="left-icons">
          <div title="BoomAI" className="form-icon icon-gpt">
            <i className="fa-sharp fa-regular fa-aperture"></i>
          </div>
        </div>
        <div className="right-icons">
          <div
            className="form-icon icon-plus"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Choose File"
          >
            <input type="file" className="input-file" name="myfile" multiple />
            <i className="fa-sharp fa-regular fa-plus"></i>
          </div>
          <a
            className="form-icon icon-mic"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Voice Search"
          >
            <i className="fa-regular fa-waveform-lines"></i>
          </a>
          <a
            className="form-icon icon-send"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Send message"
          >
            <i className="fa-sharp fa-solid fa-paper-plane-top"></i>
          </a>
        </div>
      </form>
    </>
  );
};

export default Form;
