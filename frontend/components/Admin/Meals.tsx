//import React, {useState, useEffect} from 'react'

export default function Meals({ weekday, food }: any) {
  return (
    <div>
      <tbody>
        <tr id="d1">
          <td id="f1">{weekday}</td>
          <td id="f1">{food}</td>
          <td>
            <button
              type="button"
              data-toggle="modal"
              data-target="#edit"
              data-uid="1"
              className="update btn btn-warning btn-sm"
              //onClick={() => findStu(stu._id)}
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
              //value={food._id}
              //onClick={(e: any) => setDelID(e.target.value)}
            >
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
}
