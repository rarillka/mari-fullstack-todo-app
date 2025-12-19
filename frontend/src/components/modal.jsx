import React from "react";
// import { useState } from "react";
import './modal.css'

function Modal({ active, setActive }) {
  if (!active) return null;

  return (
    <div id="modal">
      <div id="modalInside" className="col-lg-8 col-sm-10 h-50">
        <div id="modalHeader">
          <h1>Edit task</h1>
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
        </div>
        {/* onClick={(e) => e.stopPropagation()} prevent closing when clicking inside */}
      </div>
    </div>
  );
}

export default Modal;
