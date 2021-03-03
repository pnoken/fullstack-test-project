import React, { useState, useEffect } from "react";
import DeleteModal from "../../../components/Admin/Students/Meal/DeleteModal";
//import UpdateModal from "../../../components/Admin/Meal/UpdateModal";
import AdminLayout from "../../../components/AdminLayout";

function meals() {
  const [meal, setMeal] = useState<any>([]);
  const [delId, setDelID] = useState<any>();
//   const [editMeal, setEditMeal] = useState<any>([]);
//   const [weekday, setWeekday] = useState("");
//   const [mealName, setMealName] = useState("");
//   const [updateId, setUpdateId] = useState<any>();

//   const updateMeal = async (id: any) => {
//     try {
//       var raw = JSON.stringify({
//         day: weekday,
//         food: mealName,
//       });

//       var requestOptions = {
//         method: "PUT",
//         body: raw,
//       };

//       fetch(`http://localhost:3001/admin/food/${id}`, requestOptions)
//         .then((response) => response.json())
//         .then((result) => console.log(result))
//         .catch((error) => console.log("error", error));
//     } catch (error) {
//       alert("Could not update");
//     }
//   };

  useEffect(() => {
    //var myHeaders = new Headers();
    // myHeaders.append(
    //   "auth-token",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM1ZjMyMGU3YjBkYTY4OTA5MzIxMGIiLCJlbWFpbCI6Im5vcnRleXBldGVyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicG5va2VuIiwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE2MTQ2NTUwMjR9.HHJsIJWZ5xuSZCYRGYHOKGf6cz8M71O65rqiiziktCc"
    // );

    var requestOptions = {
      method: "GET"
    };

    fetch("http://localhost:3001/user/food", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMeal(result);
      })
      .catch((error) => console.log("error", error));
  }, [meal]);

//   const findMeal = (id: any) => {
//     const item = meal.find((food: any) => food.id === id);

//     setEditMeal(item);
//     // console.log("editmeal", editMeal);
//     setWeekday(item.day);
//     setMealName(item.food);
//     setUpdateId(item._id);
//   };

  const deleteMeal = async (id: any) => {
    try {
      var requestOptions = {
        method: "DELETE",
      };

      fetch(`http://localhost:3001/user/food/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        // .catch((error) => console.log("error", error));

      meal.splice(
        meal.findIndex((food: any) => food.id === id),
        1
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AdminLayout title="Meals">
      <h1>Meals Available</h1>
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
            <div className="row">
              <div
                className="card col-sm-3"
                key={food.id}
                style={{ width: "18rem" }}
              >
                <p>Username: {food.user.username}</p>
                <p>Monday: {food.monday}</p>
                <p>Tuesday: {food.tuesday}</p>
                <p>Wednesday: {food.wednesday}</p>
                <p>Thursday: {food.thursday}</p>
                <p>Friday: {food.friday}</p>

                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#edit"
                  data-uid="1"
                  className="update btn btn-warning btn-sm"
                  //onClick={() => findMeal(food.id)}
                >
                  Edit User Menu
                </button>

                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#deletemeal"
                  data-uid="1"
                  className="delete btn btn-danger btn-sm"
                  value={food.id}
                  onClick={(e: any) => setDelID(e.target.value)}
                >
                  Delete User Menu
                </button>
              </div>
            </div>
          ))}
        </table>
      </div>
      <DeleteModal deleteMeal={deleteMeal} delId={delId} />
      {/* <UpdateModal
        mealName={mealName}
        weekday={weekday}
        setMealName={setMealName}
        setWeekday={setWeekday}
        updateMeal={updateMeal}
        updateId={updateId}
      /> */}
    </AdminLayout>
  );
}

export default meals;
