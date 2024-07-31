import Carousel from "react-bootstrap/Carousel";
import imagemUm from "../../assets/tempus fugit.jpg";
import imagemDois from "../../assets/grito.jpg";
import imagemTres from "../../assets/danton.jpg";
import { Container } from "react-bootstrap";

function CarouselHome() {
  return (
    <section>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-10 arenart-carousel-img"
              src={imagemUm}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3 className="carousel-caption-info">Tempus Fugit - Temporada 2024</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-10 arenart-carousel-img"
              src={imagemDois}
              alt="Second slide"
            />
            <Carousel.Caption>
            <h3 className="carousel-caption-info">Tempus Fugit - Temporada 2024</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-10 arenart-carousel-img"
              src={imagemTres}
              alt="Third slide"
            />
            <Carousel.Caption>
            <h3 className="carousel-caption-info">Tempus Fugit - Temporada 2024</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselHome;
