import Dropdown from 'react-bootstrap/Dropdown';

const ListWarehouseNames = ({ name }) => {
  return(
    <>
      <Dropdown.Item href="#/action-1">{name}</Dropdown.Item>
    </>
  );
}

export default ListWarehouseNames;