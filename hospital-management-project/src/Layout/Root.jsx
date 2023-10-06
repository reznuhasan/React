import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import BorderBox from '../components/BorderBox'

const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <BorderBox/>
    </div>
  )
}

export default Root