import ListInventoryItems from '../ListInventoryItems/jsx';

const ListInventory = ( { inventory }) => {
  return(
    <>
      {inventory.map(({ id, ...other }) => 
        <ListInventoryItems 
          key={id} 
          {...other} 
        />
      )}
    </>
  )
}

export default ListInventory;