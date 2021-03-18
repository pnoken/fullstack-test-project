import React, { useState, useEffect } from "react";
import DeleteModal from "../../components/Meal/DeleteModal";
import UpdateModal from "../../components/Meal/UpdateModal";
import Layout from "../../components/Layout";
import AddMeal from "../../components/Meal/AddMeal";

function studentMeal() {
  const [meal, setMeal] = useState<any>([]);
  const [userId, setUserId] = useState<any>();
  const [added, setAdded] = useState<boolean>(false);

  useEffect(() => {
    let lStorage: any = window.localStorage.getItem("auth");
    if (lStorage) {
      lStorage = JSON.parse(lStorage);
      console.log("local", lStorage.user._id);
      setUserId(lStorage.user._id);
    }
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    const getMenu = async () => {
      await fetch(`http://localhost:3001/user/food/${userId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setMeal(result)
        })
        .catch((error) => console.log("error", error));
    };
    getMenu();
  }, [userId, added, meal]);

  return (
    <Layout title="Meals">
      <div className="container">
      <h2>Please Select a Meal (One Per Day)</h2>
      {meal != null ? (
        <div>
          <button
            type="button"
            data-toggle="modal"
            data-target="#editselection"
            data-uid="1"
            className="update btn btn-warning btn-sm"
          >
            Update Chosen Meal
          </button>

          <button
            type="button"
            data-toggle="modal"
            data-target="#deletemeal"
            data-uid="1"
            className="delete btn btn-danger btn-sm"
          >
            Delete Chosen Meals
          </button>
        </div>
      ) : (
        <div>
          <h3>No Meals Added</h3>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="modal"
          data-target="#addmeal"
          data-uid="1"
        >
          Add Meal
        </button>
        </div>
      )}

      <AddMeal meal={meal} setAdded={setAdded} />
      {meal == null ? (
        <></>
      ) : (
        <div className="row">
          <table className="table table-hover table-responsive">
            <thead>
              <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody key={meal.id}>
              <tr id="d1" className="text-capitalize">
                <td id="f1">{meal.monday}</td>
                <td id="f2">{meal.tuesday}</td>
                <td id="f1">{meal.wednesday}</td>
                <td id="f2">{meal.thursday}</td>
                <td id="f2">{meal.friday}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <DeleteModal delId={userId} />
      <UpdateModal />
      </div>
    </Layout>
  );
}

export default studentMeal;
