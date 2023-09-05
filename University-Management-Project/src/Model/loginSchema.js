import * as Yup from "yup";

export const loginSchema=Yup.object({
    studentId:Yup.string().required('enter your student id'),
    password:Yup.string().required('enter your password'),
})