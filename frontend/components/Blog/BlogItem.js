import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <>
      <div className="row mt_dec--30">
        <div className="col-lg-12">
          <div className="row row--15">
            {blog.slice(0, 8).map((data) => (
              <div className="col-lg-6 col-md-6 col-12 mt--30" key={data.id}>
                <div className="boom-card undefined">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link className="image" href={`/blog-detail/${data.id}`}>
                        <Image
                          src={data.img}
                          width={413}
                          height={281}
                          alt="Blog Image"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul className="boom-meta-list">
                        <li>
                          <i className="fa-sharp fa-regular fa-calendar-days icon-left"></i>{" "}
                          {data.date}
                        </li>
                        <li className="separator"></li>
                        <li className="catagory-meta">
                          <a href="#">{data.cate}</a>
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href={`/blog-detail/${data.id}`}>
                          {data.title}
                        </Link>
                      </h4>
                      <p className="description">{data.desc}</p>
                      <a className="btn-read-more border-transparent" href="#">
                        <span>
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <div className="boom-load-more text-center mt--60">
            <button className="btn btn-default btn-icon">
              <span>
                View More Post
                <span className="icon">
                  <i className="feather-loader"></i>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
