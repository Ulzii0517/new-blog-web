const SingleImage = ({ article }) => {
  const publishedDate = new Date(article.published_at);

  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  return (
    <div className="w-[800px] h-auto  p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden h-auto">
          <p className="text-2xl font-semibold text-ellipsis ">
            {article.title}
          </p>
        </div>
        <p className=" text-[#97989F]">
          {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}
          -{publishedDate.getDay()}
        </p>
        
        <div
          style={{
            backgroundImage: `url(${article.cover_image})`,
            width: "100%",
            height: "462px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
        ></div>
        
      </div>
    </div>
  );
};

export default SingleImage;
