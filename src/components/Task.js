import React from "react";
import { FaPen, FaBell, FaCheck } from "react-icons/fa";
import avatar from "../asset/img/avatar.png";

function Task({ data: task, handleEditTask }) {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{
              height: "3rem",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <img className="w-100 h-100" src={avatar} alt="img" />
          </div>
          <div className="ml-3">
            <h6 className="m-0 font-weight-bold">{task.task_msg}</h6>
            <small className="text-danger">{task.task_date}</small>
          </div>
        </div>
        <div>
          <button className="btn border" onClick={() => handleEditTask(task)}>
            <FaPen size="12" />
          </button>
          <div className="btn-group ml-2" data-toggle="buttons">
            <button className="btn border">
              <FaBell size="12" />
            </button>
            <button className="btn border">
              <FaCheck size="12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;
