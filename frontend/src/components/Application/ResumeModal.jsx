import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <>
    <Navbar/>
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="resume" />
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ResumeModal;
