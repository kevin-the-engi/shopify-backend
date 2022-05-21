import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";

import SelectWarehouseNames from "../SelectWarehouseNames/SelectWarehouseNames.jsx";

const SelectWarehouse = ({ warehouses, selectWarehouse }) => {
  return(
    <div className="warehouses">
      <Dropdown onSelect={selectWarehouse}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Locations
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {warehouses?.map(({ id, ...other }) => 
            <SelectWarehouseNames 
              key={id}
              id={id}
              {...other}
            />
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SelectWarehouse;