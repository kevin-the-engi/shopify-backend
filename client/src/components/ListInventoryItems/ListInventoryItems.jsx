import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import ItemButton from '../ItemButton/ItemButton.jsx';

const ListInventoryItems = ({ id, name, deleteItem }) => {
  return(
    <tr className="item">
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <ItemButton type="Edit" />  
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