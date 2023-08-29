import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Service from "./components/Service"
const App=()=>{
    return (
        <div>
            <Header/>
            <Service/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)