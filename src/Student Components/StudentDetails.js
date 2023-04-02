import React from "react";
import { useHistory, useParams } from "react-router-dom";
import StudentsBase from "../StudentsBase";


export function StudentDetails({student}){
    const {id} =  useParams();
    const person = student[id-1];
    const history = useHistory();
    return (
        <StudentsBase
        title = "User Details">
        <div className="user-content">
                    <div className="user-card">
                    <h1>{person.name}</h1>
                        <p>dob : {person.dob}</p>
                        <p>gender : {person.gender}</p>
                        <p>E-mail : {person.email}</p>
                        <p>contact : {person.contact}</p>
                        <p>age : {person.age}</p>
                        <p>address : {person.address}</p>

                        <button className="btn edit-btn"
                         onClick={()=>history.push(`/editStudent/${person.id}`)}>                        
                         Edit</button>

                        <button className="btn back"
                         onClick={()=>history.push("/students")}>
                         Back</button>
                    </div>
                    
        </div>
        </StudentsBase>
    )
}