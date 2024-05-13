import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

export default function Navv() {
  let selector = useSelector((state) => state.countere);
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Nav className="me-auto">
          <Link to="/" className="lin"></Link>
          <Link to="/home" className="lin">Home</Link>
          <Link to="/about" className="lin">About</Link>
          <Link to="/gallery" className="lin">Gallery</Link>
          <Link to="/contact" className="lin">Contact</Link>
          <Link to="/user-actions" className="lin">UserActions</Link>
          <Link to="/counter" className="lin">ReduxEx{selector}</Link>
        </Nav>
      </Navbar>
    </div>
  );
}
