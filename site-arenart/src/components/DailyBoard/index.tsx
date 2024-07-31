import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import diarioDeBordo from "../../assets/video2.jpg";
import { Link } from "react-router-dom";
import "./styless.css"

function DailyBoard() {
  return (
    <Container>
      <Row>
        <Col xs={0} md={4}></Col>

        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <Link to={"https://github.com/LucasRuizMartins/arenart-site"} >
              <img src={diarioDeBordo} alt="" className="daily-card" />
            </Link>
            <div className="d-flex justify-content-center align-items-center">
              <p>Diario de Bordo 14/06/2024</p>
            </div>
          </div>
        </Col>

        <Col xs={0} md={4}></Col>
      </Row>
    </Container>
  );
}

export default DailyBoard;
