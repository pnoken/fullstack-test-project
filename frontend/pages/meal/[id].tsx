import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

function edit() {
  const router = useRouter();
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [meal, setMeal] = useState<any>([]);
  const [user, setUser] = useState<any>([]);

  let lStorage: any = window.localStorage.getItem("auth");
  if (lStorage) {
    lStorage = JSON.parse(lStorage);
    console.log("local", lStorage);
    setUser(lStorage);
  }

  var requestOptions = {
    method: "GET",
  };

  fetch("http://localhost:3001/admin/food", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setMeal(result), console.log("meal", result);
    })
    .catch((error) => console.log("error", error));

  const updateMenu = () => {
    var myHeaders = new Headers();
    myHeaders.append("auth-token", user.auth);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:3001/user/food", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        router.push("/meal/success"), console.log(result);
      })
      .catch((error) => {
        alert("Sorry Could not add meal, Try again"),
          console.log("error", error);
      });
  };
  return (
    <Layout title="Select A Meal (One Per Day)">
      <form className="container" onSubmit={updateMenu}>
        <h1>Select a meal (1 per day)</h1>

        <h1>Monday</h1>
        <select onChange={(e) => setMonday(e.target.value)}>
          {meal
            .filter((food: any) => food.day === "monday")
            .map((day: any) => (
              <option value={day.day} className="text-capitalize">
                {day.food}
              </option>
            ))}
        </select>

        <h1>Tuesday</h1>
        <select onChange={(e) => setTuesday(e.target.value)}>
          {meal
            .filter((food: any) => food.day === "tuesday")
            .map((day: any) => (
              <option value={day.day} className="text-capitalize">
                {day.food}
              </option>
            ))}
        </select>

        <h1>Wednesday</h1>
        <select onChange={(e) => setWednesday(e.target.value)}>
          {meal
            .filter((food: any) => food.day === "wednesday")
            .map((day: any) => (
              <option value={day.day} className="text-capitalize">
                {day.food}
              </option>
            ))}
        </select>

        <h1>Thursday</h1>
        <select onChange={(e) => setThursday(e.target.value)}>
          {meal
            .filter((food: any) => food.day === "thursday")
            .map((day: any) => (
              <option value={day.day} className="text-capitalize">
                {day.food}
              </option>
            ))}
        </select>

        <h1>Friday</h1>
        <select onChange={(e) => setFriday(e.target.value)}>
          {meal
            .filter((food: any) => food.day === "friday")
            .map((day: any) => (
              <option value={day.day} className="text-capitalize">
                {day.food}
              </option>
            ))}
        </select>

        <div>
          <button className="btn btn-primary">Add to Menu</button>
        </div>
      </form>
    </Layout>
  );
}

export default edit;
