import React from "react";
import { Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses/useCourses";
import Course from "../Course/Course";

const Courses = () => {
  // Custom hook useCourses
  const [courses] = useCourses();

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
