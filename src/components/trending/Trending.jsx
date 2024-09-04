import { useEffect, useState } from "react";
import { TrendingCard } from "./TrendingCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&&top=2")
      .then((responce) => responce.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1216px] w-full">
        <p>Trending</p>
        <div className="w-ful grid grid-cols-4 justify-center items-center">
          {articles.map((article) => {
            return <TrendingCard article={article} />;
          })}
        </div>
      </div>
    </div>
  );
};
