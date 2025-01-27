"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import sal from "sal.js";

import DocImg from "../../public/images/icons/document-file.png";

import TextGeneratorData from "../../data/dashboard.json";
import Reaction from "../Common/Reaction";
import TopBar from "../Common/TopBar";

const TextGenerator = () => {
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (index) => {
    setEditableIndex(index);
    setEditedText(TextGeneratorData.textGenerator[index].desc);
  };

  const handleSave = (index) => {
    const newTextGeneratorData = [...TextGeneratorData.textGenerator];
    newTextGeneratorData[index].desc = editedText;
    setEditableIndex(null);
  };

  const handleCancel = () => {
    setEditableIndex(null);
    setEditedText("");
  };

  useEffect(() => {
    sal();
  }, []);

  return (
    <>
      <TopBar
        barImg={DocImg}
        title="Website roadmap title write me"
        wdt={14}
        htd={18}
      />
      {TextGeneratorData &&
        TextGeneratorData.textGenerator.map((data, index) => (
          <div className="chat-box-list pb-0" id="chatContainer" key={index}>
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
                    {editableIndex === index ? (
                      <textarea
                        className="editable my-4"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                    ) : (
                      <p className="editable me-4">{data.desc}</p>
                    )}

                    <div
                      className={`edit-actions ms-0 ${
                        editableIndex !== null ? "d-inline-flex ms-0" : ""
                      }`}
                    >
                      <button
                        className="edit-btn btn-default btn-small btn-border"
                        onClick={() => handleEdit(index)}
                      >
                        <span className="text">Edit</span>
                      </button>
                      <button
                        className="save-regenerate-btn btn-default btn-small"
                        onClick={() => handleSave(index)}
                      >
                        <span className="text">Save &amp; Regenerate</span>
                      </button>
                      <button
                        className="cancel-btn btn-default btn-small btn-border"
                        onClick={handleCancel}
                      >
                        <span className="text">Cancel</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`chat-box ai-speech ${
                data.isBorder ? "chat-border-bottom" : ""
              }`}
            >
              {data.content.map((innerData, innerIndex) => (
                <div className="inner" key={innerIndex}>
                  <div className="chat-section">
                    <div className="author">
                      <Image
                        className="w-100"
                        src={innerData.aiImg}
                        width={40}
                        height={40}
                        alt="BoomAI"
                      />
                    </div>
                    <div className="chat-content">
                      <h6 className="title">
                        {innerData.title}
                        <span className="boom-badge-card">
                          <i className="fa-sharp fa-regular fa-check"></i>
                          {innerData?.badge}
                        </span>
                      </h6>
                      {innerData.desc2 ? (
                        <p className="">{innerData.desc2}</p>
                      ) : (
                        ""
                      )}
                      <p className="mb--20">{innerData.desc}</p>
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

export default TextGenerator;
