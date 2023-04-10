import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const friends=[
  {name:'Ahmed',age:40,habit:'sleeping'},
  {name:'Mohammed',age:35,habit:"Learning"},
  {name:"Rishu",age:21,habit:"Coding"},
  {name:"Rizwan",age:24,habit:"Programming"}
 ]
  return (
    <div className="App">
    {
      friends.map(ch=><Person ch={ch}></Person>)
    }
    </div>
  )
}
function Person(props){
  const {name,age,habit}=props.ch
  return <div style={{
    border:'2px solid red',
    padding:'20px',
    backgroundColor:'whitesmoke',
    color:'blue',
    margin:'10px',
    borderRadius:'5px'
  }}>
    <h1>Name:{name}</h1>
    <h3>Age:{age}</h3>
    <h3>Habit:{habit}</h3>
  </div>
}
export default App
