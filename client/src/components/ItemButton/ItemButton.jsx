import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import Form from '../Form/Form.jsx';

const ItemButton = ({ type }) => {
  const [show, toggleShow] = useState(false);

  const handleShow = (e) => {
    toggleShow(true);
  }

  const handleClose = (e) => {
    toggleShow(false);
  }

  return(
    <>
      <Button variant="primary" onClick={handleShow}>
        {type}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{type} item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {type}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ItemButton;