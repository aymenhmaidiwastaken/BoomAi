"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import BlogData from "../../data/blog.json";

import Categories from "../Blog/BlogItems/Categories";
import BlogPost from "../Blog/BlogItems/BlogPost";
import Archives from "../Blog/BlogItems/Archives";
import BlogTags from "../Blog/BlogItems/BlogTags";

const SingleBlog = ({ getBlog }) => {
  const router = useRouter();
  const postId = parseInt(getBlog.blogId);
  
  let blogPosts = JSON.parse(JSON.stringify(BlogData.blog));

  const matchedBlog = blogPosts.find((post) => post.id === postId);

  useEffect(() => {
    if (postId && !matchedBlog) {
      router.push("/blog");
    }
  }, [matchedBlog, router]);

  return (
    <>
      <div className="boom-blog-section boom-section-gap-big bg-color-1">
        {matchedBlog && (
          <div className="container">
            <div className="row row--30">
              <div className="col-lg-8">
                <div className="boom-blog-details-area">
                  <div className="post-page-banner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="content text-center">
                            <div className="thumbnail">
                              <Image
                                className="w-100 radius"
                                src={matchedBlog.blogImg}
                                width={790}
                                height={445}
                                alt="Blog Images"
                              />
                            </div>
                            <ul className="boom-meta-list">
                              <li>
                                <i className="feather-user me-2"></i>
                                <a href="#">BoomAI Team</a>
                              </li>
                              <li>
                                <i className="feather-calendar me-2"></i>
                                {matchedBlog.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details-content pt--40">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="content">
                            <h2 className="title">{matchedBlog.title}</h2>

                            <p>
                              Integrating artificial intelligence (AI) into your
                              startup can indeed unlock exponential growth by
                              enhancing efficiency, improving decision-making,
                              and providing innovative solutions. Here are 10
                              ways to supercharge your startup with AI
                              integration:
                            </p>

                            <h6>1.Automated Customer Support:</h6>
                            <p>
                              Implement AI-powered chatbots and virtual
                              assistants to provide instant and personalized
                              customer support. This not only improves customer
                              satisfaction but also frees up human resources for
                              more complex tasks.
                            </p>

                            <h6>2.Data-driven Decision Making:</h6>
                            <p>
                              Implement AI-powered chatbots and virtual
                              assistants to provide instant and personalized
                              customer support. This not only improves customer
                              satisfaction but also frees up human resources for
                              more complex tasks.
                            </p>

                            <h6>3.AI-driven Innovation:</h6>
                            <p>
                              Encourage a culture of innovation by using AI to
                              generate insights and ideas. AI can assist in
                              identifying market gaps, predicting industry
                              trends, and proposing innovative solutions to
                              common challenges.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="post-page-banner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="content text-center">
                            <div className="thumbnail">
                              <Image
                                className="w-100 radius"
                                src={matchedBlog.blogImg2}
                                width={790}
                                height={445}
                                alt="Blog Images"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details-content pt--40 boom-section-gapBottom">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.There are many variations of passages of
                              Lorem Ipsum available, but the majority have
                              suffered alteration in some form, by injected
                              humour, or randomised words which don't look even
                              slightly believable. If you are going to use a
                              passage of Lorem Ipsum, you need to be sure there
                              isn't anything embarrassing hidden in the middle
                              of text. All the Lorem Ipsum generators on the
                              Internet tend to repeat predefined chunks as
                              necessary, making this the first true generator on
                              the Internet. It uses a dictionary of over 200
                              Latin words, combined with a handful of model
                              sentence structures, to generate Lorem Ipsum which
                              looks reasonable.
                            </p>

                            <p>
                              It has survived not only five centuries, but also
                              the leap into electronic typesetting, remaining
                              essentially unchanged. It was popularised in the
                              1960s with the release of Letraset sheets
                              containing Lorem Ipsum passages, and more recently
                              with desktop publishing software like Aldus
                              PageMaker including versions of Lorem Ipsum.
                            </p>

                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words.
                            </p>

                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable.
                            </p>

                            <p>
                              If you are going to use a passage of Lorem Ipsum,
                              you need to be sure there isn't anything
                              embarrassing hidden in the middle of text. All the
                              Lorem Ipsum generators on the Internet tend to
                              repeat predefined chunks as necessary, making this
                              the first true generator on the Internet.
                            </p>

                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text. All the Lorem Ipsum generators on the
                              Internet tend to repeat predefined chunks as
                              necessary, making this the first true generator on
                              the Internet. It uses a dictionary of over 200
                              Latin words, combined with a handful of model
                              sentence structures, to generate Lorem Ipsum which
                              looks reasonable.
                            </p>

                            <div className="category-meta">
                              <span className="text">Tags:</span>
                              <BlogTags tags={BlogData && BlogData.tags} />
                            </div>

                            <div className="boom-comment-form pt--60">
                              <div className="inner">
                                <div className="section-title">
                                  <span className="subtitle">
                                    Have a Comment?
                                  </span>
                                  <h2 className="title">Leave a Reply</h2>
                                </div>
                                <form className="mt--40">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                      <div className="rnform-group">
                                        <input type="text" placeholder="Name" />
                                      </div>
                                      <div className="rnform-group">
                                        <input
                                          type="email"
                                          placeholder="Email"
                                        />
                                      </div>
                                      <div className="rnform-group">
                                        <input
                                          type="text"
                                          placeholder="Website"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                      <div className="rnform-group">
                                        <textarea placeholder="Comment"></textarea>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="blog-btn">
                                        <a
                                          className="btn-default"
                                          href="blog-details.html"
                                        >
                                          <span>SEND MESSAGE</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
        )}
      </div>
    </>
  );
};

export default SingleBlog;
