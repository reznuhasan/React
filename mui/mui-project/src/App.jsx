
import { Button, Typography } from '@mui/material'
import './App.css'
import Register from './components/Register'

function App() {

  return (
    <>
    <Typography variant='h2' component={"h1"} sx={{color:"red",}}>Typography</Typography>
     <h1>Hello World</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus exercitationem totam reiciendis velit fugit facere, magni quos rerum architecto ex explicabo illum similique, aliquid deleniti quo et eum odio!</p>
    <Button variant='text'>text</Button>
    <Button variant='contained'>contained</Button>
    <Button variant='outlined'>outlined</Button>
    <br />
    <br />
    <Register/>

    </>
    
  )
}

export default App
