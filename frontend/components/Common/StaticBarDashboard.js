import React from "react";
import Form from "./Form";

const StaticbarDashboard = () => {
  return (
    <>
      <div className="boom-static-bar">
        <Form />

        <p className="b3 small-text">
          BoomAI can make mistakes. Consider checking important information.
        </p>
      </div>
    </>
  );
};

export default StaticbarDashboard;
