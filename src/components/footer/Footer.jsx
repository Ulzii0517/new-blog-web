import { MetaBlogIcon } from "../header/MetaBlogIcon";
import { FbIcon } from "./FbIcon";
import { InstaIcon } from "./InstaIcon";
import { LinkIcon } from "./LinkIcon";
import { TwitterIcon } from "./TwitterIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-center pt-[64px] px-[16px] bg-gray-100 ">
      <div className="container max-w-[1216px] w-full flex flex-col gap-[25px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-[25px]">
          <div className="flex flex-col items-start gap-3 max-w-[289px]">
            <p className="text-[18px] font-semibold font-sans">About</p>
            <p className="text-[16px] font-normal font-sans text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex flex-col text-[16px] font-normal font-sans text-[#181A2A] gap-1">
              <p>Email: info@jstemplate.net</p>
              <p>Phone: 880 123 456 789</p>
            </div>
          </div>
          <div className="flex flex-col  items-start shrink-0 gap-[20px] max-w-[521px]">
            <div className="flex flex-col items-start gap-2 text-[16px] font-normal font-sans text-[#3B3C4A]">
            <Link className="hover:text-blue-600 transition ease-in delay-100" href="/home">
            <button>Home</button>
          </Link>
          <Link className="hover:text-blue-600 transition ease-in delay-100" href="/blog-list">
            <button>Blog</button>
          </Link>
          <Link className="hover:text-blue-600 transition ease-in delay-100" href="/contact-us">
            <button>Contact</button>
          </Link>
            </div>
          </div>
          <div className="flex gap-[25px] ">
            <a href="https://www.facebook.com/">
              <FbIcon />
            </a>

            <a href="https://x.com/?lang=en">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/">
              {" "}
              <InstaIcon />{" "}
            </a>
            <a href="https://mn.linkedin.com/">
              {" "}
              <LinkIcon />{" "}
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center py-[10px]">
          <MetaBlogIcon />
          <div className="flex gap-4 text-[16px] font-normal font-sans text-[#3B3C4A]">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
