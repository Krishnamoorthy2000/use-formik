import React from "react";
import { useHistory } from "react-router-dom";
import TeachersBase from "../TeachersBase";

export default function TeachersComponent({teacher, setTeacher}) {
    const history = useHistory();
    

    const deleteTeacher = (idx)=>{
    const deletedTeachersdata = teacher.filter((teach)=>teach.id !== idx)
    setTeacher(deletedTeachersdata);

}
return (
        <TeachersBase
            title="Teacher list">
            <div className="user-content">
                {teacher.map((teacher, idx) => (
                    <div key = {idx}className="user-card">
                        <h1>{teacher.name}</h1>
                        <p>gender : {teacher.gender}</p>
                        <p>Email : {teacher.email}</p>
                        <p>Exp : {teacher.experience}</p>

                        <div className="btn-group">
                           <button className="btn view-btn"
                           onClick={()=>history.push(`/teacher/${idx}`)}>
                            View</button>

                            <button className="btn edit-btn"
                            onClick={()=>history.push(`/editTeacher/${teacher.id}`)}>                            
                            Edit</button>

                            <button className="btn del-btn"
                            onClick={()=>deleteTeacher(teacher.id)}
                            >Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </TeachersBase>
    )
}