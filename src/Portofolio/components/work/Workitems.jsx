import React, { useState } from "react";
// import { descriptionProject } from "./Data";
import ModalWork from "./ModalWork";

const WorkItems = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <a onClick={handleOpenModal} className="work__button">
          View more <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        {/* <button onClick={handleOpenModal}>Buka Modal</button> */}
        <ModalWork isOpen={modalOpen} item={item} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default WorkItems;
