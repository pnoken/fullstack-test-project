import React, { useState} from 'react'

function Add() {
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
    age: age
  };

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
  };

  const submit = async () => {
    fetch("http://localhost:3001/auth/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    // router.push("/login");
  };

    return (
        <div id="addstudent" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <input
                  id="ln"
                  type="text"
                  className="form-control"
                  name="id"
                  value={userName}
                  placeholder="Username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <input
                  id="fn"
                  type="text"
                  className="form-control"
                  name="fname"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <input
                  id="mn"
                  type="text"
                  className="form-control"
                  name="lname"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <input
                  id="mn"
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  id="mn"
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  id="mn"
                  type="number"
                  className="form-control"
                  name="age"
                  value={age}
                  placeholder="Age"
                  onChange={(e: any) => {
                    setAge(e.target.value);
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
    )
}

export default Add
