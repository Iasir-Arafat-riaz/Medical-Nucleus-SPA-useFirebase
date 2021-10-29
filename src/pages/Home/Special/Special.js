import React from "react";
import { Carousel } from "react-bootstrap";
import "./Special.css"

const Special = () => {
  return (
    <div className="special-div">
      <h1 className="text-center  m-5 commmon-services" ><b>Special Service</b></h1>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3 className="text-success">Mobile Clinic</h3>
          <br />
          <h4>Medic-Nucleus Medical Containers are modular steel structures that can be combined in various configurations depending on the requirements. Level I, Level II, and Level III Mobile Field Hospitals by Odulair combine mobile medical containers with tent shelters, enabling full mobile medical care to world governments, military branches, and peacekeeping organizations.</h4>
          <br />
          <h4>
          Mobile Field Hospitals manufactured by Honda also include the option of airborne structures that can be deployed by conventional military.
          </h4>
        </div>
        <div className="col-md-6 col-sm-12">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/VT0FZ0w/Mobile2.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-dark">Portable rolling Clinic </h3>
                <p className="text-dark">
                we make sure hospitality over the world
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/h81z2vr/Mobile-Hospital-3.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="text-dark">Mobile Clinic in Container</h3>
                <p className="text-dark">
                  We make sure everyone get our services rural or urban people
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/vvHb05w/Mobile-Hospital-5.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="text-dark ">Temporary Structure for treatment</h3>
                <p className="text-dark">We all are work for our nation </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Special;
