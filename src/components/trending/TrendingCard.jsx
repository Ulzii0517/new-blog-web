export const TrendingCard = ({ article }) => {
  return (
    <div className="flex justify-center items-center max-w-[1216px] w-full h-auto m-auto py-[32px] gap-[30px]">
      <div className="max-w-[289px] w-full max-h-[320px] h-full border rounded-md border-black p-4 flex-wrap ">
        <div className="flex flex-col justify-end">
          {/* <p>{card.title}</p>
            <p>{card.text}</p> */}
          {article.title}
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};
