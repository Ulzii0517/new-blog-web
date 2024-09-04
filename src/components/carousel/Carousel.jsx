export const Carousel = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-auto py-[32px]">
      <div className="container flex justify-center">
        <div className="flex flex-col justify-end bg-[url('/CarouselPic.jpeg')]  max-w-[1216px] w-full h-[600px] bg-cover rounded-xl p-[6px]">
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
