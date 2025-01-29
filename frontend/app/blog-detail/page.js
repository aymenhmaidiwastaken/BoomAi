"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const BlogLayout = ({ params }) => {
  const router = useRouter();
  const postId = params.blogId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/blog");
    }
  }, []);
};

export default BlogLayout;
