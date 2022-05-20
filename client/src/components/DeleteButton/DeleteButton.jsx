import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const DeleteButton = ({ id, deleteItem }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem(id);
    handleClose();
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        X
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Delete item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;