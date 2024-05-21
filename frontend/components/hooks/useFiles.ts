import { useQuery } from "@tanstack/react-query";
import Axios from "../lib/axios/Axios";


export default async function  useFiles(userId: string) {
  const axios = new Axios();
  let present:boolean = false;
  userId && (present = true)
  const query = useQuery({queryKey:['getFiles', userId, present],
  queryFn: async () => {
    const res = await axios.post('file/getfiles', {userId:userId})
    return await res.data.data
  },
  enabled: !!userId
})
   if(query.data !== undefined){
     return  query.data
   }
}
