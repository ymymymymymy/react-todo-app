import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleChecked = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: !task.checked,
          };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCount = (id) => {};

  return (
    <>
      <div className="todoList flex justify-center">
        <div className="todos">
          {taskList.map((task, index) => (
            <div
              className={`todo ${task.checked ? "checked" : ""}`}
              key={index}
            >
              <div className="todoText bg-white w-80 text-center mb-1">
                <span className="bg-white">{task.text}</span>
              </div>
              <div className="button">
                <button
                  onClick={() => {
                    handleChecked(task.id);
                    handleCount(task.id);
                  }}
                  className="mx-1"
                >
                  <i className="fa-solid fa-check fa-lg"></i>
                </button>
                <button
                  onClick={() => {
                    handleDelete(task.id);
                    handleCount(task.id);
                  }}
                  className="mx-1"
                >
                  <i className="fa-solid fa-trash fa-lg"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
