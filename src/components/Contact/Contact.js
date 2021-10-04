import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-form py-4 mx-auto">
        <div className="text-center mb-4">
          <h2 className=" fw-bold" style={{ color: "#03b97c" }}>
            Contact Form
          </h2>
          <p>Please Fill this field For Contact Us</p>
        </div>
        <div className="form">
          <div className="mx-5 mb-3">
            <label htmlFor="">FirstName:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mx-5 mb-3">
            <label htmlFor="">LastName:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mx-5 mb-3">
            <label htmlFor="">Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mx-5 mb-3">
            <label htmlFor="">Messege:</label>
            <textarea cols="10" rows="5" className="form-control"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="contact-btn mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
