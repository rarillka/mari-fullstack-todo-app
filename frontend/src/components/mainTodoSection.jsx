  import React from "react";
  import { useState } from "react";
  import Modal from "./modal";

  function MainSection() {
    const [modalActive, setModalActive] = useState(true) 
    return (
      <section>
        <h2 className="text-with-shadow">
          Your List<i className="bi bi-pencil-square"></i>
        </h2>
        <Modal active={modalActive} setActive={setModalActive}/>
      </section>
    );
  }

  export default MainSection;
