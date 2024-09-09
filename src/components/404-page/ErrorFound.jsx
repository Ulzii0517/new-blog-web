const ErrorFound = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full py-[100px]">
      <div className="flex justify-center items-center max-w-[642px] w-full h-auto border-black gap-[40px]">
        <div className="text-[72px] font-normal leading-[72px] not-italic font-sans">
          404
        </div>
        <div className="w-[1px] h-[156px] bg-[#E8E8EA]"></div>
        <div className="flex flex-col justify-end items-start gap-[20px]">
          <p className="text-[24px] font-semibold not-italic leading-10 font-sans">
            Page not Found
          </p>
          <p>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <div className="flex">
            <div className="flex justify-center items-center py-[10px] px-[16px] rounded-md bg-[#4B6BFB] text-white text-[14px] font-medium leading-5 not-italic font-sans">
              Back To Home
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorFound;
