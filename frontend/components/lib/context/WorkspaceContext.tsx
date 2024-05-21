import {createContext, useRef, useState } from "react";


export const WorkspaceContext = createContext<any>(null)

export const WorkspaceProvider = ({children}:{children:React.ReactNode}) => {
    const someData = useRef<{ [key: string]: string }[]>([{paragraph: 'hello'}])
    const [socket, setSocket] = useState<any>(null)

  const updateData = (newData: any) => {
    someData.current = newData;
    console.log(someData.current); // Output the updated data   
    socket.emit('update-content', someData.current)
};


    return <WorkspaceContext.Provider value={{sendData:someData, updateData, setSocket}}>
        {children}
        </WorkspaceContext.Provider>
}