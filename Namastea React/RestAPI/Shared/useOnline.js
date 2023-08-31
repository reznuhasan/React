import { useEffect, useState } from "react"

const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
       const handleChangeStatus=(value)=>{
        setIsOnline(value)
       }
       window.addEventListener('online',()=>handleChangeStatus(true));
       window.addEventListener('offline',()=>handleChangeStatus(false));
       return ()=>{
        window.removeEventListener('online',()=>handleChangeStatus(true))
        window.removeEventListener('offline',()=>handleChangeStatus(false))
       }
    },[])

    return isOnline;
}

export default useOnline;