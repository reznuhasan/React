import { useFormik } from 'formik'
import React, { useState } from 'react'
import '../styles/Login.css'
import { loginSchema } from '../Model/loginSchema'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faL } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      studentId: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();
    }
  })
  return (
    <div className="loginContainer">
      <div className='login'>
        <h1>Login Page</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='inputField'>
            <label htmlFor='studentId'>Student Id:</label>
            <input type="text" name="studentId" id="studentId" onChange={formik.handleChange} value={formik.values.studentId} onBlur={formik.handleBlur} />
            {formik.errors.studentId && formik.touched.studentId ? <p className='form-error'>{formik.errors.studentId}</p> : ""}
          </div>
          <div className='inputField'>
            <label htmlFor='password'>Password:</label>
            <div className='password'>
              <input type={showPassword?"text":"password"} name='password' id='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
              <div className='eyeIconBox'>
                {
                  (showPassword === true) ? <FontAwesomeIcon icon={faEye} onClick={()=>setShowPassword(false)}/> :
                    <FontAwesomeIcon icon={faEyeSlash} onClick={()=>setShowPassword(true)}/>
                }
              </div>
            </div>
            {formik.errors.password && formik.touched.password ? <p className='form-error'>{formik.errors.password}</p> : ""}
          </div>
          <button type='submit' className='loginBtn'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login