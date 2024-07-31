import Carousel from "react-bootstrap/Carousel";
import imagemUm from "../../assets/tempus fugit.jpg";
import imagemDois from "../../assets/grito.jpg";
import imagemTres from "../../assets/danton.jpg";
import Button from "react-bootstrap/Button";
import "./styles.css";

function CarouselHome() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #E67926;
      font-weight: 700;
      color: white;
      width:250px;
      height:50px;
    }
    .btn-flat:hover {
      background-color: #cc6920;
    }
    .btn-flat:active {
      background-color: #cc6920;
    }
  `}
      </style>

      <section>
        <div className="">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-10 arenart-carousel-img "
                src={imagemUm}
                alt="First slide"
              />

              <Carousel.Caption>
                <h3 className="carousel-caption-info">
                  Tempus Fugit - Temporada 2024
                </h3>
                <div className="d-flex justify-content-center">
                  <div className="principal-btn "> Saiba Mais</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-10 arenart-carousel-img"
                src={imagemDois}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-info">
                  Participação no FETESP 2023
                </h3>
                <div className="d-flex justify-content-center">
                  <div className="principal-btn "> Saiba Mais</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-10 arenart-carousel-img"
                src={imagemTres}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-info">Festa de 30 anos</h3>
                <div className="d-flex justify-content-center">
                  <div className="principal-btn "> Saiba Mais</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default CarouselHome;
<Button variant="flat">Saiba Mais</Button>;
