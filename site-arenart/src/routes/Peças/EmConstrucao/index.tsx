import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../../../components/Header";


export function EmConstrucao() {
  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col xs={2}></Col>
          <Col xs={8}>
            {" "}
            <h1> PÁGINA EM CONSTRUÇÃO</h1>
          </Col>

          <Col xs={2}></Col>
        </Row>
      </Container>
 
    </>
  );
}

export default EmConstrucao;
