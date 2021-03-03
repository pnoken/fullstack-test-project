import React from "react";

export default function DeleteModal({ delId }: any) {
  const deleteMeal = async () => {
    try {
      var requestOptions = {
        method: "DELETE",
      };

      fetch(`http://localhost:3001/user/food/${delId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      alert("Could not delete");
    }
  };
  return (
    <div id="deletemeal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <strong>
              Are you sure you want to delete your entire chosen meal?
            </strong>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              id="del"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={deleteMeal}
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
  );
}
