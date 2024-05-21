"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import useFiles from '@/components/hooks/useFiles';

export default function HomeMain({ userId }:{ userId: string }) {
      const [files, setFiles] = useState<{_id:string, name:string, createdAt:string, starred:boolean, sharedUsers:[]}[]>([])
      const router = useRouter()
      const getFiles = useFiles(userId)
      useEffect(() => {
        getFiles.then((data) => {
          setFiles(data)
        })
      }, [getFiles, files])

      const onClick = (e:any) => {
        const id = e.currentTarget.id
        router.push(`/workspace/${id}`)
      }
  return (
    <div className="min-h-screen w-full col-span-4">
      <Table>
        <TableHeader>
          <TableRow className="grid grid-flow-col grid-cols-11 p-3">
            <TableHead className="col-span-4">Title</TableHead>
            <TableHead className="col-span-2">Created At</TableHead>
            <TableHead className="col-span-2">Starred</TableHead>
            <TableHead className="col-span-2">Shared</TableHead>
            <TableHead className="col-span-1">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            files && files.map((file, index) => ( 
                <TableRow key={index} id={`${file._id}`} className="grid grid-flow-col grid-cols-11 p-3  hover:cursor-pointer" onClick={(e) => onClick(e)}>
                  <TableCell className="col-span-4">{file.name}</TableCell>
                  <TableCell className="col-span-2">{file.createdAt}</TableCell>
                  <TableCell className="col-span-2">{file.starred ? 'Yes' : 'No'}</TableCell>
                  <TableCell className="col-span-2">{file.sharedUsers.length > 1 ? 'Yes' : 'No'}</TableCell>
                  <TableCell className="col-span-1">
                    <button className="hover:bg-blue-300" onClick={(e) => e.stopPropagation()}>
                      <HiOutlineDotsHorizontal />
                    </button>
                  </TableCell>
                </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
