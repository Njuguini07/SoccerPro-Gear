import React from "react";
import { Carousel } from "react-bootstrap";


//Import Images
import img1 from '../assets /images/Carousel1.jpeg';
import img2 from '../assets /images/Carousel2.jpg';
import img3 from '../assets /images/Carousel3.jpeg';

const MyCarousel = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Unleash Your Game!</h3>
            <p>
              Discover high-quality soccer gear designed to elevate your
              performance on the field.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Gear Up for Victory!</h3>
            <p>
              Shop our wide selection of professional-grade soccer equipment for
              players of all levels.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Play Like a Pro!</h3>
            <p>
              Get the best in soccer shoes, balls, and training aids to enhance
              your skills and game day experience.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
