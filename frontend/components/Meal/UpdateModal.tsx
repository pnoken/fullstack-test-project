import React, { useState, useEffect } from "react";

export default function UpdateModal() {
  const [meal, setMeal] = useState<any>([]);
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [food, setFood] = useState<any>([]);
  const [userId, setUserId] = useState<any>();
 

  //console.log("Ma", meal)
  useEffect(() => {
    let lStorage: any = window.localStorage.getItem("profile");
    if (lStorage) {
      lStorage = JSON.parse(lStorage);
      console.log("local", lStorage._id);
      setUserId(lStorage._id);
    }
  }, []);

  const updateMeal = async () => {
    try {
      var raw = JSON.stringify({
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
      });

      var requestOptions = {
        method: "PUT",
        body: raw,
      };

      fetch(`http://localhost:3001/user/food/${userId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      alert("Could not update");
    }
  };

  var requestOptions = {
    method: "GET",
  };

  fetch("http://localhost:3001/admin/food", requestOptions)
    .then((response) => response.json())
    .then((result) => setFood(result))
    .catch((error) => console.log("error", error));

    useEffect(() => {
      var requestOptions = {
        method: "GET",
      };
  
      const getMenu = async () => {
        await fetch(`http://localhost:3001/user/food/${userId}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setMeal(result), console.log("meal res", result);
          })
          .catch((error) => console.log("error", error));
      };
      getMenu();
    }, [updateMeal, meal]);



  return (
    <div id="editselection" className="modal fade" role="dialog">
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
              
              {food
                .filter((food: any) => food.day === "monday")
                .map((day: any) => (
                  <option
                    key={day._id}
                    value={meal.monday}
                    className="text-capitalize"
                  >
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Tuesday</label>
            <select onChange={(e) => setTuesday(e.target.value)}>
             
              {food
                .filter((food: any) => food.day === "tuesday")
                .map((day: any) => (
                  <option value={meal.tuesday} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Wednesday</label>
            <select onChange={(e) => setWednesday(e.target.value)}>
              
              {food
                .filter((food: any) => food.day === "wednesday")
                .map((day: any) => (
                  <option value={meal.wednesday} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Thursday</label>
            <select onChange={(e) => setThursday(e.target.value)}>
             
              {food
                .filter((food: any) => food.day === "thursday")
                .map((day: any) => (
                  <option value={meal.thursday} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>

            <label>Friday</label>
            <select onChange={(e) => setFriday(e.target.value)}>
              
              {food
                .filter((food: any) => food.day === "friday")
                .map((day: any) => (
                  <option value={meal.friday} className="text-capitalize">
                    {day.food}
                  </option>
                ))}
            </select>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              id="up"
              className="btn btn-warning"
              data-dismiss="modal"
              onClick={() => updateMeal}
            >
              Update
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
