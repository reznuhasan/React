import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { themeContext } from "../Helper/themeContext";
const AppLayout=()=>{
    const [themeColor,setThemeColor]=useState("light");
    return(
        <div className={themeColor==="light"?"app":"darkApp"}>
        <themeContext.Provider value={{themeColor,setThemeColor}}>
           <Header/>
           <Outlet/>
           <Footer/>
        </themeContext.Provider>
        </div>
       
    )
}
export default AppLayout;