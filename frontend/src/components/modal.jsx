import React from "react";
import { useState } from "react";

function Modal({ active, setActive }) {
  if (!active) return null;

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div
        className="modal-inside"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        FFFFFFF
        <button>++++</button>
      </div>
    </div>
  );
}

export default Modal;

