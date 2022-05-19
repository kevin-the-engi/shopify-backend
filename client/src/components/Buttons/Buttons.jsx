import Button from 'react-bootstrap/Button';

const Buttons = ({ name }) => {
  return(
    <>
      <Button variant="primary">{name}</Button>{' '}
    </>
  )
}

export default Buttons;
