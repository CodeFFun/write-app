import { Request, Response } from "express";
import dataResponse from "../lib/dataResponse";
import File from "../models/File";

class fileHandler{
    async createFile(req: Request, res: Response){
        let userId = req.body.userId
        try {
            let fileData = await File.create({
                userId: userId,
                name: 'Untitled Document',
                createdAt: (new Date()).toISOString().split('T')[0],
                starred: false,
                contents: []
            })
            fileData.sharedUsers.push(userId)
            await fileData.save()
            res.json(dataResponse({fileId:fileData._id}, 200, 'File Created'))
        } catch (err) {
            res.json(dataResponse(err, 500, 'Something went wrong'))
        }
    }

    async getFile(req: Request, res: Response){
        let fileId = req.body.fileId
        try {
            let file = await File.findById(fileId)
            res.json(dataResponse(file, 200, 'File Fetched'))
        } catch (error) {
            res.json(dataResponse(error, 500, 'Something went wrong'))
        }
    }
    
    async getAllFiles(req: Request, res: Response){
        let userId = req.body.userId
        try {
            let files = await File.find({userId: userId})
            if(files.length == 0) {
                res.json(dataResponse(null, 200, 'No Files Found'))
                
            } else {
                res.json(dataResponse(files, 200, 'Files Fetched'))
            }
        } catch (error) {
            console.log(error)
            res.json(dataResponse(error, 500, 'Something went wrong'))
        }
    }

    async deleteFile(req: Request, res: Response){
        let fileId = req.body.fileId
        try {
            await File.findByIdAndDelete(fileId)
            res.json(dataResponse(null, 200, 'File Deleted'))
        } catch (error) {
            res.json(dataResponse(error, 500, 'Something went wrong'))
        }
    }

    async getFileContent(req:Request, res:Response){
        let fileId = req.body.fileId
        try {
            const file = await File.findById(fileId)
            res.json(dataResponse(file?.contents, 200, 'File Content Fetched'))
        } catch (err) {
            res.json(dataResponse(err, 500, 'Something went wrong'))
        }
    }
}

export default fileHandler;


