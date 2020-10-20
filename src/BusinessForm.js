import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
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

      <div className='background'> .
        
      </div>

      <Form.Group>
        <Form.Label>Type of Business</Form.Label>
        <Form.Control as="select">
          <option>Single</option>
          <option>Partnership</option>
          <option>Corporation</option>
          <option>Cooperative</option>
        </Form.Control>

        <Form.Text className="text-muted">
          Enter your type of business
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Name of Business</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
        />
        <Form.Text className="text-muted">
          Enter the name of your business
        </Form.Text>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Business Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
            />
            <Form.Text className="text-muted">
              Enter your business address in the following format: House#, Street, Subdivision or Purok, City
            </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Barangay</Form.Label>
          <Form.Control as="select">
            <option>Barangay 1</option>
            <option>Barangay 2</option>
            <option>Barangay 3</option>
            <option>Barangay 4</option>
            <option>Barangay 5</option>
            <option>Barangay 6</option>
            <option>Barangay 7</option>
            <option>Barangay 8</option>
            <option>Barangay 9</option>
            <option>Barangay 10</option>
            <option>Barangay 11</option>
            <option>Barangay 12</option>
            <option>Barangay 13</option>
            <option>Barangay 14</option>
            <option>Barangay 15</option>
            <option>Barangay 16</option>
            <option>Barangay 17</option>
            <option>Barangay 18</option>
            <option>Barangay 19</option>
            <option>Barangay 20</option>
            <option>Barangay 21</option>
            <option>Barangay 22</option>
            <option>Barangay 23</option>
            <option>Barangay 24</option>
            <option>Barangay 25</option>
            <option>Barangay 26</option>
            <option>Barangay 27</option>
            <option>Barangay 28</option>
            <option>Barangay 29</option>
            <option>Barangay 30</option>
            <option>Barangay 31</option>
            <option>Barangay 32</option>
            <option>Barangay 33</option>
            <option>Barangay 34</option>
            <option>Barangay 35</option>
            <option>Barangay 36</option>
            <option>Barangay 37</option>
            <option>Barangay 38</option>
            <option>Barangay 39</option>
            <option>Barangay 40</option>
            <option>Barangay 41</option>
            <option>Alangilan</option>
            <option>Alijis</option>
            <option>Banago</option>
            <option>Bata</option>
            <option>Cabug</option>
            <option>Estefania</option>
            <option>Felisa</option>
            <option>Granada</option>
            <option>Handumanan</option>
            <option>Mandalagan</option>
            <option>Mansilingan</option>
            <option>Montevista</option>
            <option>Pahanocoy</option>
            <option>Punta Taytay</option>
            <option>Singcang-Airport</option>
            <option>Sum-ag</option>
            <option>Taculing</option>
            <option>Tangub</option>
            <option>Villamonte</option>
            <option>Vista Alegre</option>
          </Form.Control>

          <Form.Text className="text-muted">
            Choose your barangay
          </Form.Text>
        </Form.Group>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone"
          />
          <Form.Text className="text-muted">
            Enter business phone number in the following fornat: e.g. 4441234
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="09XXXXXXXXX"
          />
          <Form.Text className="text-muted">
            Enter  mobile number in the following format: 09097770000
          </Form.Text>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>DTI/SEC/CDA Registration No.#:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Registration No."
        />
        <Form.Text className="text-muted">
          Enter your DTI/SEC/CDA Reg. No.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Date of Registration</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter Date"
        />
        <Form.Text className="text-muted">
          Enter the date of registration
        </Form.Text>
      </Form.Group>


      <hr></hr>
      <div className='form-header'>
        TAXPAYERS INFORMATION
      </div>


      <Form.Group>
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Lastname"
        />
        <Form.Text className="text-muted">
          Enter your Lastname
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Firstname"
        />
        <Form.Text className="text-muted">
          Enter your Firstname
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Middlename</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Middlename"
        />
        <Form.Text className="text-muted">
          Enter your Middlename
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Taxpayers Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
        />
        <Form.Text className="text-muted">
          Enter your address
        </Form.Text>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone"
          />
          <Form.Text className="text-muted">
            Enter phone number in the following fornat: e.g. 4441234
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="09XXXXXXXXX"
          />
          <Form.Text className="text-muted">
          Enter mobile number in the following format: 09097770000
          </Form.Text>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Email"
        />
        <Form.Text className="text-muted">
          Enter your email address
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Contact Person In Case of Emergency</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name of contact person"
        />
        <Form.Text className="text-muted">
          Enter name
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Contact Number of Contact Person</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact number of contact person"
        />
        <Form.Text className="text-muted">
          Enter your name in the following format ; e.g. Dela, Cruz Juan
        </Form.Text>
      </Form.Group>


      <div className='form-header'>
        BUSINESS PROPERTY
      </div>

      
      <Form.Group>
        <Form.Label>Type of Business</Form.Label>
        <Form.Control as="select">
          <option>Owned</option>
          <option>Rented</option>
        </Form.Control>

        <Form.Text className="text-muted">
        If Owned: Please present a photocopy of any "Legal Proof of Ownership" upon submission of documents to the Business Permits and Licensing Office.<br></br>
        If Rented: Please Present a photocopy of Contract of Lease upon submission of documents to the Business Permits and Licensing Office.

        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)} block>
        Submit
      </Button>

    </Form>
      
  );
}
