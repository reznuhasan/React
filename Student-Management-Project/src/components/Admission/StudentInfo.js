

import { useFormik } from 'formik';
import React from 'react'
import "../../styles/StudentInfo.css"
const initialValues = {
  firstName: "",
  lastName: "",
  nickName: "",
  phone: "",
  email: "",
  dateOfBirth: "",
  placeOfBirth: "",
  gender: "",
  maritalStatus: "",
  permanentAddress: "",
  presentAddress: "",
  nationality: "",
  religion: "",
  nationalId: "",
  passportNo: "",
}
const StudentInfo = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm()
    },
  })
  return (
    <div className='student-info'>
      <h1>Student Personal Information</h1>
      <form onSubmit={formik.handleSubmit} className='personal-info-form'>
        <div className='inputField'>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div className='inputField'>
          <label htmlFor='lastName'>Last Name*</label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div className='inputField'>
          <label htmlFor='nickName'>Nick Name</label>
          <input
            id='nickName'
            name='nickName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.nickName}
          />
        </div>
        <div className='inputField'>
          <label htmlFor='phone'>Phone No*</label>
          <input
            id='phone'
            name='phone'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className='inputField'>
          <label htmlFor='email'>Email*</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className='inputField'>
          <label htmlFor='dateOfBirth'>Date Of Birth*</label>
          <input
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />
        </div>
        <div className='inputField'>
          <label htmlFor='placeOfBirth'>Place Of Birth*</label>
          <input
            id='placeOfBirth'
            name='placeOfBirth'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.placeOfBirth}
          />
        </div>
        <div className='personal-info-selection'>
          <div>
            <label htmlFor='gender'>Gender*</label>
            <select
              id='gender'
              name='gender'
              type='radio'
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor='maritalStatus'>Marital Status*</label>
            <select
              id='maritalStatus'
              name='maritalStatus'
              type="radio"
              onChange={formik.handleChange}
              value={formik.values.maritalStatus}
            >
              <option value="">Select Marital Status</option>
              <option value="married">Married</option>
              <option value="single">Single</option>
            </select>
          </div>
        </div>
        <div className='inputField'>
          <label htmlFor="presentAddress">Present Address*:</label>
          <input
            type="text"
            id="presentAddress"
            name="presentAddress"
            onChange={formik.handleChange}
            value={formik.values.presentAddress}
          />
        </div>
        <div className='inputField'>
          <label htmlFor="permanentAddress">Permanent Address*:</label>
          <input
            type="text"
            id="permanentAddress"
            name="permanentAddress"
            onChange={formik.handleChange}
            value={formik.values.permanentAddress}
          />
        </div>
        
        <div className='inputField'>
          <label htmlFor="nationality">Nationality*:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            onChange={formik.handleChange}
            value={formik.values.nationality}
          />
        </div>
        <div className='inputField'>
          <label htmlFor="religion">Religion*:</label>
          <input
            type="text"
            id="religion"
            name="religion"
            onChange={formik.handleChange}
            value={formik.values.religion}
          />
        </div>
        <div className='inputField'>
          <label htmlFor="nationalId">National Id*:</label>
          <input
            type="text"
            id="nationalId"
            name="nationalId"
            onChange={formik.handleChange}
            value={formik.values.nationalId}
          />
        </div>
        <div className='inputField'>
          <label htmlFor="passportNo">Passport No:</label>
          <input
            type="text"
            id="passportNo"
            name="passportNo"
            onChange={formik.handleChange}
            value={formik.values.passportNo}
          />
        </div>
        <button type='submit' className='nextButton'>Next</button>
      </form>
    </div>
  )
}

export default StudentInfo;