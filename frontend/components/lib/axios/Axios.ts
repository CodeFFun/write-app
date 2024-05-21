import api from "./api";

export default class Axios {
   
     async get(url: string) {
        return await api.get(url);
    }
     async post(url: string, data: any) {
        return await api.post(url, data,{withCredentials: true,});
    }
     async put(url: string, data: any) {      
        return await api.put(url, data);
    }
     async delete(url: string) {
        return await api.delete(url);
    }
}