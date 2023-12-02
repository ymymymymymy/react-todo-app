import React from "react";
import { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length !== 0) {
      setTaskList([
        ...taskList,
        {
          id: taskList.length,
          text: inputText,
          checked: false,
        },
      ]);
      setInputText("");
      console.log(taskList);
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit} className="flex justify-center mb-10">
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
          className="bg-white"
        />
        <button className="mx-1">
          <i className="fa-solid fa-square-plus fa-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
