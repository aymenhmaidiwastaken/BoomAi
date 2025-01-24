import React from "react";

import AccordionData from "../../data/dashboard.json";

const AccordionItem = ({ parentClass }) => {
  return (
    <>
      <div className={`boom-accordion-style ${parentClass} accordion`}>
        <div className="accordion" id="accordionExamplea">
          {AccordionData &&
            AccordionData.accordion.map((data, index) => (
              <div className="accordion-item card" key={index}>
                <h2
                  className="accordion-header card-header"
                  id={`heading${index + 1}`}
                >
                  <button
                    className={`accordion-button ${
                      !data.isExpand ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index + 1}`}
                    aria-expanded={data.isExpand ? "true" : "false"}
                    aria-controls={`collapse${index + 1}`}
                  >
                    {data.title}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-collapse collapse ${
                    data.isExpand ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index + 1}`}
                  data-bs-parent="#accordionExamplea"
                >
                  <div className="accordion-body card-body">{data.desc}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
