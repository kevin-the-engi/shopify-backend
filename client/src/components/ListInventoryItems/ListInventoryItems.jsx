import React from 'react';

import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import CreateButton from '../CreateButton/CreateButton.jsx';
import SelectWarehouse from '../SelectWarehouse/SelectWarehouse.jsx';

const ListInventoryItems = ({ id, name, warehouse, getName, deleteItem, warehouses, selectIDs }) => {
  const selectWarehouse = (warehouseID) => {
    selectIDs(id, Number(warehouseID));
  }

  return(
    <tr className="item">
      <td width="60" className="data">{id}</td>
      <td width="300" className="data">{name}</td>
      <td width="200" className="data">{warehouse}</td>
      <td width="60">
        <CreateButton 
          type="Edit" 
          desc="Edit item"
          id={id}
          getName={getName} 
        />  
      </td>
      <td width="130">
        <SelectWarehouse 
          warehouses={warehouses} 
          selectWarehouse={selectWarehouse} 
        />
      </td>  
      <td width="50">
        <DeleteButton 
          id={id} 
          deleteItem={deleteItem} 
        />
      </td>
    </tr>
  );
}

export default ListInventoryItems;