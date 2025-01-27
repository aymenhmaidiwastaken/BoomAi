"use client";

import React, { useRef } from "react";
import useClipboard from "@/context/useFetch";

const ServerCode = () => {
  const codeBashRefSix = useRef(null);

  const { isCopied } = useClipboard([
    { buttonClass: ".copy-bash-six", contentRef: codeBashRefSix },
  ]);

  const serverCodeString = `const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/pricing-range-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your MongoDB schema and model here

// Define your API routes here

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`;

  return (
    <>
      <div className="highlight position-relative">
        {isCopied ? (
          <button className="copy-to-clipboard-button copy-bash-six">
            Copied
          </button>
        ) : (
          <button className="copy-to-clipboard-button copy-bash-six">
            Copy
          </button>
        )}
        <pre
          className="language-javascript"
          tabIndex={0}
          ref={codeBashRefSix}
          style={{ backgroundColor: "#070710" }}
        >
          <code className="language-javascript" language="javascript">
            {serverCodeString}
          </code>
        </pre>
      </div>
    </>
  );
};

export default ServerCode;
