import React from "react";
import { Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses/useCourses";
import Course from "../Course/Course";

const Feature = () => {
  // Custom hook useCourse
  const [courses] = useCourses();
  return (
    <div>
      <div className="text-center my-5">
        <h3 style={{ color: "#03b970" }} className="fs-1 fw-bold">
          Our Courses
        </h3>
      </div>
      <Row xs={1} md={2} className="g-4 px-5">
        {courses.slice(0, 4).map((course) => (
          <Course course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default Feature;
