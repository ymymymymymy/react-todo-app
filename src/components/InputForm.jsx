import React from "react";
import { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length !== 0) {
      setTaskList([
        ...taskList, //スプレット構文で中身を展開
        {
          id: taskList.length,
          text: inputText,
          checked: false,
        },
        //展開後、配列内に新しくオブジェクトを追加
      ]);
      setInputText("");
      console.log(taskList);
      console.log(...taskList);
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  return (
    <div className="inputForm">
      <p className="flex justify-center mb-2 text-lg font-bold">
        タスクを入力してください。(20文字以内)
      </p>
      <form onSubmit={handleSubmit} className="flex justify-center mb-3">
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
          className="bg-white"
          maxlength="20"
        />
        <button className="mx-1">
          <i className="fa-solid fa-square-plus fa-lg"></i>
        </button>
      </form>
      <span className="flex justify-center mb-10">
        現在残っているタスク数：
        {taskList.filter((task) => task.completed === false).length}
      </span>
    </div>
  );
};

export default InputForm;
