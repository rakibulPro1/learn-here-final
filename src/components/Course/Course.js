import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  const { name, img, catagory, enrolled, price } = props.course;

  return (
    <div>
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <Link to="/" className="catagory-btn">
                    {catagory}
                  </Link>
                </div>
                <div>
                  <p>
                    <span className="fw-bold" style={{ color: "#03b970" }}>
                      {enrolled}
                    </span>{" "}
                    Enrolled
                  </p>
                </div>
              </div>

              <Card.Title>{name}</Card.Title>
              <div className="d-flex justify-content-between mt-4">
                <div>
                  <h3>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      $
                    </span>
                    <span style={{ color: "#03b970", fontWeight: "bold" }}>
                      {price}
                    </span>
                  </h3>
                </div>
                <div>
                  <Link to="/" className="enroll-btn">
                    Enroll
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Course;
