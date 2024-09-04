export const TrendingCard = ({ article }) => {
  return (
    <div className="max-w-[289px] flex flex-col justify-center items-center">
      <div
        style={{
          backgroundImage: `url(${article.cover_image})`,
          width: "100%",
          height: "320px",
        }}
      ></div>
      <div className="flex flex-col justify-end">
        {/* <p>{card.title}</p>
        <p>{card.text}</p> */}
      </div>
    </div>
  );
};
