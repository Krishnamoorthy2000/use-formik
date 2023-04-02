import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TeachersBase from "../TeachersBase";


const EditTeacher = ({teacher, setTeacher}) =>{
    const history = useHistory();

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [gender, setGender]= useState("");

    const {id} = useParams();

    const selectedTeacher = teacher.find((per) => per.id === id);
    
    useEffect(()=>{
        setIdx(selectedTeacher.id)
        setName(selectedTeacher.name)
        setEmail(selectedTeacher.email)
        setExperience(selectedTeacher.experience)
        setGender(selectedTeacher.gender)
    },[]);

    const updateTeacher = ()=>{

        const editIndex = teacher.findIndex(per => per.id === id);

        const updatedData ={
            id: idx,
            name,
            email,
            experience,
            gender
        }

        teacher[editIndex] = updatedData;
        setTeacher([...teacher]);
        history.push('/teachers');

    }

    return(
        <TeachersBase
        title = "Edit Teacher data">
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
          <button
            className='btn update'
            onClick={updateTeacher}>
            Update</button>

            <button
              className="btn back"
              onClick={()=>history.push("/teachers")}>Back</button>
        </TeachersBase>
    )
}
export default EditTeacher;