import React, { useState } from "react";
import { FcCalendar } from "react-icons/fc";
import { BsFillClockFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./Form.css";
const timeArray = [
  { time: "12:00 AM", value: 0 },
  { time: "12:30 AM", value: 1800 },
  { time: "1:00 AM", value: 3600 },
  { time: "1:30 AM", value: 5400 },
  { time: "2:00 AM", value: 7200 },
  { time: "2:30 AM", value: 9000 },
  { time: "3:00 AM", value: 10800 },
  { time: "3:30 AM", value: 12600 },
  { time: "4:00 AM", value: 14400 },
  { time: "4:30 AM", value: 16200 },
  { time: "5:00 AM", value: 18000 },
  { time: "5:30 AM", value: 19800 },
  { time: "6:00 AM", value: 21600 },
  { time: "6:30 AM", value: 23400 },
  { time: "7:00 AM", value: 25200 },
  { time: "7:30 AM", value: 27000 },
  { time: "8:00 AM", value: 28800 },
  { time: "8:30 AM", value: 30600 },
  { time: "9:00 AM", value: 32400 },
  { time: "9:30 AM", value: 34200 },
  { time: "10:00 AM", value: 36000 },
  { time: "10:30 AM", value: 37800 },
  { time: "11:00 AM", value: 39600 },
  { time: "11:30 AM", value: 41400 },
  { time: "12:00 PM", value: 0 },
  { time: "12:30 PM", value: 1800 },
  { time: "1:00 PM", value: 3600 },
  { time: "1:30 PM", value: 5400 },
  { time: "2:00 PM", value: 7200 },
  { time: "2:30 PM", value: 9000 },
  { time: "3:00 PM", value: 10800 },
  { time: "3:30 PM", value: 12600 },
  { time: "4:00 PM", value: 14400 },
  { time: "4:30 PM", value: 16200 },
  { time: "5:00 PM", value: 18000 },
  { time: "5:30 PM", value: 19800 },
  { time: "6:00 PM", value: 21600 },
  { time: "6:30 PM", value: 23400 },
  { time: "7:00 PM", value: 25200 },
  { time: "7:30 PM", value: 27000 },
  { time: "8:00 PM", value: 28800 },
  { time: "8:30 PM", value: 30600 },
  { time: "9:00 PM", value: 32400 },
  { time: "9:30 PM", value: 34200 },
  { time: "10:00 PM", value: 36000 },
  { time: "10:30 PM", value: 37800 },
  { time: "11:00 PM", value: 39600 },
  { time: "11:30 PM", value: 41400 },
];
const Form = ({
  handleClickForm,
  onSubmit,
  user,
  editableTask,
  onEdit,
  onDelete,
}) => {
  const [startDate, setStartDate] = useState(
    editableTask ? new Date(editableTask?.task_date) : new Date()
  );
  const [time, setTime] = useState();
  const [timeValue, setTimeValue] = useState(0);
  const [task, setTask] = useState(editableTask ? editableTask.task_msg : "");
  const [show, setshow] = useState(false);

  let date = startDate.getDate();
  let Year = startDate.getFullYear();
  let Month = startDate.getMonth() + 1;
  if (date < 10) {
    date = `0${date}`;
  }
  if (Month < 10) {
    Month = `0${Month}`;
  }
  const fullDate = `${Year}-${Month}-${date}`;
  const timeZone = -startDate.getTimezoneOffset() * 60;

  React.useEffect(() => {
    setTime(
      timeArray.find((item) => item.value == editableTask?.task_time)?.time ??
        "12:00 AM"
    );
  }, [editableTask]);

  const handleSubmit = () => {
    let obj = {
      task_date: fullDate,
      task_time: timeValue,
      is_completed: 0,
      time_zone: timeZone,
      task_msg: task,
    };
    if (editableTask) return onEdit({ ...obj, id: editableTask.id });
    onSubmit(obj);
    setTask("");
  };
  const onTimeChange = (time, value) => {
    setshow(!show);
    setTime(time);
    setTimeValue(value);
  };

  const showTimeMenu = (e) => {
    setshow(!show);
  };

  return (
    <form className="row">
      <div className="mb-3 mt-2 col-12">
        <label htmlFor="taskdescription" className="form-label">
          Task Description
        </label>
        <input
          type="text"
          className="form-control"
          id="taskdescription"
          aria-describedby="emailHelp"
          value={task}
          onChange={({ target: { value } }) => setTask(value)}
        />
      </div>
      <div className="mb-3 col-6">
        <label htmlFor="date1" className="form-label">
          Date
        </label>
        <div className="d-flex">
          <span className="time-date-icon form-control d-flex justify-content-center align-items-center">
            <FcCalendar size={15} />
          </span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            className="form-control date-time-input"
          />
        </div>
      </div>
      <div className="mb-3 col-6">
        <label htmlFor="time1" className="form-label">
          Time
        </label>
        <div className="d-flex">
          <span className="time-date-icon form-control d-flex justify-content-center align-items-center">
            <BsFillClockFill />
          </span>
          <input
            className="form-control date-time-input time-input"
            value={time}
            onClick={showTimeMenu}
          />
          {show ? (
            <div className="time-container">
              <ul className="list">
                <li className="list-heading">Time</li>
                <div className="list-size">
                  {timeArray.map((time, index) => {
                    return (
                      <li
                        className="listing"
                        key={index}
                        onClick={() => onTimeChange(time.time, time.value)}
                      >
                        {time.time}
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="mb-3 mt-1 col-12">
        <label htmlFor="user" className="form-label">
          Assign Users
        </label>
        <input
          type="text"
          className="form-control"
          id="user"
          value={user.profile.first}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-1 mt-3 d-flex w-100">
        <div className="d-flex col-12 justify-content-between align-items-center">
          {editableTask && (
            <div>
              <button
                type="button"
                className="btn btn-light mr-3"
                onClick={() => onDelete(editableTask)}
              >
                Delete
              </button>
            </div>
          )}
          <div>
            <button
              type="button"
              className="btn btn-light mr-3"
              onClick={handleClickForm}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
