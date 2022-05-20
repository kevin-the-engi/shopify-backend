import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import CreateButton from '../CreateButton/CreateButton.jsx';
import ListWarehouse from '../ListWarehouse/ListWarehouse.jsx';

const ListInventoryItems = ({ id, name, warehouse_id, getName, deleteItem, warehouses }) => {
  return(
    <tr className="item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{warehouse_id}</td>
      <td>
        <CreateButton 
          type="Edit" 
          desc="Edit item"
          id={id}
          getName={getName} 
        />  
      </td>
      <td>
        <ListWarehouse warehouses={warehouses} />
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