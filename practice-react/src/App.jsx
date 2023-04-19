
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
  const [updateData,setUpdateData]=useState(null)
  const handleEdit=(id)=>{
    setUpdateData(students.find(student=>student.id===id))
  }
  const [changeData,setChangeData]=useState({})
  const changeVideos=(value)=>{
    const newArr=(students.filter(student=>student.id!==value.id))
    setStudents([...newArr,value])
  }
  return (
    <div className="App">
      {
        students.map(student=><ShowStudent handleEdit={handleEdit} handleDelete={handleDelete} student={student} ></ShowStudent>)
      }
      <AddDetails sendData={sendData} updateData={updateData} changeVideos={changeVideos}></AddDetails>
      <PlayButton message={message} handleClick={handleClick}>{(playing)?"Play":"Pause"}</PlayButton>
    </div>
  )
}

export default App
