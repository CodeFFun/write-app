"use client";

import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
import WorkspaceSidebar from "@/components/items/sidebar/WorkspaceSidebar";
import WorkspaceDivision from "@/components/items/main/WorkspaceDivision";
import { io } from "socket.io-client";
import  {WorkspaceContext}  from "@/components/lib/context/WorkspaceContext";


export default function WorkspaceBody() {
    const params = useParams()
    const {setSocket} = useContext(WorkspaceContext)
    useEffect(() => {
      const localAcess = typeof window !== undefined && window.localStorage ? localStorage.getItem('user') : null
      const id = params.id
      const connect = io("http://localhost:8000", {
        // path:id as string
      }) 
      setSocket(connect)
      return() => {
        connect.close()
      }  
    }, [setSocket, params])

  return (
      <>
        <WorkspaceSidebar />
        <WorkspaceDivision />
        <div className="bg-red-600 min-w-[30vh]">Hello</div>
      </>
    
  );
}
