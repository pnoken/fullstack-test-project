import React from 'react'

export default function UpdateModal({ weekday, mealName, setWeekday, setMealName, updateMeal, updateId}: any) {
    return (
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
                  value={weekday}
                  placeholder="Username"
                  onChange={(e) => {
                    setWeekday(e.target.value);
                  }}
                />
                <input
                  id="fd"
                  type="text"
                  className="form-control"
                  name="fname"
                  value={mealName}
                  placeholder="First Name"
                  onChange={(e) => {
                    setMealName(e.target.value);
                  }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="up"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => updateMeal(updateId)}
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
    )
}
