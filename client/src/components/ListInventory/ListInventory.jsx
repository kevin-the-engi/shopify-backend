import React from 'react';
import Table from 'react-bootstrap/Table';

import ListInventoryItems from '../ListInventoryItems/ListInventoryItems.jsx';

const ListInventory = ({ inventory, ...other }) => {
  return(
    <Table striped bordered hover className="inventory">
      <thead>
        <tr>
          <th className="data">ID</th>
          <th className="data">Item Name</th>
          <th className="data">Warehouse</th>
          <th>Edit</th>
          <th>Location</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map(({ id, ...itemData }) => 
          <ListInventoryItems 
            key={id} 
            id={id}
            {...itemData} 
            {...other}
          />
        )}
      </tbody>
    </Table>
  );
}

export default ListInventory;