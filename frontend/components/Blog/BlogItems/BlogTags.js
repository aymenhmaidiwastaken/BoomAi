import React from "react";

const BlogTags = ({ tags }) => {
  return (
    <>
      <div className="inner">
        <div className="tagcloud">
          {tags.map((data, index) => (
            <a href="#" key={index}>
              {data.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogTags;
