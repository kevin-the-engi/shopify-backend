import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import CreateButton from '../CreateButton/CreateButton.jsx';

const ListInventoryItems = ({ id, name, getName, deleteItem }) => {
  return(
    <tr className="item">
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <CreateButton 
          type="Edit" 
          desc="Edit item"
          id={id}
          getName={getName} 
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