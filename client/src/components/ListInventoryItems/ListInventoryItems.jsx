import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import CreateButton from '../CreateButton/CreateButton.jsx';
import SelectWarehouse from '../SelectWarehouse/SelectWarehouse.jsx';

const ListInventoryItems = ({ id, name, warehouse, getName, deleteItem, warehouses, selectIDs }) => {
  const selectWarehouse = (warehouseID) => {
    selectIDs(id, Number(warehouseID));
  }

  return(
    <tr className="item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{warehouse}</td>
      <td>
        <CreateButton 
          type="Edit" 
          desc="Edit item"
          id={id}
          getName={getName} 
        />  
      </td>
      <td>
        <SelectWarehouse 
          warehouses={warehouses} 
          selectWarehouse={selectWarehouse} 
        />
      </td>  
      <td>
        <DeleteButton 
          id={id} 
          deleteItem={deleteItem} 
        />
      </td>
    </tr>
  );
}

export default ListInventoryItems;