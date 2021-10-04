import Button from "@restart/ui/esm/Button";
import React from "react";
import { Badge, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="px-5 footer">
          <div className="row">
            {/* foooter logo area */}
            <div className="col-6">
              <h3 className="footer-logo mb-5">LEARN HERE</h3>
              <h4>Do You Need Help With Anything? </h4>
              <p className="footer-para mb-3">
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>
              <div>
                <InputGroup className="mb-3 w-50">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    className="btn"
                    style={{
                      backgroundColor: "#03B97C",
                      color: "white",
                    }}
                  >
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </div>
            {/* Footer all section area */}
            <div className="col-2">
              <h4 className="mb-5">All Sections</h4>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item me-2">
                  Header
                </Link>
                <Badge bg="success">New</Badge>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item">
                  Features
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item me-2">
                  Attractive
                </Link>
                <Badge bg="success">New</Badge>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item">
                  Testomonials
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item">
                  Videos
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item">
                  Footer
                </Link>
              </div>
            </div>

            {/* Footer Layout area */}
            <div className="col-2">
              <h4 className="mb-5">Layout</h4>
              <div className="mb-2">
                <Link to="/home" className="footer-nav-item">
                  Home Page
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/about" className="footer-nav-item">
                  About Page
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/course" className="footer-nav-item">
                  Courses Page
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/home" className="footer-nav-item">
                  Contact Page
                </Link>
              </div>
            </div>

            {/* Footer Company area */}
            <div className="col-2">
              <h4 className="mb-5">Company</h4>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item">
                  About
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item me-2">
                  Blog
                </Link>
                <Badge bg="warning">Update</Badge>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item">
                  Pricing
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item me-2">
                  Affiliate
                </Link>
                <Badge bg="success">New</Badge>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item">
                  Login
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/" className="footer-nav-item me-2">
                  ChangeLog
                </Link>
                <Badge bg="warning">Update</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
