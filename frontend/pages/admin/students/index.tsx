import React, { useState, useEffect } from "react";
import Add from "../../../components/Admin/Students/Add";
import AdminLayout from "../../../components/AdminLayout";

export default function students() {
  const [students, setStudents] = useState<any>([]);
  const [editStu, setEditStu] = useState<any>([]);
  const [delId, setDelID] = useState<any>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState<number>();
  const [updateId, setUpdateId] = useState<any>();

  const updateStu = async (id: any) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: userName,
        age: age,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };

      fetch(`http://localhost:3001/user/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      alert("Could not update");
    }
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "auth-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMyYjIwMzA5YzUwMjYzZTBjNjA4ZGEiLCJpYXQiOjE2MTQwNzY1NzF9.m6mSj-39JQOopxvqvHMv9WAwu-ibjIsahcCSRvSKJSw"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch("http://localhost:3001/admin/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setStudents(result), console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, [students]);

  const findStu = (id: any) => {
    const item = students.find((stu: any) => stu._id === id);

    setEditStu(item);
    console.log("editstu", editStu);
    setFirstName(item.first_name);
    setLastName(item.last_name);
    setUserName(item.username);
    setAge(item.age);
    setUpdateId(item._id);
  };

  const deleteStu = async (id: any) => {
    try {
      var requestOptions = {
        method: "DELETE",
      };

      fetch(`http://localhost:3001/user/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      students.splice(
        students.findIndex((stu: any) => stu._id === id),
        1
      );
    } catch (error) {
      alert("Could not delete");
    }
  };

  return (
    <>
      <AdminLayout title="students">
        <span>
          <h1>Student List</h1>
          <button
            className="btn btn-primary float-right"
            type="button"
            data-toggle="modal"
            data-target="#addstudent"
            data-uid="1"
          >
            Add Student
          </button>
        </span>
        <Add />
        <div className="row">
          <table className="table table-hover table-responsive">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            {students.map((stu: any) => (
              <tbody>
                <tr id="d1">
                  <td>{stu._id}</td>
                  <td id="f1">{stu.first_name}</td>
                  <td id="l1">{stu.last_name}</td>
                  <td id="m1">{stu.username}</td>
                  <td id="m1">{stu.age}</td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#edit"
                      data-uid="1"
                      className="update btn btn-warning btn-sm"
                      onClick={() => findStu(stu._id)}
                    >
                      <span className="glyphicon glyphicon-pencil"></span>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#delete"
                      data-uid="1"
                      className="delete btn btn-danger btn-sm"
                      value={stu._id}
                      onClick={(e: any) => setDelID(e.target.value)}
                    >
                      <span className="glyphicon glyphicon-trash"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div id="edit" className="modal fade" role="dialog">
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
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => updateStu(updateId)}
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
        <div id="delete" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
                <h4 className="modal-title">Delete Data</h4>
              </div>
              <div className="modal-body">
                <strong>Are you sure you want to delete this data?</strong>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="del"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => deleteStu(delId)}
                >
                  Delete
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
      </AdminLayout>
    </>
  );
}
