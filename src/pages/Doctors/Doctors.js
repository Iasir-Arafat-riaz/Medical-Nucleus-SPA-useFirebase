import React from "react";
import "./Doctor.css";

const Doctors = () => {
  return (
    <div className="doctors">
      <div>
      <h1 className="text-center mt-4">MedicNucleus Have WorldClass Doctor's</h1>
      <div className="m-5 row">
        <div className="col-md-5 col-sm-12 col-12 single-dr ">
          <img
            className="dr-img"
            src="https://i.ibb.co/R9c7TyF/Dr-William.png"
            alt=""
          />
          <h3>Dr. William A. Abdu, M.D, M.S</h3>
          <p>
          He is a… More pioneer in the study and treatment of spine-related conditions. He hones surgery of the Spine, including Cervical, Thoracic and Lumbar Disorders
          </p>
        </div>
       
        <div className="col-md-5 col-sm-12 col-12  single-dr">
          <img
            className="dr-img"
            src="https://i.ibb.co/jy2N826/Fouad-Abbas.jpg"
            alt=""
          />
          <h3>Dr. Fouad. M. Abbas, M.D.</h3>
          <p>Division Head, Gynecologic Oncology Medic-Nucleus ... Fouad M. Abbas, M.D., is board-certified in gynecologic oncology. His subspecialty includes </p>
        </div>
        <div className="col-md-5 col-sm-12 col-12 single-dr ">
          <img
            className="dr-img"
            src="https://i.ibb.co/6mf8jb9/Dr-Sudhansu-Bhatacharya.jpg"
            alt=""
          />
          <h3>Dr. Sudhansu Bhattacharyya, MBBS, MS, MCH</h3>
          <p>About Doctor · Dr. Sudhansu Bhattacharyya is a cardiothoracic surgeon with 36+ years of experience. · After completing his MBBS, he pursued MS in general surgery</p>
        </div>
        <div className="col-md-5 col-sm-12 col-12 single-dr ">
          <img
            className="dr-img"
            src="https://i.ibb.co/cvhNBsW/Dr-Khalid.png"
            alt=""
          />
          <h3>Dr. Khalid Abbed, M.D.</h3>
          <p>Dr. Abbed came to Hartford HealthCare from the Yale School of Medicine where he was a professor of neurosurgery, Now he chief of spine surgery and clinical vice chairman of Medic-Nucleus</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Doctors;

//--------------------THANKS TO YOU FOR YOUR TIME AND SUPPORT---------------
