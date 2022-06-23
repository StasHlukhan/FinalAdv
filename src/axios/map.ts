import axios from "axios";
import { backendurl } from "./constant";

export function GetMaps(){
    return axios.get(backendurl + 'Maps/Getmaps',{
        headers
    })
}
export function GetMapById(Id:number){
    return axios.get(backendurl + 'Maps/GetMapById',{
        headers,
        params:{

        Id:Id
        }
    })
    
}
export function GetMirage(){
        return GetMapById(0)
        }
    
export const headers = {
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    'Access-Control-Allow-Origin': "*",
    "Content-Type": "application/json",
    mode: 'cors'
};