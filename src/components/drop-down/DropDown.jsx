import Link from "next/link";
export const SearchDropDown = ({ filteredArticles, searchValue }) => {
  filteredArticles.length = 5;
  return (
    <div
      className={`${
        searchValue ? "h-[200px]" : "h-0"
      } flex flex-col gap-2 transition-all duration-200 overflow-hidden absolute bg-white rounded-md `}
    >
      {filteredArticles?.map((article) => {
        return (
          <Link href={`blogs/${article?.id}`}>
            <div>{article?.title}</div>
          </Link>
        );
      })}
    </div>
  );
};
