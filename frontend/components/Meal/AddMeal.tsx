import React, { useState, useEffect } from "react";

export default function AddMeal({meal, setAdded}: any) {
  //const router = useRouter();
  const [monday, setMonday] = useState("Choose Meal");
  const [tuesday, setTuesday] = useState("Choose Meal");
  const [wednesday, setWednesday] = useState("Choose Meal");
  const [thursday, setThursday] = useState("Choose Meal");
  const [friday, setFriday] = useState("Choose Meal");
  const [food, setFood] = useState<any>([]);
  const [auth, setAuth] = useState<any>([]);

  useEffect(() => {
    let lStorage: any = window.localStorage.getItem("auth");
    if (lStorage) {
      lStorage = JSON.parse(lStorage);
      console.log("local", lStorage);
      setAuth(lStorage);
    }
  }, []);

  var requestOptions = {
    method: "GET",
  };

  fetch("http://localhost:3001/admin/food", requestOptions)
    .then((response) => response.json())
    .then((result) => setFood(result))
    .catch((error) => console.log("error", error));

  const submit = async () => {
    var raw = JSON.stringify({
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
    });
    var myHeaders = new Headers();
    myHeaders.append("auth-token", auth);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    
    fetch("http://localhost:3001/user/food", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      setAdded(true)
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
            <label>Monday</label>
            <select onChange={(e) => setMonday(e.target.value)}>
              <option>Select a meal</option>
              {food
                .filter((food: any) => food.day === "monday")
                .map((day: any) => (
                  <option
                    key={day._id}
                    value={day.day}
                    className="text-capitalize"
                  >
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Tuesday</label>
            <select onChange={(e) => setTuesday(e.target.value)}>
              <option>Select a meal</option>
              {food
                .filter((food: any) => food.day === "tuesday")
                .map((day: any) => (
                  <option value={day.day} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Wednesday</label>
            <select onChange={(e) => setWednesday(e.target.value)}>
              <option>Select a meal</option>
              {food
                .filter((food: any) => food.day === "wednesday")
                .map((day: any) => (
                  <option value={day.day} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Thursday</label>
            <select onChange={(e) => setThursday(e.target.value)}>
              <option>Select a meal</option>
              {food
                .filter((food: any) => food.day === "thursday")
                .map((day: any) => (
                  <option value={day.day} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Friday</label>
            <select onChange={(e) => setFriday(e.target.value)}>
              <option>Select a meal</option>
              {food
                .filter((food: any) => food.day === "friday")
                .map((day: any) => (
                  <option value={day.food} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>
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
