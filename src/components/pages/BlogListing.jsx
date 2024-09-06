import BlogPost from "../all-blog-post/BlogPost";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";



export const BlogListing = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <BlogPost />
      <Footer />
    </div>
  );
};
