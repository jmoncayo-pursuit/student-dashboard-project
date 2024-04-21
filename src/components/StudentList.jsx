//StudentList.jsx
// Component responsible for displaying the list of all students.

import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
