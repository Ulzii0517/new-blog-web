import BlogPost from "../all-blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import MainLayout from "../layout/MainLayout";
import { Trending } from "../trending/Trending";
// import { Trending } from "../trending/TrendingCard";
import { useState, useEffect } from "react";

export const Homepage = () => {


  return (
    <div className="flex flex-col gap-[100px]">
      <Carousel />
      <Trending />
      <BlogPost />
    </div>
  );
};
