import { useFormik } from 'formik'
import React from 'react'
import '../styles/ParentInfo.css';
import { ParentSchema } from '../Model/ParentSchema';
import { useNavigate } from 'react-router-dom';
const initialValues = {
    fatherName: "",
    fatherPhone: "",
    fatherOcupation: "",
    fatherDesignation: '',
    motherName: "",
    motherPhone: "",
    motherOcupation: "",
    motherDesignation: "",
    totalFamilyMembers: "",
    totalSister: "",
    totalBrother: "",
    sibilingInVersity: "no",
    parentFreedomFighter: "no",
    fighterCertificate: "",
}
const validate=values=>{
    const errors={};
    if(values.parentFreedomFighter==="yes" && !values.fighterCertificate){
        errors.fighterCertificate="required"
    }
  return errors;
  }
const ParentInfo = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: ParentSchema,
        validate,
        onSubmit: (values) => {
            console.log(values)
            formik.resetForm()
            if (formik.isValid) {
                navigate('/')
            }
        }
    })
    return (
        <div className='parent-info'>
            <h1>Parents & Family Information</h1>
            <form className='parent-info-form' onSubmit={formik.handleSubmit}>
                <div className="inputField">
                    <label htmlFor='fatherName'>Father Name:</label>
                    <input
                        type="text"
                        name="fatherName"
                        id="fatherName"
                        value={formik.values.fatherName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.fatherName && formik.touched.fatherName ? <p className='form-error'>{formik.errors.fatherName}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='fatherPhone'>Father Phone Number:</label>
                    <input
                        type="tel"
                        name="fatherPhone"
                        id="fatherPhone"
                        value={formik.values.fatherPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.fatherPhone && formik.touched.fatherPhone ? <p className='form-error'>{formik.errors.fatherPhone}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='fatherOcupation'>Father Ocupation:</label>
                    <input
                        type="text"
                        name="fatherOcupation"
                        id="fatherOcupation"
                        value={formik.values.fatherOcupation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.fatherOcupation && formik.touched.fatherOcupation ? <p className='form-error'>{formik.errors.fatherOcupation}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='fatherDesignation'>Father Designation:</label>
                    <input
                        type="text"
                        name="fatherDesignation"
                        id="fatherDesignation"
                        value={formik.values.fatherDesignation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.fatherDesignation && formik.touched.fatherDesignation ? <p className='form-error'>{formik.errors.fatherDesignation}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='motherName'>Mother Name:</label>
                    <input
                        type="text"
                        name="motherName"
                        id="motherName"
                        value={formik.values.motherName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.motherName && formik.touched.motherName ? <p className='form-error'>{formik.errors.motherName}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='motherPhone'>Mother Phone:</label>
                    <input
                        type="tel"
                        name="motherPhone"
                        id="motherPhone"
                        value={formik.values.motherPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.motherPhone && formik.touched.motherPhone ? <p className='form-error'>{formik.errors.motherPhone}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='motherOcupation'>Mother Ocupation:</label>
                    <input
                        type="text"
                        name="motherOcupation"
                        id="motherOcupation"
                        value={formik.values.motherOcupation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.motherOcupation && formik.touched.motherOcupation ? <p className='form-error'>{formik.errors.motherOcupation}</p> : ""}
                </div>

                <div className="inputField">
                    <label htmlFor='motherDesignation'>Mother Designation:</label>
                    <input
                        type="text"
                        name="motherDesignation"
                        id="motherDesignation"
                        value={formik.values.motherDesignation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.motherDesignation && formik.touched.motherDesignation ? <p className='form-error'>{formik.errors.motherDesignation}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='totalFamilyMembers'>Total Family Members:</label>
                    <input
                        type="number"
                        name="totalFamilyMembers"
                        id="totalFamilyMembers"
                        value={formik.values.totalFamilyMembers}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.totalFamilyMembers && formik.touched.totalFamilyMembers ? <p className='form-error'>{formik.errors.totalFamilyMembers}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='totalSister'>totalSister:</label>
                    <input
                        type="number"
                        name="totalSister"
                        id="totalSister"
                        value={formik.values.totalSister}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.totalSister && formik.touched.totalSister ? <p className='form-error'>{formik.errors.totalSister}</p> : ""}
                </div>
                <div className="inputField">
                    <label htmlFor='totalBrother'>Total Brother's Number:</label>
                    <input
                        type="number"
                        name="totalBrother"
                        id="totalBrother"
                        value={formik.values.totalBrother}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.totalBrother && formik.touched.totalBrother ? <p className='form-error'>{formik.errors.totalBrother}</p> : ""}
                </div>
                <div>
                    <label>Is any sibiling currently studying in SMUCT?</label>
                    <div>
                        <input
                            type="radio"
                            name="sibilingInVersity"
                            id="sibilingInVersity"
                            onChange={formik.handleChange}
                            checked={formik.values.sibilingInVersity === "yes"}
                            value="yes"
                        />
                        <label htmlFor="sibilingInVersity">Yes</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="sibilingInVersity"
                            id="sibilingInVersity"
                            onChange={formik.handleChange}
                            checked={formik.values.sibilingInVersity === "no"}
                            value="no"
                        />
                        <label htmlFor="sibilingInVersity">No</label>
                    </div>
                </div>
                <div>
                    <label>Is father/mother a freedom fighter?</label>
                    <div>
                        <input
                            type="radio"
                            name="parentFreedomFighter"
                            id="parentFreedomFighter"
                            value="yes"
                            checked={formik.values.parentFreedomFighter === "yes"}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="parentFreedomFighter">Yes</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="parentFreedomFighter"
                            id="parentFreedomFighter"
                            value="no"
                            checked={formik.values.parentFreedomFighter === "no"}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="parentFreedomFighter">No</label>
                    </div>
                    {formik.values.parentFreedomFighter === "yes" && (
                        <div className="inputField">
                            <label htmlFor="fighterCertificate">
                                Attested copy of relevant certificate:
                            </label>
                            <input
                                type="text"
                                name="fighterCertificate"
                                id="fighterCertificate"
                                value={formik.values.fighterCertificate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.fighterCertificate &&
                                formik.touched.fighterCertificate ? (
                                <p className="form-error">{formik.errors.fighterCertificate}</p>
                            ) : null}
                        </div>
                    )}

                </div>
                <button type='submit' className='nextButton'>Next</button>
            </form>
        </div>
    )
}

export default ParentInfo