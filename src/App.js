import React from "react";
import { useState } from "react";
import Title from "./components/Title";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <Title />
      <InputForm
        taskList={taskList}
        setTaskList={setTaskList}
        count={count}
        setCount={setCount}
      />
      <TodoList
        taskList={taskList}
        setTaskList={setTaskList}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default App;
