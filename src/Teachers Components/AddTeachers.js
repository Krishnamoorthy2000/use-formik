import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TeachersBase from "../TeachersBase";


export function AddTeachers({teacher, setTeacher}){

    const history = useHistory();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [gender, setGender]= useState("");

    const addNewTeacher =()=>{
        const newTeacher ={
            id,
            name,
            email,
            gender,
            experience
        }
        setTeacher([...teacher,newTeacher]);
        history.push('/teachers');
    }
    return(
        <TeachersBase
        title = "Add Teacher Data">
        <div>
                <input 
                placeholder="id"
                value = {id}
                onChange={(e)=>setId(e.target.value)}
                />
                <input 
                placeholder="name"
                value = {name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input 
                placeholder="email"
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                placeholder="experience"
                value = {experience}
                onChange={(e)=>setExperience(e.target.value)}
                />
                <input 
                placeholder="gender"
                value = {gender}
                onChange={(e)=>setGender(e.target.value)}
                />
               
        </div>
        <button className="btn add-btn"                 
               onClick={addNewTeacher}>
               Add</button>

            <button className="btn back"
             onClick={()=>history.push("/teachers")}>
             Back</button>
        </TeachersBase>
    )

}