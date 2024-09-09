import { MetaBlogIcon } from "./MetaBlogIcon";
import { SearchIcon } from "./SearchIcon";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center w-full h-auto py-[32px] ">
      <div className="container max-w-[1216px] flex justify-between">
        <div>
          <Link href="/home"> 
          <MetaBlogIcon />
          </Link>
        </div>

        <div className="flex w-full h-auto justify-center gap-10 pt-1 text-[16px] font-normal">
          <Link href="/home">
            <button>Home</button>
          </Link>
          <Link href="/blog-list">
            <button>Blog</button>
          </Link>
          <Link href="/contact-us">
            <button>Contact</button>
          </Link>
        </div>
        <div className=" flex justify-center border items-center rounded-[12px] py-[8px] pl-[16px] pr-[8px] bg-[#F4F4F5]">
          <input type="text" placeholder="Search" className="bg-[#F4F4F5]" />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};
