import React from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = () => {
    const {name}=useParams();
    console.log(name);
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails