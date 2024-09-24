import WorkspaceBody from "./WorkspaceBody";
import WorkspaceNavbar from "@/components/items/navbar/WorkspaceNavbar";


export default  async function  Workspace({params}:any) {
   
  return (
    <div>
      <div>
        <WorkspaceNavbar />
      </div>
      <div className="flex flex-row p-5 justify-between min-w-screen min-h-screen bg-[#DEE3E0] overflow-auto">
        <WorkspaceBody />
      </div>
    </div>
    
  );
}
