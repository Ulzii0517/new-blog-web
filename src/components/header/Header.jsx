import { useEffect, useState } from "react";
import { MetaBlogIcon } from "./MetaBlogIcon";
import { SearchIcon } from "./SearchIcon";
import Link from "next/link";
import { SearchDropDown } from "../drop-down/DropDown";

export const Header = () => {
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchSearchData = () => {
    fetch("https://dev.to/api/articles?per_page=100")
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  const filteredArticles = articlesForSearch?.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className="flex flex-col justify-center items-center w-full h-auto py-[32px] relative ">
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
        <div className=" flex flex-col justify-center border items-center rounded-[12px] py-[8px] pl-[16px] pr-[8px] bg-[#F4F4F5]">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Search"
            className="bg-[#F4F4F5]"
          />
          <SearchIcon />

          <SearchDropDown
            searchValue={searchValue}
            filteredArticles={filteredArticles}
          />
        </div>
      </div>
    </header>
  );
};


