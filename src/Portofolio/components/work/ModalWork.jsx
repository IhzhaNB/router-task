import React from "react";
import "./modalWork.css";

const ModalWork = ({ item, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <i onClick={onClose} className="uil uil-times work__modal-close"></i>
          {/* <img src={item.image} alt="" className="work__img-modal" /> */}
          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-desc">{item.desc}</p>
          <p className="work__modal-info">Tools : {item.tools}</p>
          <p className="work__modal-info">
            Github :{<br />}
            {item?.github.map((git) => (
              <>
                <a
                  className="work__button-modal work__modal-link"
                  href={git.link}
                >
                  {git.title} {git.link}
                </a>
              </>
            ))}
          </p>
          <p className="work__modal-info">
            Demo :{" "}
            <a className="work__modal-link work__button-modal" href={item.demo}>
              {item.demo}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalWork;
