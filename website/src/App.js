import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import zapLogo from "./zapLogo.png";

const App = () => {
  return (
    <div className="App">
      <Navbar variant="dark" bg="dark" sticky="top">
        <div className="navbar">
          <div className="navbar_img">
            <Navbar.Brand href="#home">
              <img
                src={zapLogo}
                alt="logo"
                width={80}
                height={50}
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </div>
        </div>
      </Navbar>
      <div className="directions">
        Fill out the form to apply for an account
      </div>
      <div className="form">{/* {PersonalDataForm()} */}</div>
    </div>
  );
};

export default App;
