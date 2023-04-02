import './App.css';
import StudentsComponents from './Student Components/StudentsComponents';
import { Route, Switch } from 'react-router-dom';
import { AddStudents } from './Student Components/AddStudents';
import {  TeachersData } from './data/Data';
import { useState,useEffect} from 'react';
import { StudentDetails } from './Student Components/StudentDetails';
import EditStudent from './Student Components/EditStudent';
import MainPage from './MainPage';
import TeachersComponent from './Teachers Components/TeachersComponents';
import { AddTeachers } from './Teachers Components/AddTeachers';
import { TeacherDetails } from './Teachers Components/TeacherDetails';
import EditTeacher from './Teachers Components/EditTeachers';
import { Nopage } from './nopage';


function App() {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState(TeachersData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://641eba77ad55ae01ccaeda8b.mockapi.io/Data');
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="App">

      <Switch>
        <Route exact path ="/">
          <MainPage/>
        </Route>
        <Route exact path = "/students">
        <StudentsComponents
        student = {student}
        setStudent = {setStudent}/>
        </Route>
        <Route path = "/add/student">
          <AddStudents
          student = {student}
          setStudent = {setStudent}/>
        </Route>
        <Route path="/student/:id">
          <StudentDetails
          student={student}/>
        </Route>
        <Route path="/editStudent/:id">
          <EditStudent
          student = {student}
          setStudent = {setStudent}/>
        </Route>
        <Route exact path = "/teachers">
        <TeachersComponent
        teacher = {teacher}
        setTeacher = {setTeacher}/>
        </Route>
        <Route path = "/add/teacher">
          <AddTeachers
          teacher = {teacher}
          setTeacher = {setTeacher}/>
        </Route>
        <Route path="/teacher/:id">
          <TeacherDetails
          teacher={teacher}/>
        </Route>
        <Route path="/editTeacher/:id">
          <EditTeacher
          teacher = {teacher}
          setTeacher = {setTeacher}/>
        </Route>
        <Route path = "**">
            <Nopage/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
