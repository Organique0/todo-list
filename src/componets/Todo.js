import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function deleteItem() {
    setHidden(true);
  }

  if (!hidden) {
    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={deleteItem} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    );
  } else {
    return;
  }
}

export default Todo;
