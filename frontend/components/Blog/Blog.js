import Image from "next/image";
import React from "react";

import BlogData from "../../data/blog.json";
import bgShape from "../../public/images/bg/bg-shape-two.png";

import BlogItem from "./BlogItem";
import Categories from "./BlogItems/Categories";
import BlogPost from "./BlogItems/BlogPost";
import Archives from "./BlogItems/Archives";
import BlogTags from "./BlogItems/BlogTags";
import BrandTwo from "../Brands/Brand-Two";

const Blog = () => {
  return (
    <>
      <div className="boom-blog-area boom-section-gap bg-color-1">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-8">
              <BlogItem blog={BlogData && BlogData.blog} />
            </div>
            <div className="col-lg-4 mt_md--40 mt_sm--40">
              <aside className="boom-sidebar">
                <div className="boom-single-widget widget_search mt--40">
                  <div className="inner">
                    <form className="blog-search" action="#">
                      <input type="text" placeholder="Search ..." />
                      <button className="search-button">
                        <i className="feather-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="boom-single-widget widget_categories mt--40">
                  <h3 className="title">Categories</h3>
                  <Categories category={BlogData && BlogData.categories} />
                </div>
                <div className="boom-single-widget widget_recent_entries mt--40">
                  <h3 className="title">Post</h3>
                  <BlogPost blogpost={BlogData && BlogData.blog} />
                </div>
                <div className="boom-single-widget widget_archive mt--40">
                  <h3 className="title">Archives</h3>
                  <Archives blogarc={BlogData && BlogData.blog} />
                </div>
                <div className="boom-single-widget widget_tag_cloud mt--40">
                  <h3 className="title">Tags</h3>
                  <BlogTags tags={BlogData && BlogData.tags} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div className="boom-brand-area boom-section-gap bg-color-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="rating">
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                </div>
                <p className="subtitle mb--0">Based on 20,000+ reviews on</p>
              </div>
            </div>
          </div>
          <BrandTwo />
        </div>

        <div className="bg-shape-left">
          <Image src={bgShape} width={688} height={1055} alt="Bg shape" />
        </div>
      </div>
    </>
  );
};

export default Blog;
