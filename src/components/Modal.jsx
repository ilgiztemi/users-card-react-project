import React from "react";

const Modal = ({ onCloseModal, onNewUser }) => {
  return (
    <div className="inputs">
      <form action="" onSubmit={(e) => onNewUser(e)}>
        <input type="text" name="firstname" placeholder="FirstName" />
        <input type="text" name="lastname" placeholder="LastName" />
        <input type="email" name="email" placeholder="email" />
        <input type="url" name="url" placeholder="Avatar url" />
        <button>Submit</button>
      </form>
      <button onClick={onCloseModal}>X</button>
    </div>
  );
};

export default Modal;
