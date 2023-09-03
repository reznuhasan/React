import React, { useContext } from 'react'
import { themeContext } from '../Helper/themeContext'
import { useSelector } from 'react-redux'

const Cart = () => {
  const {themeColor}=useContext(themeContext)
  const state=useSelector(state=>state.product.items)
  console.log(state)
  return (
    <div className={themeColor!=="light" && "darkCart"}>
        <h1>This is Cart  Part</h1>
    </div>
  )
}

export default Cart