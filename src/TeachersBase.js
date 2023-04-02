import React from "react";
import { useHistory } from "react-router-dom";

export default function TeachersBase({title , children}){

    const history = useHistory();
    return(
        <div>
            <div>
                <div className="nav-styles">
                <span>
                    <button className="nav-buttons"
                    onClick={()=>history.push('/')}
                    >Main Dashboard</button>
                </span>
                <span>
                    <button className="nav-buttons"
                    onClick={()=>history.push('/teachers')}
                    >Teachers</button>
                </span>
                <span>
                    <button className="nav-buttons"
                    onClick={()=>history.push('/add/teacher')}
                    >Add Teacher</button>
                </span>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="childred">{children}</div>
        </div>
    )
}