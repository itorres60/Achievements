import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, deployed, github, index } = currentPhoto;
  const modalStyle = {
    width: '800  px'
  };

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img style={modalStyle}
          src={require(`../../assets/large/${index}.jpg`).default}
          alt="current category"
        />
        <div>
        <span>Deployed Site: </span><a href={deployed} target="blank">{deployed}</a>
        </div>
        <div>
        <span>Github: </span><a href={github} target="blank">{github}</a>
        </div>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
