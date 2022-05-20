import ListInventoryItems from '../ListInventoryItems/ListInventoryItems.jsx';

const ListInventory = ({ inventory }) => {
  return(
    <div className="inventory">
      {inventory.map(({ id, name }) => 
        <ListInventoryItems 
          key={id} 
          id={id}
          name={name} 
        />
      )}
    </div>
  )
}

export default ListInventory;