import { Image } from "react-bootstrap";
function Food({ item, onCheck, onEdit, onDelete }) {
  const handleChange = () => {
    onCheck(item);
  };
  return (
    <tr className={item.done ? "text-success" : ""}>
      <td style={{ textAlign: "center" }}>
        {item.done ? (
          <i
            style={{ fontSize: "25px", color: "darkseagreen" }}
            className="fas fa-check-circle"
            onClick={handleChange}></i>
        ) : (
          <Image
            style={{ height: "25px" }}
            src="/eat.png"
            onClick={handleChange}
          />
        )}
      </td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td style={{ textAlign: "center" }}>
        {item.kind === "drink" ? (
          <Image style={{ height: "25px" }} src="/drink.png" />
        ) : (
          <Image style={{ height: "25px" }} src="/food.png" />
        )}
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning" onClick={onEdit}>
          <span className="fa fa-pencil"></span>Edit
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash"></span>Delete
        </button>
      </td>
    </tr>
  );
}

export default Food;
