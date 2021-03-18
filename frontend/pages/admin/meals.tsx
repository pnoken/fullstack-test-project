import React, { useState, useEffect } from "react";
//import Meals from "../../components/Admin/Meals";
import Add from "../../components/Admin/Meal/Add";
import DeleteModal from "../../components/Admin/Meal/DeleteModal";
import UpdateModal from "../../components/Admin/Meal/UpdateModal";
import AdminLayout from "../../components/AdminLayout";

function meals() {
  const [meal, setMeal] = useState<any>([]);
  const [delId, setDelID] = useState<any>();
  const [editMeal, setEditMeal] = useState<any>([]);
  const [weekday, setWeekday] = useState("");
  const [mealName, setMealName] = useState("");
  const [updateId, setUpdateId] = useState<any>();

  const updateMeal = async (id: any) => {
    try {
      var raw = JSON.stringify({
        day: weekday,
        food: mealName,
      });

      var requestOptions = {
        method: "PUT",
        body: raw,
      };

      fetch(`http://localhost:3001/admin/food/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      alert("Could not update");
    }
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:3001/admin/food", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMeal(result);
      })
      .catch((error) => console.log("error", error));
  }, [meal]);

  const findMeal = (id: any) => {
    const item = meal.find((food: any) => food._id === id);

    setEditMeal(item);
    setWeekday(item.day);
    setMealName(item.food);
    setUpdateId(item._id);
  };

  const deleteMeal = async (id: any) => {
    try {
      var requestOptions = {
        method: "DELETE",
      };

      fetch(`http://localhost:3001/admin/food/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      meal.splice(
        meal.findIndex((food: any) => food._id === id),
        1
      );
    } catch (error) {
      alert("Could not delete");
    }
  };

  return (
    <AdminLayout title="Meals">
      <h1>Meals Available</h1>
      <button
        className="btn btn-primary float-right"
        type="button"
        data-toggle="modal"
        data-target="#addmeal"
        data-uid="1"
      >
        Add Meal
      </button>
      <Add />
      <div className="row">
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th>Weekday</th>
              <th>Food</th>
              <th>Action</th>
            </tr>
          </thead>
          {meal.map((food: any) => (
            <tbody key={food._id}>
              <tr id="d1">
                <td id="f1" className="text-capitalize">{food.day}</td>
                <td id="f2" className="text-capitalize">{food.food}</td>

                <td>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#edit"
                    data-uid="1"
                    className="update btn btn-warning btn-sm"
                    onClick={() => findMeal(food._id)}
                  >
                    <img src="/open-iconic/svg/eyedropper.svg" />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#deletemeal"
                    data-uid="1"
                    className="delete btn btn-danger btn-sm"
                    value={food._id}
                    onClick={(e: any) => setDelID(e.target.value)}
                  >
                    <img src="/open-iconic/svg/delete.svg" alt="delete" />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <DeleteModal deleteMeal={deleteMeal} delId={delId} />
      <UpdateModal
        mealName={mealName}
        weekday={weekday}
        setMealName={setMealName}
        setWeekday={setWeekday}
        updateMeal={updateMeal}
        updateId={updateId}
      />
    </AdminLayout>
  );
}

export default meals;
