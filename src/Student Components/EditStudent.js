import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import StudentsBase from "../StudentsBase";

const EditStudent = ({student, setStudent}) =>{
    const history = useHistory();

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender]=useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact]= useState("");
    const [age, setAge] = useState("");
    const [address, setAddress]= useState("");

    const {id} = useParams();

    const selectedStudent = student.find((per) => per.id === id);
    
    useEffect(()=>{
        setIdx(selectedStudent.id)
        setName(selectedStudent.name)
        setDob(selectedStudent.dob)
        setGender(selectedStudent.gender)
        setEmail(selectedStudent.email)
        setContact(selectedStudent.contact)
        setAge(selectedStudent.age)
        setAddress(selectedStudent.address)
    },[]);

    const updateStudent = ()=>{

        const editIndex = student.findIndex(per => per.id === id);

        const updatedData ={
            id: idx,
            name,
            dob,
            gender,
            email,
            contact,
            age,
            address
        }

        student[editIndex] = updatedData;
        setStudent([...student]);
        history.push('/students');

    }

    return(
        <StudentsBase
        title = "Edit Student data">
        <div>
                <input 
                placeholder="id"
                value = {idx}
                onChange={(e)=>setIdx(e.target.value)}
                />
                <input 
                placeholder="name"
                value = {name}
                onChange={(e)=>setName(e.target.value)}
                />
                 <input 
                placeholder="DOB"
                value = {dob}
                onChange={(e)=>setDob(e.target.value)}
                />
                 <input 
                placeholder="Gender"
                value = {gender}
                onChange={(e)=>setGender(e.target.value)}
                />
                <input 
                placeholder="email"
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                placeholder="contact"
                value = {contact}
                onChange={(e)=>setContact(e.target.value)}
                />
                <input 
                placeholder="age"
                value = {age}
                onChange={(e)=>setAge(e.target.value)}
                />
                <input 
                placeholder="address"
                value = {address}
                onChange={(e)=>setAddress(e.target.value)}
                />
                
        </div>
        <button
            className='btn update'
            onClick={updateStudent}>
            Update</button>

            <button
              className="btn back"
              onClick={()=>history.push("/students")}>Back</button>
              
        </StudentsBase>
    )
}
export default EditStudent;