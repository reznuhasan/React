import { useRouteError } from "react-router-dom"
const CustomError=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>OPPs</h1>
            <h2>Something Went Wrong</h2>
            <h3>{err.status+" : "+err.statusText}</h3>
        </div>
    )
}
export default CustomError;