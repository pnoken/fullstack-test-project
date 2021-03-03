import React from 'react'

export default function DeleteModal({ deleteMeal, delId }: any) {
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
                <strong>Are you sure you want to delete this meal?</strong>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="del"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => deleteMeal(delId)}
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
    )
}
