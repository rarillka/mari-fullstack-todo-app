import { useState, useRef, useEffect } from "react";
import ModalCreate from "./modal";

let todoList = [];
const savedTodoList = localStorage.getItem("todoList");
if (savedTodoList) {
  todoList = JSON.parse(savedTodoList);
}
const saveTodoListToStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function MainSection() {
  const MAX_LEN = 15;
  const editableRef = useRef(null);
  const [modalCreateActive, setModalCreateActive] = useState(false);

  const handleBeforeInput = (e) => {
    const el = editableRef.current;
    if (!el) return;

    const currentLength = el.innerText.length;

    // Allow deletions (Backspace, Delete)
    if (e.inputType?.startsWith("delete")) return;

    // Block typing / paste when limit reached
    if (currentLength >= MAX_LEN) {
      e.preventDefault();
    }
  };

  const handleInput = () => {
    const el = editableRef.current;
    if (!el) return;

    localStorage.setItem("my-key", el.innerText);
  };

  // Load from storage once
  useEffect(() => {
    editableRef.current.innerText = localStorage.getItem("my-key");
  }, []);
  // Add this state to trigger re-renders when todoList updates
  const [refresh, setRefresh] = useState(false);

  // Function to update and save todoList
  const updateTodoList = (newList) => {
    todoList = newList;
    localStorage.setItem("todoList", JSON.stringify(todoList));
    setRefresh(!refresh); // Trigger re-render
  };

  return (
    <section>
      <h2 className="text-with-shadow">
        <span
          ref={editableRef}
          contentEditable="plaintext-only"
          onBeforeInput={handleBeforeInput}
          onInput={handleInput}
        >
          Your List
        </span>
        <i className="bi bi-pencil-square"></i>
      </h2>
      <ul>
        {todoList.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <button onClick={() => setModalCreateActive(true)}>+</button>

      <ModalCreate
        active={modalCreateActive}
        setActive={setModalCreateActive}
        updateTodoList={updateTodoList}
      />
    </section>
  );
}

export default MainSection;
export { todoList };
