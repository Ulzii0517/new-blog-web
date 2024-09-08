export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-full py-[100px]">
      <div className="container flex flex-col items-center max-w-[895px] w-full max-h-[895px] h-full ">
        <div className="flex flex-col items-center max-w-[769px] w-full h-auto pt-[14px] px-[10px] gap-5">
          <div className="flex flex-col items-start gap-5">
            <p className="text-[36px] font-semibold font-sans">Contact Us</p>
            <p className="text-[16px] font-normal text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="w-full flex items-center py-[10px] gap-[50px]">
            <div className="flex flex-col  w-full h-[133px]  p-4 gap-[10px] border-2 border-[#E8E8EA] rounded-xl">
              <p className="text-[24px] font-semibold font-sans leading-10">
                Address
              </p>
              <p className="text-[18px] font-normal font-sans text-[#696A75] leading-[26px]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="flex flex-col  w-full h-[133px]  p-4 gap-[10px] border-2 border-[#E8E8EA] rounded-xl">
              <p className="text-[24px] font-semibold font-sans leading-10">
                Contact
              </p>
              <p className="text-[18px] font-normal font-sans text-[#696A75] leading-[26px]">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col  pt-[29px] pb-[26px] pr-[130px] pl-[35px] rounded-[10px] bg-[#F6F6F7]">
            <div className="flex flex-col items-start gap-6">
              <p className="text-[18px] font-semibold leading-[26px] not-italic">
                Leave a Message
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border-[1px] border-[#DCDDDF] bg-[#FFF] rounded-[5px] text-[#97989F] text-[16px] font-normal not-italic leading-[26px] py-[14px] pl-[20px] pr-[14px]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border-[1px] border-[#DCDDDF] bg-[#FFF] rounded-[5px] text-[#97989F] text-[16px] font-normal not-italic leading-[26px] py-[14px] pl-[20px] pr-[14px]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="max-w-[478px] w-full py-[14px] pl-[20px] pr-[14px] border-[1px] border-[#DCDDDF] bg-[#FFF] rounded-[5px] text-[#97989F] text-[16px] font-normal not-italic leading-[26px]"
              />
              <input
                type="text"
                placeholder="Write message"
                id="msg"
                className=" flex max-w-[478px] w-full h-[134px]  py-[14px] pl-[20px] pr-[14px] border-[1px] border-[#DCDDDF] bg-[#FFF] rounded-[5px] text-[#97989F] text-[16px] font-normal not-italic leading-[26px]"
              />
              <button className="flex flex-col justify-center items-center py-[10px] px-[16px] rounded-md bg-[#4B6BFB] text-white">
                <p className="text-center text-[14px] font-medium not-italic leading-[20px]">
                  Send Message
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
