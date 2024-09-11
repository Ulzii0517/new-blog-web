import { useRouter } from "next/router";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { SinglePost } from "../single-post/SinglePost";
import { useEffect, useState } from "react";

export const SinglePage = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <SinglePost article={article} />
      <Footer />
    </div>
  );
};
