import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import Form from '../Form/Form.jsx';

const CreateButton = ({ type, desc, ...other }) => {
  const [show, toggleShow] = useState(false);

  const handleShow = () => {
    toggleShow(true);
  }

  const handleClose = () => {
    toggleShow(false);
  }

  return(
    <>
      <Button id={type} variant="primary" onClick={handleShow}>
        {type}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{desc}</Modal.Title>
        </Modal.Header>

        <Form 
          handleClose={handleClose}
          type={type}
          {...other}
        />
      </Modal>
    </>
  );
}

export default CreateButton;