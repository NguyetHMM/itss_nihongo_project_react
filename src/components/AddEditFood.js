import React from "react";
import { Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getKey } from "../lib/util";
const AddComponet = (props) => {
  const { editData, addNewFood, editFood, onCloseForm } = props;
  const onSubmit = (data, event) => {
    if (editData?.key) {
      const dataFoodEdit = {
        ...editData,
        name: data.name ? data.name : editData.name,
        address: data.address ? data.address : editData.address,
        kind: data.kind,
      };
      editFood(dataFoodEdit);
    } else {
      data.key = getKey();
      data.done = false;
      addNewFood(data);
    }
    event.target.reset();
  };
  const { register, handleSubmit } = useForm();
  return (
    <Card className="panel panel-warning">
      <Card.Header variant="primary" className="d-flex justify-content-between">
        <span>{editData?.key ? "Edit Food" : "Add New Food"}</span>
        <span
          className="fa fa-times-circle text-right"
          type="button"
          onClick={onCloseForm}></span>
      </Card.Header>
      <Card.Body className="panel-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Food Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={editData?.name}
              required
              {...register("name")}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              className="form-control"
              defaultValue={editData?.address}
              required
              {...register("address")}
            />
          </div>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Kind</Form.Label>
            <Form.Control
              as="select"
              size="md"
              name="kind"
              custom
              {...register("kind")}>
              <option value="food">Food</option>
              <option value="drink" selected={editData?.kind === "drink"}>
                Drink
              </option>
            </Form.Control>
          </Form.Group>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning w-10">
              Yes
            </button>
            &nbsp;
            <button
              type="reset"
              className="btn btn-danger w-10"
              onClick={onCloseForm}>
              Cancel
            </button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};
export default AddComponet;
