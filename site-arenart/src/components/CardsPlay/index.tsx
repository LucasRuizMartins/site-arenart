import { Col, Container, Row, Image } from "react-bootstrap";
import "./styles.css";
import { NavLink } from "react-router-dom";

type Props = {
  text: string;
  imgUrl: string;
  title: string;
  year: string;
  path: string;
};

function CardsPlay({ text, imgUrl, title, year, path }: Props) {
  return (
    <Container className="cards-play">
      <Row className="align-items-center mt-5">
        <Col xs={12} md={6}>
          <NavLink to={path}>
            <Image src={imgUrl} fluid className="img-cards-play" />
          </NavLink>
        </Col>
        <Col xs={12} md={6}>
          <NavLink to={path} className="d-flex cardsplay-textarea">
            <h2 className="me-2">{year}</h2>
            <h2>{title}</h2>
          </NavLink>
          <p className="cardsplay-text">{text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CardsPlay;
