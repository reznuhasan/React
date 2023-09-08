import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const { statusText, status } = useRouteError()
    return (
        <div>
            <h1>OPPS!</h1>
            <h2>Something Went To Wrong</h2>
            <h3>Status:{status},StatusText:{statusText}</h3>
        </div>
    )
}

export default ErrorPage;