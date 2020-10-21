import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import Recaptcha from "react-recaptcha";
import ReCAPTCHA from "react-google-recaptcha";


export default function BusinessForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put("/persons", {
        name,
        address,
      })
      .then((response) => {
        console.log("Person added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form>

      <div className='background'>
      </div>
      <div className='form-header'>Application Form for Businesse Permit Renewal</div><br></br>

      <Form.Group>
        <Form.Label>Permit Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Permit no."
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Application Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter APP no."
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="09XXXXXXXXX"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g. myemail@yahoo.com"
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)} block>
        Submit
      </Button>
      


    </Form>
      
  );
}