import React from "react";
import { Row, Table } from "react-bootstrap";
import useStorage from "../hooks/useStorage";
import { getKey } from "../lib/util";
import AddComponet from "./AddEditFood";
import Food from "./Food";
import "./FoodList.styles.css";

function FoodList(props) {
  const [items, putItems] = useStorage();

  React.useEffect(() => {
    var itemsStorage = JSON.parse(localStorage.getItem("items"));
    if (itemsStorage != null) putItems(itemsStorage);
  }, []);

  const [editFoodData, setEditFoodData] = React.useState({});
  const handleCheck = (checked) => {
    const newItems = items.map((item) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  };

  let itemToShow;
  if (props.toShowFood !== "" && props.toShowFood2 != null) {
    itemToShow = items.filter((item) => {
      return item.kind === props.toShowFood && item.done === props.toShowFood2;
    });
  } else if (props.toShowFood === "" && props.toShowFood2 != null) {
    itemToShow = items.filter((item) => {
      return item.done === props.toShowFood2;
    });
  } else if (props.toShowFood !== "" && props.toShowFood2 === null) {
    itemToShow = items.filter((item) => {
      return item.kind === props.toShowFood;
    });
  } else itemToShow = Object.assign(items);

  const addNewFood = (data) => {
    putItems([...items, data]);
    hiddenModel();
  };

  const editFood = (data) => {
    putItems(() => items.map((item) => (item.key === data.key ? data : item)));
    setEditFoodData({});
    hiddenModel();
  };

  const showModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.marginTop = "0";
  };

  const hiddenModel = () => {
    const modal = document.getElementById("myModal");
    modal.style.marginTop = "-50%";
  };

  const deleteFood = (food) => {
    const index = items.findIndex((item) => item.key === food.key);
    if (index > -1) {
      items.splice(index, 1);
      putItems([...items]);
    }
  };

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Row>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button
            type="button"
            className="btn btn-primary mb-10"
            onClick={showModal}>
            <span className="fa fa-plus mr-2"></span>Add New Food
          </button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th style={{ textAlign: "center", width: "5%" }}>Let's eat</th>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "50%" }}>Address</th>
                <th style={{ textAlign: "center", width: "5%" }}>Kind</th>
                <th style={{ textAlign: "center", width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {itemToShow.map((item) => (
                <Food
                  key={item.key}
                  item={item}
                  onCheck={handleCheck}
                  onEdit={() => {
                    showModal();
                    setEditFoodData(item);
                  }}
                  onDelete={() => deleteFood(item)}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
      <div id="myModal" className="modalFood">
        <span className="close" id="close" onClick={hiddenModel}>
          &times;
        </span>
        <div className="content-modal-box">
          <div className="content" id="modal-content">
            <AddComponet
              addNewFood={addNewFood}
              editFood={editFood}
              editData={editFoodData}
              onCloseForm={hiddenModel}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FoodList;
