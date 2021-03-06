import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


const initialValues= {
    name: '',
    email: '',
    channel: ''
}
const onSubmit= values=>{
    console.log(values)
}
const validate=values=>{
    let errors ={}

    if (!values.name) {
        errors.name = "Required"
    }

    if (!values.email) {
            errors.email = 'Required'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format'
          }

    if (!values.channel) {
        errors.channel = "Required"
    }
    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email format'),
    channel: Yup.string().required('Required')
})

const YoutubForm = () => {
    const formik = useFormik({initialValues, onSubmit, validationSchema})
    console.log(formik.values)
    return (
        <div>
           <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>   
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>: null }
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>   
            <label htmlFor="channel">Channel</label>
            {formik.touched.email &&formik.errors.email ? <div>{formik.errors.email}</div>: null }
            <input type="text" id="channel" name="channel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}/>   
            {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div>: null }
            <button type="submit">Submit</button>
            </form> 
        </div>
    )
}

export default YoutubForm
