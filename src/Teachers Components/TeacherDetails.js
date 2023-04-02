import React from "react";
import { useHistory, useParams } from "react-router-dom";
import TeachersBase from "../TeachersBase";



export function TeacherDetails({teacher}){
    const {id} =  useParams();
    const person = teacher[id];
    const history = useHistory();
    return (
        <TeachersBase
        title = "Teacher Details">
        <div className="user-content">
                    <div className="user-card">
                        <h1>{person.name}</h1>
                        <p>gender : {person.gender}</p>
                        <p>Email : {person.email}</p>
                        <p>Exp : {person.experience}</p>
                        
                    </div>
                    
                    
        </div>
        <button className="btn edit-btn"
                    onClick={()=>history.push(`/editTeacher/${person.id}`)}>                        
                    Edit</button>
        <button className="btn back"
                         onClick={()=>history.push("/teachers")}>
                         Back</button>
        </TeachersBase>
    )
}