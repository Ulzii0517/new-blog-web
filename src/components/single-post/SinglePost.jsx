import { useEffect, useState } from "react";
import SingleImage from "./SingleImage";


export const SinglePost = () => {

const [articles, setArticles] = useState([]);

const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=1")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
    <div className="flex flex-col justify-center items-center m-auto w-full py-[100px]">
      <div className="container flex flex-col items-center max-w-[800px] w-full">

      <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
        {articles.map((article) => {
          return <SingleImage article={article} />;
        })}
      </div>
    </div>
    
    </div>
    
    )
}