import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
//import Add from "../../components/Admin/Students/Add";

function Signup() {
  //const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = {
    first_name: firstName,
    last_name: lastName,
    username: userName,
    email: email,
    password: password,
    age: age,
  };

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
  };

  const submit = async () => {
    if (firstName.length < 1) {
      alert("Enter a valid firstname or last Name");
    }
    if (lastName.length < 1) {
      alert("Enter a valid firstname or last Name");
    }
    if (userName.length < 5) {
      alert("Username should be more than 6 characters");
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      alert("Please enter a valid email");
    }
    fetch("http://localhost:3001/auth/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.includes("Email already exists")) {
          alert("Email already exists");
        }
        if (result.includes("Username already exists")) {
          alert("Username already exists");
        } else {
          alert("Sign Up successful");
          //router.push("/login");
        }
      })

      .catch((error) => alert(error));
  };

  return (
    <Layout title={"Sign Up"}>
      <div>
        <div className="container">
          <br />
          <div className="jumbotron">
            <h1 className="display-4">Sign Up</h1>
            <br />
            <input
              id="name"
              type="name"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              id="name"
              type="name"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              id="username"
              className="form-control"
              placeholder="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <br />
            <input
              id="email"
              className="form-control"
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              id="pw"
              className="form-control"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <input
              id="name"
              className="form-control"
              placeholder="age"
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <br />
            <button
              type="submit"
              id="send"
              className="btn btn-success"
              onClick={submit}
            >
              Sign Up
            </button>
          </div>
          <br />
          <div id="messages"></div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
