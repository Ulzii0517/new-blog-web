export const Trending = () => {
  const cards = [
    {
      id: 0,
      title: "Technology",
      text: [
        "The Impact of Technology on the Workplace: How Technology is Changing",
      ],
    },
    {
      id: 1,
      title: "Technology",
      text: [
        "The Impact of Technology on the Workplace: How Technology is Changing",
      ],
    },
    {
      id: 2,
      title: "Technology",
      text: [
        "The Impact of Technology on the Workplace: How Technology is Changing",
      ],
    },
    {
      id: 3,
      title: "Technology",
      text: [
        "The Impact of Technology on the Workplace: How Technology is Changing",
      ],
    },
  ];
  return (
    <div className="flex justify-center items-center w-full h-auto py-[32px] gap-[30px]">
      {cards.map((card) => (
        <div
          key={card.id}
          className=" grid grid-cols-4 grid-rows-1 border rounded-md border-black p-4 flex-wrap"
        >
          <p>{card.title}</p>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};
