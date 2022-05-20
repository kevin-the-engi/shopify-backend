import Table from 'react-bootstrap/Table';

import ListInventoryItems from '../ListInventoryItems/ListInventoryItems.jsx';

const ListInventory = ({ inventory, ...other }) => {
  return(
    <Table striped bordered hover className="inventory">
      <tbody>
        {inventory.map(({ id, name }) => 
          <ListInventoryItems 
            key={id} 
            id={id}
            name={name} 
            {...other}
          />
        )}
      </tbody>
    </Table>
  );
}

export default ListInventory;