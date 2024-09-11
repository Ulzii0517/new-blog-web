export const SinglePost = ({ article }) => {
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
    <div className="flex justify-center items-center">
      <div className="w-[800px] h-auto  p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="overflow-hidden h-auto">
            <p className="text-2xl font-semibold text-ellipsis ">
              {article.title}
            </p>
          </div>
          <p className=" text-[#97989F]">
            {publishedDate.getFullYear()}-
            {generatMonth(publishedDate.getMonth())}-{publishedDate.getDay()}
          </p>

          <div
            style={{
              backgroundImage: `url(${article?.cover_image})`,
              width: "100%",
              height: "462px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "6px",
            }}
          ></div>
          <div className="flex flex-col gap-[40px] text-[20px] font-normal not-italic leading-8 font-serif text-[#3B3C4A]">
            <p>
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
            </p>
            <p>
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>
          <div className="flex flex-col gap-[40px] text-[20px] font-normal not-italic leading-8 font-serif text-[#3B3C4A]">
            <p className="text-[24px] font-semibold leading-7 not-italic font-sans">
              Research Your Destination
            </p>
            <p>
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="flex flex-col gap-[40px] text-[20px] font-normal not-italic leading-8 font-serif text-[#3B3C4A]">
            <p className="text-[24px] font-semibold leading-7 not-italic font-sans">
              Plan Your Itinerary
            </p>
            <p>
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
            </p>
            <p>
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
