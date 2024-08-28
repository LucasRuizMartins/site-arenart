import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import arvore from "../../../assets/pecas/tempus-fugit/arvore.jpeg";
import deserto from "../../../assets/pecas/tempus-fugit/deserto.jpg";
import bya from "../../../assets/pecas/tempus-fugit/bya01.jpeg";

import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function TempusFugit() {
  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col xs={12} md={5} className="mt-5">
            <Image src={arvore} fluid />
          </Col>
          <Col xs={0} md={1} className="mt-5"></Col>
          <Col xs={12} md={6} className="mt-5">
            <h1>Tempus Fugit</h1>
            <p>O Tempo Voa...</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} className="mt-5">
            <h3 className="mt-5"> Uma terra desabitada</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={12} md={6} className="mt-5">
            <Image src={deserto} fluid></Image>
          </Col>
          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>

        <Row className="mt-5">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h3>Como chegamos aqui</h3>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            style={{ order: 2 }}
            md={6}
            className="mt-1 d-flex justify-content-center align-items-center order-2 order-md-1"
          >
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium mollitia enim dolorum libero, repudiandae excepturi.
              Id, quis nobis, nisi soluta assumenda repudiandae illum pariatur
              quod rem libero necessitatibus, sunt laborum. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium mollitia enim dolorum libero, repudiandae excepturi.
              Id, quis nobis, nisi soluta assumenda repudiandae illum pariatur
              quod rem libero necessitatibus, sunt laborum.
            </p>
          </Col>
          <Col
            xs={10}
            md={6}
            style={{ order: 1 }}
            className="mt-1 order-1 order-md-2"
          >
            <Image src={bya} roundedCircle fluid></Image>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          ></Col>
        </Row>
      </Container>

      <Row>
        <Col className="text-center mb-4">
          <div className="elenco-desc-">
            <h3>Elenco</h3>
          </div>
        </Col>
      </Row>

      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="justify-content-center align-items-center">
          {actorService.playsSeason
            .slice()
            .filter((actor: ActorInfoDTO) =>
              actor.temporadas.includes("2024 - Tempus Fugit")
            )
            .map((actor: ActorInfoDTO) => (
              <Col
                xs="auto"
                key={actor.dataHora}
                className="d-flex justify-content-center mb-3"
              >
                <CardsActor
                  name={actor.nome}
                  imgUrl={actor.foto}
                  instagram={actor.instagram}
                  actor={actor}
                />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default TempusFugit;
