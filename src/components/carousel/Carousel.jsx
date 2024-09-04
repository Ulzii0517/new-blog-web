export const Carousel = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-auto py-[32px]">
      <div className="container flex justify-center">
        <div className="flex flex-col justify-end bg-[url('/CarouselPic.jpeg')]  w-[1216px] h-[600px] bg-cover rounded-xl p-[6px]">
          <div className="flex flex-col  max-w-[598px] h-auto bg-white border-[1px] rounded-xl p-10">
            <div className="flex flex-col w-auto max-w-xs rounded-md py-1 px-[10px] bg-[#4B6BFB]">
              
                <p className="text-[14px] font-medium text-white ">
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
