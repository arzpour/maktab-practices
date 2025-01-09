"use client";
import { getBlogsList } from "@/apis/client/blogs";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const BlogsList: React.FC = () => {
  const list = useQuery({ queryKey: ["blog-list"], queryFn: getBlogsList });
  console.log(list.data?.items);

  return <div>list</div>;
};

export default BlogsList;
