import { Server } from "socket.io";
import {createServer} from 'http'
import express, { Application } from 'express'
import File from "../models/File";


const app:Application = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET", "POST", "PATCH", "PUT"],
        credentials: true
    }
})

let x = 0


const connectedUsers:any = []

io.on('connection', async (socket) => {
    connectedUsers.push(socket.id);
    console.log('A user connected', socket.id)
    const doc:string | undefined | string[] = socket.handshake.headers.path
    const file = await File.findById(doc);

    if(file){
        if(file.contents !== null){
            console.log('something')
            socket.emit("file-opened", file.contents)
        }
        
        socket.on("update-content", (data) => {
                file.contents = data;
                file.save();
                console.log('File updated', x++ , file.contents)
            
        })
    }


    socket.on('disconnect', () =>{
        console.log('User disconnected', socket.id)
        // Remove the socket ID from the list of connected users
        const index = connectedUsers.indexOf(socket.id);
        if (index !== -1) {
            connectedUsers.splice(index, 1);
        }
    })

    console.log('Connected users:', connectedUsers.length);
})

export {app, httpServer, io}