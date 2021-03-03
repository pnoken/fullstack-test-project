import React, {useState} from "react";

export default function Add() {
  const [day, setDay] = useState("");
  const [food, setFood] = useState("");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ day: day, food: food });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const submit = async () => {
  fetch("http://localhost:3001/admin/food", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  };

  return (
    <div id="addmeal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <input
              id="wk"
              type="text"
              className="form-control"
              name="day"
              value={day}
              placeholder="Weekday"
                onChange={(e) => {
                  setDay(e.target.value);
                }}
            />
            <input
              id="fd"
              type="text"
              className="form-control"
              name="food"
              value={food}
              placeholder="food"
                onChange={(e) => {
                  setFood(e.target.value);
                }}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              id="up"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={submit}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
