import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const FormComponent = ({ handleClose, type, getName, id }) => {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setItem(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem('');
    getName(item, id);
    handleClose();
  }

  return(
    <>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>{type} name:</Form.Label>
              <Form.Control 
                type="text" 
                placeholder={"Enter name of " + (type === "Location" ? "location" : "item") + ":"} 
                value={item} 
                onChange={handleChange} 
              />
            </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="Submit" onClick={handleSubmit}>
          {type === "Edit" ? "Edit" : "Create"}
        </Button>
      </Modal.Footer>
    </>
  );
}

export default FormComponent;
