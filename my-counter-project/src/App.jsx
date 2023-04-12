import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}
function Counter(){
  const [increase,setIncrease]=useState(10)
  const increaseValue=()=>{
    const number=increase+1;
    setIncrease(number)
  }
  return (
    <div>
       <h1>Count:{increase}</h1>
       <button onClick={increaseValue}>Increase</button>
    </div>
  )
}
export default App
