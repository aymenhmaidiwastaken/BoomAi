"use client";

import React, { useEffect, useRef, useState } from "react";
import useClipboard from "@/context/useFetch";

const HtmlCode = () => {
  const codeRef = useRef(null);
  const cssCodeRef = useRef(null);
  const jsCodeRef = useRef(null);

  const { isCopied } = useClipboard([
    { buttonClass: ".copy-html", contentRef: codeRef },
    { buttonClass: ".copy-css", contentRef: cssCodeRef },
    { buttonClass: ".copy-js", contentRef: jsCodeRef },
  ]);

  const htmlCodeString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>5 Column Table</title>
    </head>
    <body>
        <div class="table-container">
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table content goes here -->
                </tbody>
            </table>
        </div>
        <script src="script.js"></script>
    </body>
    </html>
  `;

  const cssCodeString = `
body {
    font-family: Arial, sans-serif;
}

.table-container {
    margin: 20px;
    overflow-x: auto;
}

#data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

#data-table th, #data-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#data-table th {
    background-color: #f2f2f2;
}`;

  const jsCodeString = `document.addEventListener('DOMContentLoaded', function () {
      // Sample data to populate the table
      const data = [
          ["Row 1, Col 1", "Row 1, Col 2", "Row 1, Col 3", "Row 1, Col 4", "Row 1, Col 5"],
          ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3", "Row 2, Col 4", "Row 2, Col 5"],
          ["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3", "Row 3, Col 4", "Row 3, Col 5"],
      ];

      const tableBody = document.querySelector('#data-table tbody');

      // Populate the table with data
      data.forEach(rowData => {
          const row = document.createElement('tr');
          rowData.forEach(cellData => {
              const cell = document.createElement('td');
              cell.textContent = cellData;
              row.appendChild(cell);
          });
          tableBody.appendChild(row);
      });
  });
  `;

  return (
    <>
      <article className="documentation_body shortcode_text mb--20">
        <p id="from-an-html-element" className="c_head load-order-2">
          HTML Code Blocks
        </p>
        <div className="highlight position-relative">
          {isCopied ? (
            <button className="copy-to-clipboard-button copy-html">
              Copied
            </button>
          ) : (
            <button className="copy-to-clipboard-button copy-html">Copy</button>
          )}
          <pre
            className="language-html"
            tabIndex={0}
            ref={codeRef}
            style={{ backgroundColor: "#070710" }}
          >
            <code className="language-html" language="markup">
              {htmlCodeString}
            </code>
          </pre>
        </div>

        <p id="css-code" className="c_head load-order-2">
          CSS Source Code
        </p>
        <div className="highlight position-relative">
          {isCopied ? (
            <button className="copy-to-clipboard-button copy-css">
              Copied
            </button>
          ) : (
            <button className="copy-to-clipboard-button copy-css">Copy</button>
          )}
          <pre
            className="language-javascript"
            tabIndex={0}
            ref={cssCodeRef}
            style={{ backgroundColor: "#070710" }}
          >
            <code className="language-javascript" language="css">
              {cssCodeString}
            </code>
          </pre>
        </div>

        <p id="css-code" className="c_head load-order-2">
          JavaScript Source Code
        </p>
        <div className="highlight position-relative">
          {isCopied ? (
            <button className="copy-to-clipboard-button copy-js">Copied</button>
          ) : (
            <button className="copy-to-clipboard-button copy-js">Copy</button>
          )}
          <pre
            className="language-javascript"
            tabIndex={0}
            ref={jsCodeRef}
            style={{ backgroundColor: "#070710" }}
          >
            <code className="language-javascript" language="javascript">
              {jsCodeString}
            </code>
          </pre>
        </div>
      </article>
    </>
  );
};

export default HtmlCode;
