import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const applicantInfo = (newApplicant) => {
    let id =
      studentsInfo.length > 0
        ? studentsInfo[studentsInfo.length - 1].id + 1
        : 1;

    newApplicant = { ...newApplicant, id: id };
    setStudentsInfo([...studentsInfo, newApplicant]);
  };

  const deleteStudent = (id) => {
    setStudentsInfo(studentsInfo.filter((student) => id !== student.id));
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} deleteStudent={deleteStudent} />
      ) : (
        <Form applicantInfo={applicantInfo} />
      )}
    </div>
  );
}

export default App;
