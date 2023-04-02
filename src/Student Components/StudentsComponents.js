import React from "react";
import { useHistory } from "react-router-dom";
import StudentsBase from "../StudentsBase";

const StudentsComponent = ({ student, setStudents }) => {
  const history = useHistory();

  const handleDelete = (id) => {
    fetch(`https://641eba77ad55ae01ccaeda8b.mockapi.io/Data/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const filteredStudents = student.filter((student) => student.id !== id);
        setStudents(filteredStudents);
      })
      .catch((error) => console.log(error));
  };

  return (
    <StudentsBase title="Student List">
      <div className="user-content">
        {student.map((student) => (
          <div key={student.id} className="user-card">
            <h1>{student.name}</h1>
            <p>DOB: {student.dob}</p>
            <p>Gender: {student.gender}</p>
            <p>E-mail: {student.email}</p>
            <p>Contact: {student.contact}</p>
            <p>Age: {student.age}</p>
            <p>Address: {student.address}</p>

            <div className="btn-group">
              <button
                className="btn view-btn"
                onClick={() => history.push(`/student/${student.id}`)}
              >
                View
              </button>

              <button
                className="btn edit-btn"
                onClick={() => history.push(`/editStudent/${student.id}`)}
              >
                Edit
              </button>

              <button className="btn del-btn" onClick={() => handleDelete(student.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </StudentsBase>
  );
};

export default StudentsComponent;
