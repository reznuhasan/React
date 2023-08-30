import { useEffect, useState } from "react";

const useOnline=()=>{
   const [isOnline,setIsOnline]=useState(navigator.onLine)
   useEffect(()=>{
    const handleChangeStatus=()=>{
        setIsOnline(navigator.onLine)
    }
    window.addEventListener('offline',handleChangeStatus);
    window.addEventListener('online',handleChangeStatus);

    return ()=>{
        window.removeEventListener('online',handleChangeStatus);
        window.removeEventListener('offline',handleChangeStatus);
    }
   },[])

   return isOnline;
}

export default useOnline;