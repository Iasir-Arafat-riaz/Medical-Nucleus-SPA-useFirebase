import React from 'react';
import { Carousel } from 'react-bootstrap';

const Charity = () => {
    return (
        <div className="special-div">
        <h1 className="text-center  m-5 commmon-services"><b>Charity Programs for Children in Poverty</b></h1>
        <div className="row">
          
          <div className="col-md-6 col-sm-12">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/vxZt0zx/Providing-People-with-Disability-featured-834x556-1.gif"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 >Your Smile Our happiness </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/QHgBJHf/1018-img-2151-1200x0-85.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 >Medical Support For All</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/gJM4rPz/africa-feature.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 >Medic-Nucleus make sure FastAid</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" >
              <br />
            <h2 className="text-success">Charity</h2>
            <br />
            <h4>The cycle of poverty is an interconnected mix of factors that imprisons entire communities for generations. While it’s difficult to unwind every element of poverty, one thing stands out — health conditions and access to health care play a huge factor in a community’s poverty rate. Children in impoverished communities live without access to basic health necessities such as clean water and sanitation, ushering in preventable diseases or worse. Health issues often cause children to fall behind in school, and a lack of education leads the way for drug use, early pregnancy and gang affiliation..</h4>
            <br />
            <h4>
            We Work for People with disabilities have a variety of health issues throughout their lives that are more serious and complex than those of the general population
            </h4>
          </div>
        </div>
      </div>
    );
};

export default Charity;