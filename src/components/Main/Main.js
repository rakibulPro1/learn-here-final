import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import mainImg from "../../images/home.png";

const Main = () => {
  return (
    <div>
      <div className="py-3 px-5">
        <div className="row">
          {/* main section left */}
          <div className="col-6">
            <div className="mt-5">
              <h1 className="main-heading mb-3">
                Find The Most Exciting Online Cources
              </h1>
              <p className="main-para">
                One of the best ways to do this is to learn from us safely. It's
                Best Platform of learning.
              </p>

              <Link to="/">
                <button className="main-btn">Get Started</button>
              </Link>
            </div>
          </div>

          {/* main section right */}
          <div className="col-6">
            <img className="main-img img-fluid" src={mainImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
