import { useFormik } from 'formik';
import React from 'react'
import '../styles/StudentInfo.css'
import { personalSchema } from '../Model/PersonalSchema';
import { useNavigate } from 'react-router-dom';
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
  presentAddress: "",
  permanentAddress: "",
  nationality: "",
  religion: "",
  nationalId: "",
  passportNo: "",
}


const StudentInfo = () => {
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema:personalSchema,
    onSubmit: (values, action) => {
      console.log(values);
      if(formik.isValid){
        navigate('/admission/familyInfo')
      }
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
            onBlur={formik.handleBlur}
            placeholder='Enter your first name'
          />
          {formik.errors.firstName && formik.touched.firstName?<p className='form-error'>{formik.errors.firstName}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor='lastName'>Last Name*</label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            placeholder='Enter your last name'
          />
          {formik.errors.lastName && formik.touched.lastName?<p className='form-error'>{formik.errors.lastName}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor='nickName'>Nick Name</label>
          <input
            id='nickName'
            name='nickName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.nickName}
            onBlur={formik.handleBlur}
            placeholder='Enter your nick name'
          />
          {formik.errors.nickName && formik.touched.nickName?<p className='form-error'>{formik.errors.nickName}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor='phone'>Phone No*</label>
          <input
            id='phone'
            name='phone'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            placeholder='Enter your phone number'
          />
          {formik.errors.phone && formik.touched.phone?<p className='form-error'>{formik.errors.phone}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor='email'>Email*</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder='Enter your  email address'
          />
          {formik.errors.email && formik.touched.email?<p className='form-error'>{formik.errors.email}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor='dateOfBirth'>Date Of Birth*</label>
          <input
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
            onBlur={formik.handleBlur}
          />
          {formik.errors.dateOfBirth && formik.touched.dateOfBirth?<p className='form-error'>{formik.errors.dateOfBirth}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor='placeOfBirth'>Place Of Birth*</label>
          <input
            id='placeOfBirth'
            name='placeOfBirth'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.placeOfBirth}
            onBlur={formik.handleBlur}
          />
          {formik.errors.placeOfBirth && formik.touched.placeOfBirth?<p className='form-error'>{formik.errors.placeOfBirth}</p>:""}
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
              onBlur={formik.handleBlur}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formik.errors.gender && formik.touched.gender?<p className='form-error'>{formik.errors.gender}</p>:""}
          </div>
          <div>
            <label htmlFor='maritalStatus'>Marital Status*</label>
            <select
              id='maritalStatus'
              name='maritalStatus'
              type="radio"
              onChange={formik.handleChange}
              value={formik.values.maritalStatus}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Marital Status</option>
              <option value="married">Married</option>
              <option value="single">Single</option>
            </select>
            {formik.errors.maritalStatus && formik.touched.maritalStatus?<p className='form-error'>{formik.errors.maritalStatus}</p>:""}
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
            onBlur={formik.handleBlur}
          />
          {formik.errors.presentAddress && formik.touched.presentAddress?<p className='form-error'>{formik.errors.presentAddress}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor="permanentAddress">Permanent Address*:</label>
          <input
            type="text"
            id="permanentAddress"
            name="permanentAddress"
            onChange={formik.handleChange}
            value={formik.values.permanentAddress}
            onBlur={formik.handleBlur}
          />
          {formik.errors.permanentAddress && formik.touched.permanentAddress?<p className='form-error'>{formik.errors.permanentAddress}</p>:""}
        </div>
        
        <div className='inputField'>
          <label htmlFor="nationality">Nationality*:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            onChange={formik.handleChange}
            value={formik.values.nationality}
            onBlur={formik.handleBlur}
          />
          {formik.errors.nationality && formik.touched.nationality?<p className='form-error'>{formik.errors.nationality}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor="religion">Religion*:</label>
          <input
            type="text"
            id="religion"
            name="religion"
            onChange={formik.handleChange}
            value={formik.values.religion}
            onBlur={formik.handleBlur}
          />
          {formik.errors.religion && formik.touched.religion?<p className='form-error'>{formik.errors.religion}</p>:""}
        </div>
        <div className='inputField'>
          <label htmlFor="nationalId">National Id*:</label>
          <input
            type="text"
            id="nationalId"
            name="nationalId"
            onChange={formik.handleChange}
            value={formik.values.nationalId}
            onBlur={formik.handleBlur}
          />
          {formik.errors.nationalId && formik.touched.nationalId?<p className='form-error'>{formik.errors.nationalId}</p>:""}
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