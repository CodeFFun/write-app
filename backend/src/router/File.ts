import express from 'express'
import { createServer } from 'http'
import {Server} from 'socket.io'
import fileHandler from '../controller/fileController'

const File = express.Router()
const fileInstance = new fileHandler()


File.post('/getfiles', fileInstance.getAllFiles)
File.get('/:id', fileInstance.getFile)
File.post('/', fileInstance.createFile)

File.delete('/:id', fileInstance.deleteFile)

export default File

