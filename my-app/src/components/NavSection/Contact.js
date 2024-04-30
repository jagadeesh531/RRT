import React, { useState } from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Contact() {
  const [users, setUsers] = useState({
    name: "",
    mail: "",
    password: "",
    confirmpassword: "",
    city: "",
    pincode: "",
  });
  const [error, setErrors] = useState({});
  const [clearFields] = useState(users);

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    let validations = {};

    if (!users.name.trim()) {
      validations.name = "Field is required.";
    } else if (users.name.length <= 3) {
      validations.name = "Name must more than 3 charecters.";
    }

    if (!users.mail.trim()) {
      validations.mail = "Field is required.";
    }

    if (!users.password.trim()) {
      validations.password = "Field is required.";
    } else if (users.password.length <= 5) {
      validations.password = "password must more than 5 charecters.";
    }

    if (users.confirmpassword !== users.password) {
      validations.confirmpassword = "password should be match.";
    }

    if (!users.city.trim()) {
      validations.city = "Field is required.";
    } else if (users.city.length <= 3) {
      validations.city = "city must more than 3 charecters.";
    }

    if (!users.pincode.trim()) {
      validations.pincode = "Field is required.";
    } else if (users.pincode.length <= 5) {
      validations.pincode = "pincode must more than 3 numbers.";
    }
    setErrors(validations);
    if (Object.keys(validations).length === 0) {
      alert("Form Submitted");
      setUsers(clearFields);
      console.log(users);
    }
  };
  return (
    <div className="map">
      <Container>
        <form onSubmit={handleSubmit}>
          <h4>Users Contact Form</h4>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={users.name}
            onChange={handleChange}
            className="input-lines"
          />
          {error.name && <p>{error.name}</p>}
          <input
            type="email"
            placeholder="Enter Mail"
            name="mail"
            value={users.mail}
            onChange={handleChange}
            className="input-lines"
          />
          {error.mail && <p>{error.mail}</p>}
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={users.password}
            onChange={handleChange}
            className="input-lines"
          />
          {error.password && <p>{error.password}</p>}
          <input
            type="password"
            placeholder="Confirm-password"
            name="confirmpassword"
            value={users.confirmpassword}
            onChange={handleChange}
            className="input-lines"
          />
          {error.confirmpassword && <p>{error.confirmpassword}</p>}
          <input
            type="text"
            placeholder="Enter city"
            name="city"
            value={users.city}
            onChange={handleChange}
            className="input-lines"
          />
          {error.city && <p>{error.city}</p>}
          <input
            type="text"
            placeholder="Enter pincode"
            name="pincode"
            value={users.pincode}
            onChange={handleChange}
            className="input-lines"
          />
          {error.pincode && <p>{error.pincode}</p>}
          <Button type="submit" variant="primary">
            Submit
          </Button>{" "}
        </form>
      </Container>
    </div>
  );
}
