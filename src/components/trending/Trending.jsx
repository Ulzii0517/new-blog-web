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
    <div>
      <p>Trending</p>
      <div>
        <TrendingCard article={articles} />;
      </div>
    </div>
  );
};
