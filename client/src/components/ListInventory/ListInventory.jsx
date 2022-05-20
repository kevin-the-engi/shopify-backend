import Table from 'react-bootstrap/Table';

import ListInventoryItems from '../ListInventoryItems/ListInventoryItems.jsx';

const ListInventory = ({ inventory, ...other }) => {
  return(
    <Table striped bordered hover className="inventory">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Warehouse</th>
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