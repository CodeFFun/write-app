
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaFilePen } from "react-icons/fa6";
import { LuPen } from "react-icons/lu";
import { ImLoop } from "react-icons/im";
import WorkspaceSideContent from '../main/WorkspaceSideContent';

export default function WorkspaceSidebar() {
    const sideArr = [
        {
            name: "Outline",
            icon: <GiHamburgerMenu />,
        },
        {
            name: "Rewrite",
            icon: <LuPen />,
        },
        {
            name: "Review",
            icon: <FaFilePen />,
        },
        {
            name: "Sort",
            icon: <ImLoop />,
        }
    
    ]
  return (
    <div className="flex">
        <div>
            {sideArr.map((item, index) => {
                return (
                    <div key={index} className="flex flex-row my-3 p-3 text-xl bg-white hover:bg-[#9CABA2] hover:cursor-pointer">
                        {item.icon}
                    </div>
                )
            })}
        </div>
        <WorkspaceSideContent />
    </div>
  )
}
