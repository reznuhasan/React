import React, { useState } from 'react'
import CgpaCalculator from '../components/CgpaCalculator';
import '../styles/CgpaCounter.css'
import { useFormik } from 'formik';
const CgpaCounter = () => {
  const [subjects, setSubjects] = useState([0, 1, 2]);
  const handleAddCourse = (e) => {
    e.preventDefault()
    setSubjects(prevState => [
      ...prevState,
      subjects.length
    ])
  }
  const findSubjectCode = (code) => {
    const newArr=subjects.filter(subject=>subject!==code);
    setSubjects(newArr)
  }
  const formik=useFormik({
    initialValues:{

    },
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  return (
    <div className='cgpaContainer'>
      <div>
        <h1>Cgpa Calculator</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
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