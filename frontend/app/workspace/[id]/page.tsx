import WorkspaceBody from "./WorkspaceBody";
import WorkspaceNavbar from "@/components/items/navbar/WorkspaceNavbar";


export default function  Workspace() {
  
  return (
    <div>
      <div>
        <WorkspaceNavbar />
      </div>
      <div className="flex flex-row p-5 justify-between max-w-screen-2xl min-h-screen bg-[#DEE3E0] overflow-auto">
        <WorkspaceBody />
      </div>
    </div>
    
  );
}
