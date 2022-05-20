const ListInventoryItems = ({ id, name }) => {
  return(
    <tr className="item">
      <td>{id}</td>
      <td>{name}</td>  
    </tr>
  )
}

export default ListInventoryItems;