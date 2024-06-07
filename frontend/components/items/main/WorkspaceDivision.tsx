"use client";

import { useState, useEffect, useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { WorkspaceContext } from "@/components/lib/context/WorkspaceContext";

export default function WorkspaceDivision() {
  const {sendData, updateData, setSendData } = useContext(WorkspaceContext);

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showAddCursor, setShowAddCursor] = useState<number>();

  const addParagraph = (index: number, contentType: string) => {
    const newObj: { [key: string]: string } = {};
    newObj[contentType] = "";
    const newArr = [...sendData.current];
    newArr.splice(index + 1, 0, newObj);
    updateData(newArr);
  };

  const showCursor = (index: number) => setShowAddCursor(index);

  const hideCursor = () => {
    setShowAddCursor(undefined);
    setShowOptions(false);
  };

  const onChange = (e: any) => {
    let targetId = e.currentTarget.id;
    let objectContent = e.currentTarget.textContent;
    let checkIndex = parseInt(targetId.split("-")[2]);
    let checkTitle = targetId.split("-")[1];
    const updatedData = [...sendData.current]; // Get the current state from the ref
    // Check if the content already exists, if so, replace it; otherwise, add it
    if (updatedData[checkIndex] && updatedData[checkIndex][checkTitle]) {
        updatedData[checkIndex][checkTitle] = objectContent;
    } else {
        updatedData[checkIndex] = {
            ...updatedData[checkIndex],
            [checkTitle]: objectContent
        };
    }
    //if the content is empty, remove it
    if (objectContent === "") {
        updatedData.splice(checkIndex, 1);
    }
    updateData(updatedData);
  };

  return (
    <div className=" min-w-[816px] max-w-[816px] min-h-[436.6px] p-5 bg-white">
      <div className="min-w-[816px] max-w-[816px] min-h-[373.6px]">
        <div className="min-w-[816px] max-w-[816px] min-h-[36.8px]">
          {sendData.current.map((item:any, index:any) => (
            <div
              key={index}
              id={`container-${index}`}
              className="min-w-[524px] max-w-[700px] min-h-[36.8px] flex justify-center my-2"
              onMouseEnter={() => showCursor(index)}
              onMouseLeave={() => hideCursor()}
            >
              <div className="min-w-[150px] h-min-[36.8px]">
                {showAddCursor === index && (
                  <div className="flex flex-col mx-2 items-center ">
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
                )}
              </div>
              <div className="min-w-[600px] min-h-[36.8px]">
                <div
                  id={`editableDiv-${Object.keys(item)}-${index}`}
                  className="p-3"
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => onChange(e)}
                >
                  {item[Object.keys(item)[0]]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
