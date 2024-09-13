import { useEffect, useState } from "react";
import { ChevronleftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";

export const Carousel = () => {
  const [article, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return article.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  const handleRight = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === article.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=10&top=10")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [article]);

  return (
    <main className="flex flex-col justify-center items-center w-full h-auto py-[32px]">
      <div className="w-full flex flex-col justify-center items-center gap-[1px]">
        <div className="flex flex-col justify-end max-w-[1216px] w-full  bg-cover rounded-xl p-[6px]">
          <div
            className="flex flex-col lg:flex-col-reverse lg:justify-start justify-end min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] w-auto rounded-xl bg-cover bg-center  bg-[#14162466] bg-blend-soft-light"
            style={{
              backgroundImage: `url(${article[currentIndex]?.cover_image})`,
              width: "100%",
              height: "600px",
            }}
          >
            <div className="flex flex-col  max-w-[598px] h-auto bg-white border-[1px] rounded-xl p-7 relative left-3 bottom-3">
              <div className="flex">
                <p className="text-[14px] font-medium text-white  rounded-md py-1 px-[10px] bg-[#4B6BFB]">
                  Technology
                </p>
              </div>

              <p className="text-[36px] font-semibold text-[#181A2A]">
                {article[currentIndex]?.title}
              </p>
              <p className="text-[16px] font-normal text-[#97989F]">
                {article[currentIndex]?.created_at}
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-w-[1216px] w-full justify-end items-center gap-2 pr-1">
          <div onClick={handleLeft} className="flex justify-center items-center max-w-[40px] w-full h-[40px] border border-[#696A75] rounded-md hover:bg-gray-300 transition ease-in delay-75">
            <ChevronleftIcon />
          </div>
          <div onClick={handleRight}  className="flex justify-center items-center max-w-[40px] w-full h-[40px] border border-[#696A75] rounded-md hover:bg-gray-300 transition ease-in delay-75">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
