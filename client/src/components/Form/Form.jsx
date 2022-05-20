import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

const FormComponent = ({ handleClose, type, getItem, id }) => {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setItem(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem('');
    getItem(item, id);
    handleClose();
  }

  return(
    <>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formItemName">
              <Form.Label>Item name:</Form.Label>
              <Form.Control type="text" placeholder="Enter name of item" value={item} onChange={handleChange} />
            </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="Submit" onClick={handleSubmit}>
          {type}
        </Button>
      </Modal.Footer>
    </>
  );
}

export default FormComponent;
