import React, { useContext } from 'react'
import { themeContext } from '../Helper/themeContext'

const Cart = () => {
  const {themeColor}=useContext(themeContext)
  return (
    <div className={themeColor!=="light" && "darkCart"}>
        <h1>This is Cart  Part</h1>
    </div>
  )
}

export default Cart