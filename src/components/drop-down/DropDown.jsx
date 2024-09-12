import Link from "next/link";
export const SearchDropDown = ({ filteredArticles, searchValue }) => {
  filteredArticles.length = 5;
  return (
    <div
      className={`${
        searchValue ? "h-[200px] border" : "h-0"
      } flex flex-col gap-2 transition-all duration-200 w-full overflow-hidden rounded-md absolute top-[40px] bg-gray-100`}
    >
      {filteredArticles?.map((article) => {
        return (
          <Link href={`blog-list/${article?.id}`}>
            <div className="h-full p-2 border-b-2 text-nowrap hover:bg-gray-300">
              {article?.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
