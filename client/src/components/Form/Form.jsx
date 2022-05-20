import Form from 'react-bootstrap/Form';

const FormComponent = ({ createItem }) => {
  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return(
    <Form>
        <Form.Group className="mb-3" controlId="formItemName">
          <Form.Label>Item name:</Form.Label>
          <Form.Control type="text" placeholder="Enter name of item" />
        </Form.Group>
    </Form>
  )
}

export default FormComponent;
