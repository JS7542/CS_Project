import React, { useState } from "react";
import "../css/main1.css";
import Modal from "../component/modal";
import Bar from "../component/sideBar";
import Canvas3D from "../component/canvas";
import Calcuator from "../component/calculator";
import Topbar from "../component/topBar";

const YourComponent = () => {
  function Altitude() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

    return (
      <React.Fragment>
        <div className="startBox" onClick={openModal}>
          모달팝업
        </div>
        <Modal
          open={modalOpen}
          close={closeModal}
          header="Modal heading"
        ></Modal>
      </React.Fragment>
    );
  }

  return (
    <div className="main">
      <Topbar></Topbar>
      <Canvas3D></Canvas3D>
      <Bar></Bar>
      <Calcuator></Calcuator>
    </div>
  );
};

export default YourComponent;
