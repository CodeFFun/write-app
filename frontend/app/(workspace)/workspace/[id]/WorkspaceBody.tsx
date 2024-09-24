"use client";

import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
import WorkspaceSidebar from "@/components/items/sidebar/WorkspaceSidebar";
import WorkspaceDivision from "@/components/items/main/WorkspaceDivision";
import { io } from "socket.io-client";
import  {WorkspaceContext}  from "@/components/lib/context/WorkspaceContext";



export default function WorkspaceBody() {
    const params = useParams()
    const {setSocket, oneTimeUpdate} = useContext(WorkspaceContext)
    useEffect(() => {
      const id = params.id
      const connect = io("http://localhost:8000", {        
        extraHeaders:{
          path:id as string
        }
      }) 
      setSocket(connect)
      connect.on("file-opened", (data:any) => {
        oneTimeUpdate(data)
      })
      return() => {
        connect.close()
      } 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSocket, params.id])

  return (
      <>
        <WorkspaceSidebar />
        <WorkspaceDivision />
        <div className="bg-red-600 min-w-[30vh]">Hello</div>
      </>
    
  );
}
