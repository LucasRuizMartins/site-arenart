import { Col, Container, Row, Image } from "react-bootstrap";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { PlaysDTO } from "../../models/plays";

interface PlayProps {
  play:PlaysDTO;
}


function CardsPlay({play}: PlayProps) {
  return (
    <Container className="cards-play">
      <Row className="align-items-center mt-5">
        <Col xs={12} md={6}>
          <NavLink to={`${play.path}`}>
            <Image src={play.imgUrl} fluid className="img-cards-play" />
          </NavLink>
        </Col>
        <Col xs={12} md={6}>
          <NavLink to={play.path} className="d-flex cardsplay-textarea">
            <h2 className="me-2">{play.year.join(" - ")}</h2>
            <h2>{play.name}</h2>
          </NavLink>
          <p className="cardsplay-text">{play.shortDescription}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CardsPlay;
