import Link from "next/link";
import React from "react";

const FooterProps = ({ list }) => {
  return (
    <>
      {list.map((item, itemIndex) => (
        <div className="widget-menu-bottom" key={itemIndex}>
          <h4 className="title">{item.title}</h4>
          <div className="inner">
            <ul className="footer-link link-hover">
              {item.innerItem.map((inner, i) => (
                <li key={i}>
                  <Link href={inner.link}>{inner.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterProps;
