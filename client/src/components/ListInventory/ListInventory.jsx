import ListInventoryItems from '../ListInventoryItems/ListInventoryItems.jsx';

const ListInventory = ({ inventory }) => {
  return(
    <table className="inventory">
      <tbody>
        {inventory.map(({ id, name }) => 
          <ListInventoryItems 
            key={id} 
            id={id}
            name={name} 
          />
        )}
      </tbody>
    </table>
  )
}

export default ListInventory;