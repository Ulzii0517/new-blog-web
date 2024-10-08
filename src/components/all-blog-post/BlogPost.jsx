import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";

const BlogPost = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=12")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center w-full gap-8 pb-10">
        <div className="flex flex-col max-w-[1216px] w-full justify-center gap-[32px] ">
          <p className="text-[24px] font-bold font-sans">All Blog Post</p>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <button>All</button>
              <button>Design</button>
              <button>Travel</button>
              <button>Fashion</button>
              <button>Technology</button>
              <button>Branding</button>
            </div>
            <div className="flex ">View all</div>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px] px-[20px]">
        {articles.map((article) => {
          return (
            <Link href={`blog-list/${article.id}`}>
              <BlogCard article={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPost;
