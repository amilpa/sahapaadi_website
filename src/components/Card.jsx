import { Trash } from "@phosphor-icons/react";
const Cards = ({ text, date, handleDelete, id, yellow }) => {
  return (
    <div
      className={`w-[400px] h-[200px] ${
        yellow ? "bg-[#fff57f]" : "bg-[#5bd1c3]"
      } p-5 flex flex-col rounded-md ${"shadow-lg shadow-gray-300 cursor-pointer"}`}
    >
      <div className="grow text-lg">{text}</div>
      <div className="flex justify-between">
        <p>{date}</p>
        <Trash className="cursor-pointer" onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
};

export default Cards;
