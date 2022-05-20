import Dropdown from "react-bootstrap/Dropdown";

import ListWarehouseNames from "../ListWarehouseNames/ListWarehouseNames.jsx";

const ListWarehouse = ({ warehouses }) => {
  return(
    <div className="warehouses">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Locations
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {warehouses?.map(({ id, ...other }) => 
            <ListWarehouseNames 
              key={id}
              {...other}
            />
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ListWarehouse;