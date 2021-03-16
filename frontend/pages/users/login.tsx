import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";

function login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState<any>();
  const [profile, setProfile] = useState<any>();

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
          if (result.includes("Invalid Password")){
            alert("invalid Password");
            return
          }
          else {
            setAuth(result)
          } 
        })
        .catch((error) => alert(error));

      
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("auth", JSON.stringify(auth));
    
    let myHeaders2 = new Headers();
    myHeaders2.append("auth-token", auth);

    var requestOptions2 = {
      method: "GET",
      headers: myHeaders2,
    };

    fetch("http://localhost:3001/user/profile", requestOptions2)
      .then((response) => response.text())
      .then((result) => setProfile(result))
      .catch((error) => alert(error));

    if (profile != undefined) {
      window.localStorage.setItem("profile", profile);
      if (profile.user == "admin") {
        router.push("/admin");
      }
    }
  }, [submit]);

  return (
    <div>
      <Layout title="Login">
        <div>
          <div className="container">
            <br />
            <div className="jumbotron">
              <h1 className="display-4">Login</h1>
              <br />
              <input
                id="email"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <br />
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <button
                type="submit"
                id="send"
                className="btn btn-success"
                onClick={submit}
              >
                Login
              </button>
              <br />
              <p>
                Haven't signed up yet? {""}
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </p>
            </div>
            <br />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default login;
