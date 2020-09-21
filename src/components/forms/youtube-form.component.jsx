import { Formik, Form, Field, ErrorMessage } from 'formik'
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
    email: Yup.string().required('Required').email('Invalid Email format'),
    channel: Yup.string().required('Required')
})

const YoutubForm = () => {
    // const formik = useFormik({initialValues, onSubmit, validationSchema})
    // console.log(formik.values)
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
           <Form >
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />   
            <ErrorMessage name="name"/>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />   
            <ErrorMessage name="email"/>
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />   
            <ErrorMessage name="channel"/>
            <button type="submit">Submit</button>
            </Form> 
        </Formik>
    )
}

export default YoutubForm
