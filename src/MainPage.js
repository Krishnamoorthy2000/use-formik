import React from "react";
import { useHistory } from "react-router-dom";


export default function MainPage(){
    const history =  useHistory();
    return(
        <div className="mainpage">
            <div className="title">Student Teacher Data</div>
            <div className="subdiv">
            <div className="btn-group">
            <button className="btn main-card-btn card-btn"
            onClick={()=>history.push(`/students`)}
            >
                Students</button>
                <button className="btn main-card-btn card-btn"
            onClick={()=>history.push(`/teachers`)}
            >
                Teachers</button>
            </div>
            </div>
            </div>
    )
}