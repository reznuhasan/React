import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { themeContext } from "../Helper/themeContext";
import { Provider } from "react-redux";
import Store from "../Helper/Store";
const AppLayout = () => {
    const [themeColor, setThemeColor] = useState("light");
    return (
        <div className={themeColor === "light" ? "app" : "darkApp"}>
            <Provider store={Store}>
                <themeContext.Provider value={{ themeColor, setThemeColor }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </themeContext.Provider>
            </Provider>

        </div>

    )
}
export default AppLayout;