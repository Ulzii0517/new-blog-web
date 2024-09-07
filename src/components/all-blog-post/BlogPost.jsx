import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogPost = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=9")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="container flex flex-wrap justify-between gap-4 max-w-[1216px] ">
        {articles.map((article) => {
          return <BlogCard article={article} />;
        })}
      </div>
    </div>
  );
};

export default BlogPost;
