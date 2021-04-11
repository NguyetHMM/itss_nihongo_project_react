import React from "react";
import { Row, Table } from "react-bootstrap";
import { getKey } from "../lib/util";
import AddComponet from "./AddEditFood";
import Food from "./Food";
import "./FoodList.styles.css";

function FoodList() {
  
  const [items, putItems] = React.useState([
    {
      key: getKey(),
      name: "Phở Thìn",
      address: "13 Lò Đúc",
      kind: "food",
      done: true,
    },
    {
      key: getKey(),
      name: "Phở Lý Quốc Sư",
      address: "10 Lý Quốc Sư",
      kind: "food",
      done: false,
    },
    {
      key: getKey(),
      name: "Strongbow úp ngược vị hoa quả",
      address: "Funny Monkey, 251 Xã Đàn, Đống Đa",
      kind: "drink",
      done: false,
    },
    {
      key: getKey(),
      name: "Cháo sườn chợ Đồng Xuân",
      address: "14 Đồng Xuân, Hoàn Kiếm",
      kind: "food",
      done: true,
    },
    {
      key: getKey(),
      name: "Trà sữa lon Hà Nội",
      address: "Master Tea – 75 Trần Quốc Hoàn, Dịch Vọng Hậu, Cầu Giấy",
      kind: "drink",
      done: true,
    },
  ]);

  
  React.useEffect(() => {
    var itemsStorage = JSON.parse(localStorage.getItem('items'));
    if (itemsStorage != null)
      putItems(itemsStorage);
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
    localStorage.setItem('items', JSON.stringify(items));
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
              {items.map((item) => (
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
