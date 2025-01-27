"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import sal from "sal.js";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-bash";

import DocImg from "../../public/images/icons/document-file.png";
import user from "../../public/images/team/team-01sm.jpg";
import loaderGif from "../../public/images/icons/loader-one.gif";
import avatar from "../../public/images/team/avater.png";
import Reaction from "../Common/Reaction";
import HtmlCode from "./HtmlCode";
import ServerCode from "./ServerCode";
import useClipboard from "@/context/useFetch";
import TopBar from "../Common/TopBar";

const CodeGenerator = () => {
  const codeBashRef = useRef(null);
  const codeBashRefTwo = useRef(null);
  const codeBashRefThree = useRef(null);
  const codeBashRefFour = useRef(null);
  const codeBashRefFive = useRef(null);

  const { isCopied } = useClipboard([
    { buttonClass: ".copy-bash", contentRef: codeBashRef },
    { buttonClass: ".copy-bash-two", contentRef: codeBashRefTwo },
    { buttonClass: ".copy-bash-three", contentRef: codeBashRefThree },
    { buttonClass: ".copy-bash-four", contentRef: codeBashRefFour },
    { buttonClass: ".copy-bash-five", contentRef: codeBashRefFive },
  ]);

  useEffect(() => {
    Prism.highlightAll();
    sal();
  }, []);

  const bashCodeString = `mkdir pricing-range-app
cd pricing-range-app
npm init -y
`;
  const bashCodeString2 = `npx create-react-app client`;
  const bashCodeString3 = `cd client 
npm install axios`;
  const nodeCodeString = `if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}`;

  return (
    <>
      <TopBar
        barImg={DocImg}
        title="Website roadmap title write me"
        wdt={14}
        htd={18}
      />
      <div className="chat-box-list pt--30" id="chatContainer">
        <div className="chat-box author-speech">
          <div className="inner">
            <div className="chat-section">
              <div className="author">
                <Image
                  className="w-100"
                  src={user}
                  width={40}
                  height={40}
                  alt="Author"
                />
              </div>
              <div className="chat-content">
                <h6 className="title">You</h6>
                <p>Please create a 5 Column table with HTML Css and js</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-box ai-speech">
          <div className="inner">
            <div className="chat-section generate-section">
              <div className="author">
                <i className="fa-sharp fa-solid fa-check"></i>
              </div>
              <div className="chat-content">
                <h6 className="title color-text-off mb--0">
                  Scanning the data...
                </h6>
              </div>
            </div>
            <div className="chat-section generate-section">
              <div className="author">
                <Image
                  src={loaderGif}
                  width={40}
                  height={40}
                  alt="Loader Images"
                />
              </div>
              <div className="chat-content">
                <h6 className="title color-text-off mb--0">
                  Generating answers for you…
                </h6>
              </div>
            </div>
            <div className="chat-section generate-details-section">
              <div className="author">
                <Image
                  className="w-100"
                  src={avatar}
                  width={40}
                  height={40}
                  alt="BoomAI"
                />
              </div>
              <div className="chat-content">
                <h6 className="title mb--20">
                  Certainly! Here&apos;s an example of a simple 5-column table
                  using HTML, CSS, and JavaScript:
                </h6>
                <HtmlCode />
                <Reaction />
              </div>
            </div>
          </div>
        </div>

        <div className="chat-box author-speech">
          <div className="inner">
            <div className="chat-section">
              <div className="author">
                <Image
                  className="w-100"
                  src={user}
                  width={40}
                  height={40}
                  alt="Author"
                />
              </div>
              <div className="chat-content">
                <h6 className="title">You</h6>
                <p>Develop a Pricing Range Application using the MERN Stack</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-box ai-speech">
          <div className="inner">
            <div className="chat-section generate-section">
              <div className="author">
                <i className="fa-sharp fa-solid fa-check"></i>
              </div>
              <div className="chat-content">
                <h6 className="title color-text-off mb--0">
                  Scanning the data...
                </h6>
              </div>
            </div>
            <div className="chat-section generate-section">
              <div className="author">
                <Image
                  src={loaderGif}
                  width={40}
                  height={40}
                  alt="Loader Images"
                />
              </div>
              <div className="chat-content">
                <h6 className="title color-text-off mb--0">
                  Generating answers for you…
                </h6>
              </div>
            </div>
            <div className="chat-section generate-details-section">
              <div className="author">
                <Image
                  className="w-100"
                  src={avatar}
                  width={40}
                  height={40}
                  alt="BoomAI"
                />
              </div>
              <div className="chat-content">
                <h6 className="title mb--20">
                  Certainly! Here&apos;s an example of Developing a Pricing
                  Range Application using the MERN Stack
                </h6>

                <article className="documentation_body shortcode_text mb--20">
                  <p className="mb--20">
                    Building a Pricing Range Application using the MERN
                    (MongoDB, Express.js, React, Node.js) stack involves
                    creating a full-stack web application that allows users to
                    input various parameters and receive a pricing range based
                    on certain criteria. Here&apos;s a step-by-step guide to
                    help you get started:
                  </p>
                  <h4 className="mb">
                    Step 1: Set Up Your Development Environment
                  </h4>
                  <p className="mb--20">
                    Make sure you have Node.js and npm installed on your
                    machine. You&apos;ll also need MongoDB for your database.
                  </p>
                  <h4 className="mb--20">
                    Step 2: Set Up the Backend (Node.js and Express)
                  </h4>
                  <p id="bash-code-one" className="c_head load-order-2">
                    1. Initialize your project:
                  </p>
                  <div className="highlight position-relative">
                    {isCopied ? (
                      <button className="copy-to-clipboard-button copy-bash">
                        Copied
                      </button>
                    ) : (
                      <button className="copy-to-clipboard-button copy-bash">
                        Copy
                      </button>
                    )}
                    <pre
                      className="language-bash"
                      tabIndex={0}
                      ref={codeBashRef}
                      style={{ backgroundColor: "#070710" }}
                    >
                      <code className="language-bash" language="bash">
                        {bashCodeString}
                      </code>
                    </pre>
                  </div>
                  <p id="bash-code-two" className="c_head load-order-2">
                    2. Install dependencies:
                  </p>
                  <div className="highlight position-relative">
                    {isCopied ? (
                      <button className="copy-to-clipboard-button copy-bash-two">
                        Copied
                      </button>
                    ) : (
                      <button className="copy-to-clipboard-button copy-bash-two">
                        Copy
                      </button>
                    )}
                    <pre
                      className="language-bash"
                      tabIndex={0}
                      ref={codeBashRefTwo}
                      style={{ backgroundColor: "#070710" }}
                    >
                      <code className="language-bash" language="bash">
                        npm install express mongoose cors
                      </code>
                    </pre>
                  </div>
                  <p id="javascript-code-two" className="c_head load-order-2">
                    3. Create a server file (e.g., server.js):
                  </p>
                  <ServerCode />
                  <p className="mb">4. Define MongoDB schema and model:</p>
                  <p className="mb--20">
                    Create a models folder and define your MongoDB schema and
                    model for storing pricing-related data.
                  </p>
                  <h4 className="mb--20">
                    Step 3: Set Up the Frontend (React)
                  </h4>
                  <p id="bash-code-three" className="c_head load-order-2">
                    1. Initialize your React app:
                  </p>
                  <div className="highlight position-relative">
                    {isCopied ? (
                      <button className="copy-to-clipboard-button copy-bash-three">
                        Copied
                      </button>
                    ) : (
                      <button className="copy-to-clipboard-button copy-bash-three">
                        Copy
                      </button>
                    )}
                    <pre
                      className="language-bash"
                      tabIndex={0}
                      ref={codeBashRefThree}
                      style={{ backgroundColor: "#070710" }}
                    >
                      <code className="language-bash" language="bash">
                        {bashCodeString2}
                      </code>
                    </pre>
                  </div>
                  <p id="bash-code-four" className="c_head load-order-2">
                    2. Install dependencies:
                  </p>
                  <div className="highlight position-relative">
                    {isCopied ? (
                      <button className="copy-to-clipboard-button copy-bash-four">
                        Copied
                      </button>
                    ) : (
                      <button className="copy-to-clipboard-button copy-bash-four">
                        Copy
                      </button>
                    )}
                    <pre
                      className="language-bash"
                      tabIndex={0}
                      ref={codeBashRefFour}
                      style={{ backgroundColor: "#070710" }}
                    >
                      <code className="language-bash" language="bash">
                        {bashCodeString3}
                      </code>
                    </pre>
                  </div>
                  <p className="mb--20">
                    4.Create components for your frontend application.
                  </p>
                  <p className="mb--20">
                    5.Set up API calls using Axios to communicate with your
                    backend.
                  </p>
                  <h4 className="mb--20">
                    Step 4: Connect Backend and Frontend
                  </h4>
                  <p id="javascript-code-three" className="c_head load-order-2">
                    Modify your backend to serve the React app:
                  </p>
                  <div className="highlight position-relative">
                    {isCopied ? (
                      <button className="copy-to-clipboard-button copy-bash-five">
                        Copied
                      </button>
                    ) : (
                      <button className="copy-to-clipboard-button copy-bash-five">
                        Copy
                      </button>
                    )}
                    <pre
                      className="language-javascript"
                      tabIndex={0}
                      ref={codeBashRefFive}
                      style={{ backgroundColor: "#070710" }}
                    >
                      <code
                        className="language-javascript"
                        language="javascript"
                      >
                        {nodeCodeString}
                      </code>
                    </pre>
                  </div>
                </article>
                <Reaction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeGenerator;
