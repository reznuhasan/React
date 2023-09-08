import React, { useState } from 'react'
import CgpaCalculator from '../components/CgpaCalculator';
import '../styles/CgpaCounter.css'
const CgpaCounter = () => {
  const [subjects, setSubjects] = useState([0, 1, 2]);
  const handleAddCourse = (e) => {
    e.preventDefault()
    setSubjects(prevState => [
      ...prevState,
      subjects.length
    ])
  }
  const findSubjectCode = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className='cgpaContainer'>
      <div>
        <h1>Cgpa Calculator</h1>
      </div>
      <form>
        {
          subjects.map(subject => <CgpaCalculator subject={subject} key={subject} findSubjectCode={findSubjectCode}></CgpaCalculator>)
        }
        <button onClick={handleAddCourse}>Add Course</button>
        <button type='submit'>Done</button>
      </form>
    </div>
  )
}

export default CgpaCounter