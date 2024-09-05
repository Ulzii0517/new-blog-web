import BlogPost from "../all-blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";
// import { Trending } from "../trending/TrendingCard";

export const Homepage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <Carousel />
      <Trending />
      <BlogPost />
      <Footer />
    </div>
  );
};
