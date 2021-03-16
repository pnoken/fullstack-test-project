import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginModal({setIsLoggedIn}: any) {
  //const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    try {
      await fetch("http://localhost:3001/auth/login", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (result.includes("Email or password is wrong" || "Invalid Password")){
            alert("Invalid Credentials");
            return
          } else {
          window.localStorage.setItem("auth", result)
        }
        }).then(() => {
          setIsLoggedIn(true);
        })
        
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div id="login" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <input
              id="em"
              type="email"
              className="form-control"
              name="email"
              value={email}
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              id="pw"
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
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
              Login
            </button>
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
