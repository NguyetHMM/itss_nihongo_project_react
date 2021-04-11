import React from "react";
import { Row, Table } from "react-bootstrap";
import { getKey } from "../lib/util";
import AddComponet from "./AddEditFood";
import Food from "./Food";

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
  const [isForm, setIsForm] = React.useState(false);
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
  };

  const editFood = (data) => {
    putItems(() => items.map((item) => (item.key === data.key ? data : item)));
    setEditFoodData({});
  };

  return (
    <Row>
      <div
        className={isForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "d-none"}>
        <AddComponet
          addNewFood={addNewFood}
          editFood={editFood}
          editData={editFoodData}
          onCloseForm={() => setIsForm(false)}
        />
      </div>
      <div
        className={
          isForm
            ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
            : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
        }>
        <button
          type="button"
          className="btn btn-primary mb-10"
          onClick={() => setIsForm(!isForm)}>
          <span className="fa fa-plus mr-2"></span>Add New Food
        </button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Let's eat</th>
              <th>Name</th>
              <th>Address</th>
              <th style={{ textAlign: "center" }}>Kind</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Food
                key={item.key}
                item={item}
                onCheck={handleCheck}
                // bạn nào viết cái nút edit bắt thì hàm bắt sự kiện click là hàm này nhé
                onEdit={() => {
                  setIsForm(true);
                  setEditFoodData(item);
                }}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </Row>
  );
}
export default FoodList;
