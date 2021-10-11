import React, { useState } from "react";
import SideInfo from "./SideInfo";
import Student from "./Student";

function Form({ applicantInfo }) {
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applicantInfo(student);
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What is your first name?"
          onChange={handleChange}
          name="name"
          value={student.name}
        ></input>
        <input
          placeholder="What is your last name?"
          onChange={handleChange}
          name="lastName"
          value={student.lastName}
        ></input>
        <input
          placeholder="What is your phone number?"
          onChange={handleChange}
          name="phoneNumber"
          value={student.phoneNumber}
        ></input>
        <input
          placeholder="What is your power?"
          onChange={handleChange}
          name="power"
          value={student.power}
        ></input>
        <input
          placeholder="What is your email address?"
          onChange={handleChange}
          name="email"
          value={student.email}
        ></input>
        <button type="submit">Submit Application</button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;

//What does onChange do again?
