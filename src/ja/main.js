import React, { useState } from "react";
import "../css/main.css";
import Modal from "./modal";

const YourComponent = () => {
  function altitude() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <React.Fragment>
        <div className="startBox" onClick={openModal}>모달팝업</div>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
        </Modal>
      </React.Fragment>
    );
  }
  return (
    <div className="main">
      <div className="header">여백</div>
      <div className="middle">
        <div className="visual">
          <div >{altitude()}</div>
        </div>
        <div className="user">
          <div className="menu">
            <button className="Category">Category1</button>
            <h2 className="itemsC1">
              {/* Category 1 items */}
              <button className="item">item 1</button>
              <button className="item">item 2</button>
              <button className="item">item 3</button>
              <button className="item">item 4</button>
            </h2>
            <button className="Category">Category2</button>
            <h2 className="itemsC2">
              {/* Category 2 items */}
              <button className="item">item 1</button>
              <button className="item">item 2</button>
              <button className="item">item 3</button>
              <button className="item">item 4</button>
            </h2>{" "}
            <button className="Category">Category3</button>
            <h2 className="itemsC3">
              {/* Category 3 items */}
              <button className="item">item 1</button>
              <button className="item">item 2</button>
              <button className="item">item 3</button>
              <button className="item">item 4</button>
            </h2>
          </div>
          <div className="estimate">견적</div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
