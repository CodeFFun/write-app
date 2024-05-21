import { close } from "inspector";
import { io } from "socket.io-client";

export default function socket({userId}:{userId:string}){
    const socket = io("http://localhost:8000", {
      extraHeaders: {
        userId: "sanket",
      },
    });

    return {
      closeSocket: () => {
          socket.close();
      },
  };
}