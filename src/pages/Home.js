import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../components/Task";
import { getTasks, createTask, deleteTask, updateTask } from "./store/tasks";
import { setTasks } from "./store/tasks/actions";
import Form from "../components/Form";
import "./Home.css";
function Home() {
  const [error, setError] = useState(null);
  const [isTask, setIsTask] = useState(true);
  const [editableTask, setEditableTask] = useState(null);
  const dispatch = useDispatch();
  const {
    user,
    tasks: { tasks },
  } = useSelector((state) => state);

  React.useEffect(async () => {
    try {
      let { data } = await getTasks(user.company_id);
      setError(data.status == "error" ? data.message : null);
      dispatch(setTasks(data.results));
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleClick = () => {
    setIsTask((bool) => !bool);
    editableTask && setEditableTask(null);
  };

  const handleClickForm = () => {
    setIsTask(true);
  };
  const handleClickEdit = () => {
    setIsTask(false);
  };
  const onSubmit = async (values) => {
    let {
      data: { results, status, message },
    } = await createTask(
      { ...values, assigned_user: user.profile.user_id },
      user.company_id
    );
    setError(status == "error" ? message : null);
    if (status == "error") return;
    dispatch(setTasks([...tasks, results]));
    handleClick();
  };
  const handleEditTask = (task) => {
    setEditableTask(task);
    handleClickEdit();
  };
  const onEdit = async (values) => {
    let {
      data: { results, status, message },
    } = await updateTask(
      { ...values, assigned_user: user.profile.user_id },
      user.company_id
    );
    setError(status == "error" ? message : null);
    if (status == "error") return;
    let updatedTasks = tasks.map((task) => {
      if (task.id == values.id) {
        return { ...task, ...values };
      }
      return task;
    });
    dispatch(setTasks(updatedTasks));
    handleClick();
  };

  const onDelete = async (values) => {
    let data = await deleteTask(values.id, user.company_id);
    dispatch(setTasks(tasks.filter(({ id }) => id != values.id)));
    handleClick();
  };
  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div
        className="mt-5 d-flex justify-content-center position-absolute"
        style={{ left: "195px" }}
      >
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-header w-100 d-flex justify-content-between align-items-center m-0 p-0">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-uppercase font-weight-bold m-0 mx-3">Tasks</p>{" "}
              <span>{tasks && tasks.length}</span>
            </div>
            <button className="btn" onClick={handleClick}>
              +
            </button>
          </div>
          <div className={`card-body ${isTask ? "" : "bgcolor"}`}>
            {isTask ? (
              tasks &&
              tasks.map((task, i) => {
                return (
                  <Task key={i} data={task} handleEditTask={handleEditTask} />
                );
              })
            ) : (
              <Form
                user={user}
                onSubmit={onSubmit}
                onEdit={onEdit}
                handleClickForm={handleClickForm}
                editableTask={editableTask}
                onDelete={onDelete}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
