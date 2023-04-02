import { Button, TextField } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import StudentsBase from "../StudentsBase";
import * as yup from 'yup';
import { useFormik } from "formik";

const studentSchemaValidation = yup.object({
  id: yup.string().required("Please specify the student's ID"),
  name: yup.string().required("Please specify the student's name"),
  dob: yup.string().required("Please specify the student's date of birth"),
  gender: yup.string().required("Please specify the student's gender"),
  email: yup.string().email().required("Please specify a valid email address"),
  contact: yup.string().required("Please specify the student's contact number"),
  age: yup.number().required("Please specify the student's age"),
  address: yup.string().required("Please specify the student's address"),
});

export function AddStudents({ student, setStudent }) {
  const history = useHistory();

  const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
    initialValues: {
      id: "",
      name: "",
      dob: "",
      gender: "",
      email: "",
      contact: "",
      age: "",
      address: "",
    },
    validationSchema: studentSchemaValidation,
    onSubmit: (newStudent) => {
      console.log("on submit called :", newStudent);
      addNewStudent(newStudent);
    },
  });

  const addNewStudent = async (newStudent) => {
    try {
      const response = await fetch("https://641eba77ad55ae01ccaeda8b.mockapi.io/Data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      const data = await response.json();
      console.log(data);
      
      setStudent([...student, data]);
      history.push("/students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StudentsBase title="Add new Student">
    
      <form onSubmit={handleSubmit} className="text-areas">
        <TextField
          id="fullWidth"
          name="id"
          onBlur={handleBlur}
          label="ID"
          variant="outlined"
          value={values.id}
          onChange={handleChange}
        />
        {touched.id && errors.id ? <p style={{ color: "crimson" }}>{errors.id}</p> : ""}
        <TextField
          id="fullWidth"
          label="Name"
          variant="outlined"
          onBlur={handleBlur}
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {touched.name && errors.name ? <p style={{ color: "crimson" }}>{errors.name}</p> : ""}

        <TextField
          id="fullWidth"
          label="Date of Birth"
          variant="outlined"
          onBlur={handleBlur}
          name="dob"
          value={values.dob}
          onChange={handleChange}
        />
        {touched.dob && errors.dob ? <p style={{ color: "crimson" }}>{errors.dob}</p> : ""}

        <TextField
          id="fullWidth"
          label="Gender"
          variant="outlined"
          onBlur={handleBlur}
          name="gender"
          value={values.gender}
          onChange={handleChange}
        />
        {touched.gender && errors.gender ? <p style={{ color: "crimson" }}>{errors.gender}</p> : ""}
        <TextField
      id="fullWidth"
      label="Email"
      variant="outlined"
      onBlur={handleBlur}
      name="email"
      value={values.email}
      onChange={handleChange}
    />
    {touched.email && errors.email ? <p style={{ color: "crimson" }}>{errors.email}</p> : ""}

    <TextField
      id="fullWidth"
      label="Contact"
      variant="outlined"
      onBlur={handleBlur}
      name="contact"
      value={values.contact}
      onChange={handleChange}
    />
    {touched.contact && errors.contact ? <p style={{ color: "crimson" }}>{errors.contact}</p> : ""}

    <TextField
      id="fullWidth"
      label="Age"
      variant="outlined"
      onBlur={handleBlur}
      name="age"
      value={values.age}
      onChange={handleChange}
    />
    {touched.age && errors.age ? <p style={{ color: "crimson" }}>{errors.age}</p> : ""}

    <TextField
      id="fullWidth"
      label="Address"
      variant="outlined"
      onBlur={handleBlur}
      name="address"
      value={values.address}
      onChange={handleChange}
    />
    {touched.address && errors.address ? <p style={{ color: "crimson" }}>{errors.address}</p> : ""}

    <Button variant="contained" color="primary" type="submit" className="submit-button">
      Submit
    </Button>
  </form>
  </StudentsBase >

);
}

export default AddStudents;

