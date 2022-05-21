import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SelectWarehouseNames = ({ id, name }) => {
  return(
    <>
      <Dropdown.Item eventKey={id}>{name}</Dropdown.Item>
    </>
  );
}

export default SelectWarehouseNames;