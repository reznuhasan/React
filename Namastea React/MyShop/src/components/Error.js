
import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const {status,statusText}=useRouteError()
  return (
    <div>
        <h1>OPPS!...</h1>
        <h2>Something went Wrong</h2>
        <h2>{status},{statusText}</h2>
    </div>
  )
}

export default Error