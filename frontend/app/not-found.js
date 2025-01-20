"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
};

export default ErrorPage;
