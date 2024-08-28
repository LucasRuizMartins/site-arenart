import Carousel from "react-bootstrap/Carousel";
import imagemUm from "../../assets/tempus fugit.jpg";
import Button from "react-bootstrap/Button";
import "./styles.css";
import { Link } from "react-router-dom";

function CarouselHome() {
  return (
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
              <Link to={"temporadas/tempus-fugit"} className="link-carousel">
                <h3 className="carousel-caption-info">
                  Tempus Fugit - Temporada 2024
                </h3>
                <div className="d-flex justify-content-center">
                  <div className="principal-btn arenart-btn "> Saiba Mais</div>
                </div>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-10 arenart-carousel-img"
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/20anos.jpg?raw=true"
              }
              alt="Second slide"
            />
            <Carousel.Caption>
              <Link to={"temporadas/tempus-fugit"} className="link-carousel">
                <h3 className="carousel-caption-info">Festa de 30 anos</h3>
                <div className="d-flex justify-content-center">
                  <div className="principal-btn  arenart-btn"> Saiba Mais</div>
                </div>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselHome;
<Button variant="flat">Saiba Mais</Button>;
