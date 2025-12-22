import React from "react";
// import { useState } from "react";
import "./modal.css";


function ModalCreate({ active, setActive, updateTodoList}) {
  if (!active) return null;
  function handleSubmit() {
    setActive(false);
    const el = document.getElementById("taskNameInp");

    // Get current todoList from localStorage
    const currentList = JSON.parse(localStorage.getItem("todoList")) || [];

    // Add new item
    currentList.push(el.value);

    // Save back to localStorage
    localStorage.setItem("todoList", JSON.stringify(currentList));

    // Update the global todoList variable and trigger re-render
    if (updateTodoList) {
      updateTodoList(currentList);
    }

    return console.log(currentList);
  }
  return (
    <div id="modal">
      <div id="modalInside" className="col-lg-8 col-sm-10 h-50">
        <div id="modalHeader">
          <h1>Create task</h1>
          <i className="bi bi-x-lg" onClick={() => setActive(false)}></i>
        </div>

        <div id="taskImpContent">
          <div id="taskName">
            <h2>Task name</h2>
            <input type="text" id="taskNameInp" />
            <label htmlFor="taskNameInp">30 characters max</label>
          </div>
          <div id="taskDesc">
            <h2>Task description</h2>
            <input type="text" id="taskDescInp" />
            <label htmlFor="taskDescInp">150 characters max</label>
          </div>
          <input type="submit" onClick={handleSubmit} text="Create" />
        </div>
        {/* onClick={(e) => e.stopPropagation()} prevent closing when clicking inside */}
      </div>
    </div>
  );
}

export default ModalCreate;
