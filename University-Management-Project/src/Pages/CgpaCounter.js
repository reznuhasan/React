import React, { useState } from 'react'
import CgpaCalculator from '../components/CgpaCalculator';
import '../styles/CgpaCounter.css'
import { useFormik } from 'formik';
import { calculateCgpa } from '../custom/calculateCgpa';
const CgpaCounter = () => {
  const [cgpa,setCgpa]=useState(null)
  const [subjects, setSubjects] = useState([0, 1, 2]);
  const formik=useFormik({
    initialValues:{
      courses:subjects.map((subject)=>({
        courseName:"",
        courseCredit:"",
        grade:"",
    })),
  },
  onSubmit:values=>{
     const count=calculateCgpa(values.courses)
     console.log(count)
  }
})
const handleAddCourse=(e)=>{
   e.preventDefault()
   setSubjects(prevState=>[...prevState,
    subjects[subjects.length-1]+1,
  ])
}
const RemoveCourse = (code) => {
  const newArr = subjects.filter((subject) => subject !== code);
  setSubjects(newArr);
};
  return (
    <div className='cgpaContainer'>
      <div>
        <h1>Cgpa Calculator</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {
          subjects.map((subject) => <CgpaCalculator 
          subject={subject} 
          key={subject} 
          RemoveCourse={RemoveCourse}
          formik={formik}
          ></CgpaCalculator>)
        }
        <button onClick={handleAddCourse}>Add Course</button>
        <button type='submit'>Done</button>
      </form>
      <div>

      </div>
    </div>
  )
}

export default CgpaCounter