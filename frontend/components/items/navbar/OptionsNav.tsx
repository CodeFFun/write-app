import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function OptionsNav({ addParagraph, index }: any) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className="flex flex-col mx-2 items-center  overflow-auto transition-all duration-300">
      <FaPlus
        className="hover:cursor-pointer hover:text-green-300"
        onClick={() => setShowOptions(!showOptions)}
      />
      <ul
        className={
          showOptions
            ? "text-sm w-full bg-[#f7f8f9] text-center border-solid border-2 "
            : "hidden"
        }
      >
        <li
          className="hover:bg-[#DAE0E7] hover:cursor-pointer p-1"
          onClick={() => addParagraph(index, "outline")}
        >
          Outline
        </li>
        <li
          className="hover:bg-[#DAE0E7] hover:cursor-pointer p-1"
          onClick={() => addParagraph(index, "paragraph")}
        >
          Paragraph
        </li>
        <li
          className="hover:bg-[#DAE0E7] hover:cursor-pointer p-1"
          onClick={() => addParagraph(index, "Header1")}
        >
          Header 1
        </li>
        <li
          className="hover:bg-[#DAE0E7] hover:cursor-pointer p-1"
          onClick={() => addParagraph(index, "Header2")}
        >
          Header 2
        </li>
        <li
          className="hover:bg-[#DAE0E7] hover:cursor-pointer p-1"
          onClick={() => addParagraph(index, "Header3")}
        >
          Header 3
        </li>
        <li
          className="hover:bg-[#DAE0E7] hover:cursor-pointer p-1"
          onClick={() => addParagraph(index, "Title")}
        >
          Title
        </li>
      </ul>
    </div>
  );
}

export default OptionsNav;
