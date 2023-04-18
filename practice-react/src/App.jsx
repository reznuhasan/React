
import { useState } from 'react'
import './App.css'
import PlayButton from './Components/PlayButton/PlayButton'
import Student from './Components/Student/Student';
import ShowStudent from './Components/ShowStudent/ShowStudent';
import AddDetails from './Components/AddDetails/AddDetails';

function App() {
  const [playing,setPlaying]=useState(false);
  const [message,setMessage]=useState("Play-Button")
  const handleClick=(message)=>{
    alert(message)
    if(playing){
      setPlaying(false);
      setMessage("Play-Button")
    }else{
      setPlaying(true)
      setMessage("Pause-Button")
    }
  }
  const [students,setStudents]=useState(Student)
  
  const sendData=(value)=>{
    setStudents([...students,{...value,id:students.length+1}])
  }
  const handleDelete=(id)=>{
    setStudents(students.filter(student=>student.id!==id))
  }
  return (
    <div className="App">
      {
        students.map(student=><ShowStudent handleDelete={handleDelete} student={student}></ShowStudent>)
      }
      <AddDetails sendData={sendData}></AddDetails>
      <PlayButton message={message} handleClick={handleClick}>{(playing)?"Play":"Pause"}</PlayButton>
    </div>
  )
}

export default App
