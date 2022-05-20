import ListInventoryItems from '../ListInventoryItems/ListInventoryItems.jsx';

const ListInventory = ({ inventory, ...other }) => {
  return(
    <table className="inventory">
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
    </table>
  );
}

export default ListInventory;