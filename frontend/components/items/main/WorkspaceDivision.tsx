"use client";

import { useState, useContext } from "react";
import { WorkspaceContext } from "@/components/lib/context/WorkspaceContext";
import OptionsNav from "../navbar/OptionsNav";

export default function WorkspaceDivision() {
  const { sendData, updateData, shouldUpdate, setShouldUpdate } = useContext(WorkspaceContext);

  const [showAddCursor, setShowAddCursor] = useState<number>();

  const addParagraph = (index: number, contentType: string) => {
    if(!shouldUpdate){
      setShouldUpdate(true);
    }else{
      const newObj: { [key: string]: string } = {};
      newObj[contentType] = "";
      const newArr = [...sendData.current];
      newArr.splice(index + 1, 0, newObj);
      updateData(newArr);
    }
  };

  const showCursor = (index: number) => setShowAddCursor(index);

  const hideCursor = () => {
    setShowAddCursor(undefined);
  };

  const onChange = (e: any) => {
    if(!shouldUpdate){
      setShouldUpdate(true);
    } else {
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
          [checkTitle]: objectContent,
        };
      }
      //if the content is empty, remove it
      if (objectContent === "") {
        updatedData.splice(checkIndex, 1);
      }
      updateData(updatedData);
    }
  };

  return (
    // <div className=" min-w-[816px] max-w-[816px] min-h-[436.6px] p-5 bg-white">
    //   <div className="min-w-[816px] max-w-[816px] min-h-[373.6px]">
    //     <div className="min-w-[816px] max-w-[816px] min-h-[36.8px]">
    //       {sendData.current.map((item:any, index:any) => (
    //         <div
    //           key={index}
    //           id={`container-${index}`}
    //           className="min-w-[524px] max-w-[700px] min-h-[36.8px] flex justify-center my-2"
    //           onMouseEnter={() => showCursor(index)}
    //           onMouseLeave={() => hideCursor()}
    //         >
    //           <div className="min-w-[150px] h-min-[36.8px]">
    //             {showAddCursor === index && (
    //             <OptionsNav addParagraph = {addParagraph} index = {index} />
    //             )}
    //           </div>
    //           <div className="min-w-[600px] min-h-[36.8px]">
    //             <div
    //               id={`editableDiv-${Object.keys(item)}-${index}`}
    //               className="p-3"
    //               contentEditable
    //               suppressContentEditableWarning
    //               onInput={(e) => onChange(e)}
    //             >
    //               {item[Object.keys(item)[0]]}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className=" min-w-[816px] max-w-[816px] min-h-[436.6px] p-5 bg-white">
      {sendData.current.map((item: any, index: any) => (
        <div
          key={index}
          id={`container-${index}`}
          className="min-w-[524px] max-w-[700px] min-h-10 flex justify-center my-5"
          onMouseEnter={() => showCursor(index)}
          onMouseLeave={() => hideCursor()}
        >
          <div className="min-w-[150px] h-10">
            {showAddCursor === index && (
              <OptionsNav addParagraph={addParagraph} index={index} />
            )}
          </div>
          
          <div className="min-w-[600px] min-h-[36.8px] h-auto overflow-auto">
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
  );
}
