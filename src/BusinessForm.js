import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

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
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <Form.Text className="text-muted">
          Enter your name in the following format ; e.g. Dela, Cruz Juan
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
}
