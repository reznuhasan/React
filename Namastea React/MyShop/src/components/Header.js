import { useContext } from "react";
import {Link} from "react-router-dom"
import { themeContext } from "../Helper/themeContext";
const Header=()=>{
    const {themeColor,setThemeColor}=useContext(themeContext)
    const handleThemeColor=()=>{
      let color=themeColor==="light"?"dark":"light";
      setThemeColor(color);
    }
    return(
        <div className={themeColor==="light"?"header":"darkHeader"}>
          <div className="logo">
            <h1><Link to="/">ChalDal</Link></h1>
          </div> 
          <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/instamart">Instamart</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <div className="themeBtn">
            <button onClick={handleThemeColor}>{themeColor==="light"?"dark":"light"}</button>
          </div>
        </div>
    )
}

export default Header;