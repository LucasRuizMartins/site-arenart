import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function Clarao() {
  return (
    <>
      <Header />

      <h1 className="text-center mt-4">Clarão nas estrelas</h1>
      <div className="custom-shape-divider-top-1724794470">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="background-clarao mtt-1">
        <Container className="">
          <Row>
            <Col className="text-center mb-4 mt-5"></Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2018-clarao-nas-estrelas/clarao.jpg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-5">
              <p>
                Vladimir Capella foi um dos maiores encenadores do teatro
                infanto juvenil brasileiro, mas morreu pobre e esquecido, num
                retrato comum da desvalorização que a arte e a cultura têm
                experimentado o país nos últimos tempos. Clarão nas Estrelas foi
                o seu décimo quarto espetáculo, esse foi reeditado em 2017 pela
                jovem companhia de teatro Tal&Pá, em seu 23 aniversário.{" "}
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
              <h2>A eternidade em desencanto</h2>

              <p>
                Na montagem do grupo, não apenas o conto de fadas é encenado: em
                diversos recortes, a companhia mostra o desencanto do escritor
                com o teatro e o questionamento dos próprios atores sobre a
                viabilidade de sua arte.
              </p>
              <p className="mt-4">
                Capella constrói o enredo ao modo dos contos de fada, mas com
                tonalidade levemente trágica. Desenha um príncipe com traços de
                Hamlet. "Clarão nas Estrelas" faz um comentário "sobre vários
                tipos possíveis de amor, a paixão não é o mais importante".
                "Clarão nas Estrelas" é "uma fábula antinaturalista" que
                valoriza a tragédia. Como uma sombra triste, o reino do príncipe
                submerge. A maldição do herói é ter se transformado em pássaro.
                Seu lugar é a loucura, sem nunca haver certeza de chegar a um
                final feliz.
              </p>
            </Col>

            <Col xs={12} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2018-clarao-nas-estrelas/thauany.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col xs={10} md={6} className="mt-5 ">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2018-clarao-nas-estrelas/matheus-leticia.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4">
                {" "}
                Identidade e Autoconhecimento: conheça sua própria história para
                entender quem você é, as vezes nossas "maldições" antecedem
                nosso nascimento
              </p>
              <p className="mt-4">
                Amor e Sacrifício: O amor é apresentado como uma força curativa,
                mas também complexa e perigosa.O Amor que cura pode também
                causar dor...
              </p>
              <p className="mt-4">
                Destino e Maldição: As maldições que temos que lidar em nossa
                vida, muitas vezes não são mágias sobrenaturais, as vezes essas
                maldições podem ser simplesmente o peso das expectativas e dos
                desejos que outras pessoas depositaram em nós e isso pode nos
                moldar e transformar nossa vida.
              </p>
              <p className="mt-4"></p>
            </Col>
          </Row>

          <Row className="backgroun-chaobrasil">
            <Col
              xs={12}
              md={12}
              className="d-flex justify-content-center align-items-center"
            ></Col>
          </Row>
          <Row className="">
            <Col xs={12} md={12} xl={12} className="mt-5">
              <p className="">{"..."}</p>
            </Col>
            <Col xs={12} md={12} xl={12} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2018-clarao-nas-estrelas/grupo.jpg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="">
        <div className="">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
              className="shape-fill-clarao"
            ></path>
          </svg>
        </div>
      </Row>

      <Row>
        <Col className="text-center mb-4">
          <div className="">
            <h3>Elenco - Clarão nas estrelas</h3>
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
              actor.temporadas.includes("2017 - Clarão nas estrelas")
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

export default Clarao;
