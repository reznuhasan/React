import React from 'react'
import '../styles/CgpaCalculator.css'
const CgpaCalculator = ({subject,findSubjectCode}) => {
    console.log(subject)
  return (
    <div className='cgpa-calculator'>
      <div className='inputField'>
        <label htmlFor="courseName">Course Name:</label>
        <input type="text" name="courseName" id="courseName" />
      </div>
      <div className='inputField'>
        <label htmlFor="courseCredit">Course Credit:</label>
        <input type="number" name="courseCredit" id="courseCredit" />
      </div>
      <div>
        <select>
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
      <button onClick={()=>findSubjectCode()}>Remove Course</button>
    </div>
  )
}

export default CgpaCalculator