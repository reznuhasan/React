import React from 'react'

const Country = React.memo(({country}) => {
    const{name,languages,flags,population}=country
    console.log('render')
  return (
    <div>
      <div className="image">
        <img src={flags.png} alt="image" />
      </div>
      <div>
        <h1>{name?.common}</h1>
        <h3>{languages?.ara}</h3>
        <h3>Population:{population}</h3>
      </div>
    </div>
  )
})

export default Country