"use client"

import {createContext, useRef, useState} from "react";


export const WorkspaceContext = createContext<any>(null)

export const WorkspaceProvider = ({children}:{children:React.ReactNode}) => {
    const someData = useRef<{ [key: string]: string }[]>([{paragraph: 'hello'}])
    const [socket, setSocket] = useState<any>(null)
    const[shouldUpdate, setShouldUpdate] = useState<boolean>(false)

    // function emit(socket:any, event:any, data:any){
    //   socket.timeout(2000).emit(event, data, (err:any) => {
    //     if(err){
    //       emit(socket, event, data)
    //     }
    //   })
    // }

  const updateData = (newData: any) => {
    if(shouldUpdate){
      someData.current = newData; 
      // emit(socket, 'update-content', someData.current) causes infinite saves leading to parallel save error is mongoDB
      socket.emit('update-content', someData.current)
    } else {
      console.log("worked as expected")
    }
};

  const oneTimeUpdate = (newData:any) => {
    console.log(newData)  
    someData.current = newData
  }


    return <WorkspaceContext.Provider value={{sendData:someData, updateData, setSocket, socket, oneTimeUpdate, shouldUpdate, setShouldUpdate}}>
        {children}
        </WorkspaceContext.Provider>
}