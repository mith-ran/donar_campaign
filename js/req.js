//import { json } from "body-parser"
export const ip="http://192.168.1.102:"
import { up1 } from "./data.js";
export const req=async(arr)=>{
    const response=await fetch(`${ip}8080/add-campaign`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(arr)

    })
    const data=await response;
    console.log(data);

}

export const get = async ()=>{
    const res=await fetch(`${ip}8080/get`,{
        //method:"get"
    })
    const data =await res.json();
    console.log(data);
    up1(data); 
}