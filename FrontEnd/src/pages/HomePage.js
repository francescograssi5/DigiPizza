import { Carousel } from "react-bootstrap";
import { useState } from "react";
import car1 from "../carousel1.png";
import car2 from "../carousel2.png";
import car3 from "../carousel3.png";
import homeless from "../homeless.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import InstagramCards from "../components/InstagramCards";
import Orari from "../components/Orari";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 opacity" src={car1} alt="First slide" />
          <Carousel.Caption className="caption">
            <h3 className="carouselFont">DigiPizza dal 1999</h3>
            <a href="http://localhost:3000/menu/">
              <input
                type="button"
                value="Scopri il nostro Menù"
                className="btn btn-lg shadow rounded bgButton mb-5 carouselFont"
              />
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity"
            src={car2}
            alt="Second slide"
          />
          <Carousel.Caption className="caption">
            <h3 className="carouselFont">Qualità, passione e amore.</h3>

            <a href="http://localhost:3000/chisiamo/">
              <input
                type="button"
                value="La nostra storia"
                className="btn btn-lg shadow rounded bgButton mb-5 carouselFont"
              />
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 opacity" src={car3} alt="Third slide" />
          <Carousel.Caption className="caption">
            <h3 className="carouselFont">Prenota la tua pizza</h3>
            <button className="btn btn-lg bgButton shadow rounded mb-5 carouselFont">
              <BsFillTelephoneFill className="mb-1" /> 0998807774
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="p-5 row justify-content-center backg2">
        <div className="text-center w-100 fs-2 col-12 pizzaFont ">
          DigiPizza e la pizza ad alta
          <span className="text-success p-2 text-center">sostenibilità</span>
        </div>
        <div className="text-center rounded py-4 col-12 w-100 ingredientFont ">
          Ci sono le pizzerie più sostenibili del mondo, nella città di
          Massafra, che sulla transizione ecologica ha costruito una struttura
          intera. A partire dalla scelta degli ingredienti, rigorosamente a km 0
          e continuando con la scelta di tutto quello che circonda la vendita
          come il packaging effettuato rigorosamente con materiali riciclati e
          sostenibili.
        </div>
      </div>
      <hr className="dotted "></hr>
      <Orari />
      <hr className="dotted"></hr>

      <div>
        <img
          className="d-block w-100 opacity"
          src={homeless}
          alt="homelessProject"
        />
      </div>
      <InstagramCards />
    </>
  );
};

export default HomePage;
