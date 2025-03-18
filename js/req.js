//import { json } from "body-parser"
import { up1 } from "./data.js";
export const req=async(arr)=>{
    const response=await fetch("http://172.19.224.1:8080/add-campaign",{
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
    const res=await fetch("http://172.19.224.1:8080/get",{
        //method:"get"
    })
    const data =await res.json();
    console.log(data);
    up1(data); 
}