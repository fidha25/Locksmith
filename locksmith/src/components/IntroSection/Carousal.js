import React from "react";
import "./Carousal.css";
import { motion } from "framer-motion";
import { Dropdown, Button, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

export default function Carousal() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/locksmith-8956719.jpg"
            alt="Los Angeles"
            className="d-block w-100"
          />
          <div className="container_fluid">
            <div className="overlay-content">
              <h1 className="intro-heading">
                <span className="highlight-text">Lock Quick</span> – Fast & Reliable <br />
                Locksmith Services in Australia
              </h1>
              <h4>24/7 Emergency Locksmith Services – Anytime, Anywhere!</h4>
              <p>
                Locked out of your home, office, or car? Need urgent lock repairs or key replacements?
                <b> Lock Quick</b> is your go-to locksmith service provider, offering <b>affordable locksmith services</b>,
                <b> 24-hour locksmith support</b>, and <b>fast mobile locksmith solutions around Australia</b>. Whether it's an
                emergency lockout or a security upgrade, our certified professionals are always ready to assist.
              </p>
              <InputGroup className="service-dropdown">
                <Dropdown>
                  <Dropdown.Toggle style={{ backgroundColor: "white", color: "black" }} id="dropdown-basic">
                    Select Service
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#service1">Service 1</Dropdown.Item>
                    <Dropdown.Item href="#service2">Service 2</Dropdown.Item>
                    <Dropdown.Item href="#service3">Service 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="secondary" className="search-button">
                  <Search />
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/images/closeup-couple-receiving-key-their-new-real-estate.jpg"
            alt="Chicago"
            className="d-block w-100 img-fluid"
          />
          <div className="container_fluid">
            <div className="overlay-content">
              <h3>Best Quality</h3>
              <p>Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
