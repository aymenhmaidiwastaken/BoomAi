import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPost = ({ blogpost }) => {
  return (
    <>
      <div className="inner">
        <ul>
          {blogpost.slice(0, 3).map((data) => (
            <li key={data.id}>
              <div className="list-blog-sm">
                <div className="img">
                  <Image src={data.img} width={120} height={85} alt="Blog" />
                </div>
                <div className="content">
                  <Link className="d-block" href={`/blog-detail/${data.id}`}>
                    {data.title}
                  </Link>
                  <span className="cate">{data.cate}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogPost;
