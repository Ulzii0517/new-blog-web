import Tech from "../carousel/tech";

export const TrendingCard = ({ article }) => {
  return (
    <div className="max-w-[289px] flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-end text-white p-6 text-[18px] font-semibold "
        style={{
          backgroundImage: `url(${article.cover_image})`,
          width: "100%",
          height: "320px",
          borderRadius: "12px",
        }}
      >
        <div className="flex flex-col justify-end">
          {/* <div className="flex gap-2 w-">
            {article.tag_list.map((tag) => {
              return 
            })}
          </div> */}
          <Tech text={article.tag_list[2]} />
          <p className="line-clamp-2">{article.title}</p>
        </div>
      </div>
    </div>
  );
};
