import { useEffect, useState } from "react";

const useAPICALL=(api)=>{
    const [content,setContent]=useState([])
   const loadData=async()=>{
    const response=await fetch(api);
    const data=await response.json();
    setContent(data)
   }
   useEffect(()=>{
    loadData();
   },[])
   return content;
}
export default useAPICALL;