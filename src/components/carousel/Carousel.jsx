import { useEffect, useState } from "react";

export const Carousel = () => {
  const [article, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&top=5")
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
            className="flex flex-col lg:flex-col-reverse lg:justify-start justify-end min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] w-auto rounded-xl bg-cover bg-center  bg-[#14162466] bg-blend-soft-light"
            style={{
              backgroundImage: `url(${article[1]?.cover_image})`,
            }}
          >
            <div className="flex flex-col  max-w-[598px] h-auto bg-white border-[1px] rounded-xl p-10">
              <div className="flex">
                <p className="text-[14px] font-medium text-white  rounded-md py-1 px-[10px] bg-[#4B6BFB]">
                  Technology
                </p>
              </div>

              <p className="text-[36px] font-semibold text-[#181A2A]">
                {article[0]?.title}
              </p>
              <p className="text-[16px] font-normal text-[#97989F]">
                {article[0]?.created_at}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
