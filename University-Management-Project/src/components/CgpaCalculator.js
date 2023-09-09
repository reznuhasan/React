import React from 'react'
import '../styles/CgpaCalculator.css'
const CgpaCalculator = ({subject,RemoveCourse,formik}) => {
    const handleRemoveCourse=(e)=>{
        e.preventDefault()
        RemoveCourse(subject)
    }
  return (
    <div className='cgpa-calculator'>
      <div className='inputField'>
        <label htmlFor={`courses[${subject}].courseName`}>Course Name:</label>
        <input 
        type="text" 
        name={`courses[${subject}].courseName`}
        id={`courses[${subject}].courseName`} 
        placeholder='enter your course name'
        onChange={formik.handleChange}
        value={formik.values.courses[subject]?.courseName}
        />
      </div>
      <div className='inputField'>
        <label htmlFor={`courses[${subject}].courseCredit`}>Course Credit:</label>
        <input 
        type="number" 
        name={`courses[${subject}].courseCredit`}
        id={`courses[${subject}].courseCredit`}
        placeholder='enter your course credit'
        onChange={formik.handleChange}
        value={formik.values.courses[subject]?.courseCredit}
        />
      </div>
      <div>
        <select 
        name={`courses[${subject}].grade`} 
        id={`courses[${subject}].courseCredit`} 
        onChange={formik.handleChange} 
        >
            <option value="">select your grade</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
        </select>
      </div>
      <button onClick={handleRemoveCourse}>Remove Course</button>
    </div>
  )
}

export default CgpaCalculator