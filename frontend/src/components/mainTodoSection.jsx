import { useState, useRef } from "react";
import Modal from "./modal";

function MainSection() {
  const MAX_LEN = 15;
  const editableRef = useRef(null);
  const [modalActive, setModalActive] = useState(true);

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

  return (
    <section>
      <h2 className="text-with-shadow">
        <span
          ref={editableRef}
          contentEditable="plaintext-only"
          onBeforeInput={handleBeforeInput}
        >
          Your List
        </span>
        <i className="bi bi-pencil-square"></i>
      </h2>

      <Modal active={modalActive} setActive={setModalActive} />
    </section>
  );
}

export default MainSection;
