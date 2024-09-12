import { useEffect, useState } from "react";

export const Carousel = () => {
  const [article, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=1")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center w-full h-auto py-[32px]">
      <div className="container flex justify-center">
        <div className="flex flex-col justify-end max-w-[1216px] w-full  bg-cover rounded-xl p-[6px]">
        <div
            style={{
              backgroundImage: `url(${article?.profile_image})`,
              width: "100%",
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "6px",
            }}
          ></div>
          <div className="flex flex-col  max-w-[598px] h-auto bg-white border-[1px] rounded-xl p-10">
            <div className="flex">
              <p className="text-[14px] font-medium text-white  rounded-md py-1 px-[10px] bg-[#4B6BFB]">
                Technology
              </p>
            </div>

            <p className="text-[36px] font-semibold text-[#181A2A]">
              Grid system for better Design User Interface
            </p>
            <p className="text-[16px] font-normal text-[#97989F]">
              August 20, 2022
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
