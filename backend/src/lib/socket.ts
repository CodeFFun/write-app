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

const connectedUsers:any = []

io.on('connection', (socket) => {
    console.log('A user connected', socket.id)

    connectedUsers.push(socket.id);

    socket.on("update-content", (data) => {
        console.log(data)
    })

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