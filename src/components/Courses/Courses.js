import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="text-center my-5">
        <h3 style={{ color: "#03b970" }} className="fs-1 fw-bold">
          Our Courses
        </h3>
      </div>
      <Row xs={1} md={3} className="g-4 px-5">
        {courses.map((course) => (
          <Course course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
