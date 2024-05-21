import { useQuery } from "@tanstack/react-query"
import Axios from "../lib/axios/Axios"

export default function usePost({endpoint, formData}: {endpoint:string, formData: any}){
    const axios = new Axios()
    return useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            return await axios.post(`/auth/${endpoint}`, formData)
        },
        enabled: false,
    })
}