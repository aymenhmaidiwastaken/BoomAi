import Link from "next/link";
import React from "react";

const Archives = ({ blogarc }) => {
  return (
    <>
      <div className="inner">
        <ul>
          {blogarc.map((data) => (
            <li key={data.id}>
              <Link href="#">
                <span className="cate">{data.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Archives;
