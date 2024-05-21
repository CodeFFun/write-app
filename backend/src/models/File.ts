import mongoose from "mongoose";
import User from "./User";

type fileContent = {
    [key: string]: object;
}

type sharedUser = {
    userId: mongoose.Schema.Types.ObjectId;
}

interface fileInterface{
    userId: mongoose.Schema.Types.ObjectId;
    name: string;
    createdAt: string;
    starred: boolean;
    sharedUsers: Array<sharedUser>;
    contents:Array<fileContent>;
}

const fileSchema = new mongoose.Schema<fileInterface>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref:User, required: true },
    name: { type: String, required: true },
    createdAt: { type: String, required: true },
    starred: { type: Boolean, required: true },
    sharedUsers: [{ type: String, required: true }],
    contents: [{ type: Object, required: true }]
})

export default mongoose.model<fileInterface>('File', fileSchema);