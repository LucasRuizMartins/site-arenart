import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import santo from "../../../assets/pecas/o que eu vi/o-que-eu-vi.png";
export function OqueEuVi() {
  return (
    <>
      <Header />
      <div className="background-oque-eu-vi">
        <Image className="background-top-oque-eu-vi" src={santo}></Image>

        <Row>
          <Col className="text-center "></Col>
        </Row>
        <div className="divisor">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#38b9ff"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#38b9ff"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#38b9ff"
            ></path>
          </svg>
        </div>

        <div className="background-oque-eu-vi-2">
          <Container className="">
            <Row>
              <Col
                xs={9}
                md={6}
                className="mt-5 order-1 order-md-1 order-xl-1 ms-5"
              >
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2008-o-que-eu-vi-o-que-nos-veremos/duda-aviao.JPG?raw=true"
                  }
                  fluid
                ></Image>
              </Col>
              <Col
                xs={12}
                md={5}
                className="mt-5 order-2 order-md-1 order-xl-1"
              >
                <h2>
                  Por que sonham os homens? O sonho é o ensaio da realização. É
                  o esboço... Rascunho da ação. Quem não sonha, apenas
                  sobrevive...
                </h2>
                <p className="mt-4 font-monospace ">
                  {" "}
                  <strong>
                    Os jovens da Cia. de Teatro T&P experimentam a linguagem que
                    permeia o mundo clownesco para reinventar a história de
                    Santos Dumont e seu desejo de voar. Sua figura romântica
                    cruzava os céus de Paris, em máquinas mais-pesadas-que-o-ar,
                    anunciando uma nova era de grandes mudanças. Abrindo o
                    caminho, provando a todos que era possível sonhar, e voar
                    como os pássaros, Santos-Dumont inspirou toda uma geração de
                    artistas, cientistas, inventores e espíritos aventureiros.
                  </strong>{" "}
                </p>
              </Col>
            </Row>

            <Row>
              <Col
                xs={12}
                md={6}
                className="mt-5 order-2 order-md-1 order-xl-1"
              >
                <p className="mt-4 font-monospace">
                  <strong>
                    Outros podem reivindicar a "paternidade" do avião, mas
                    dentre todos, apenas Santos-Dumont chorou e protestou quando
                    este "filho" foi levado à guerra, usado como arma de morte e
                    destruição em massa. Outros podem reivindicar o mérito da
                    invenção do avião, mas dentre todos, era Santos-Dumont que
                    tinha o sonho mais nobre e humanitário. Diferente de outros,
                    assim chamados, inventores, Santos-Dumont nunca fez questão
                    de deter direitos intelectuais sobre suas obras. Acreditava
                    que o conhecimento deveria pertencer à humanidade.
                    Acreditava que o avião serviria para aproximar povos e
                    terras distantes, compartilhar cultura e conhecimento,
                    promover a paz.
                  </strong>
                </p>
                <p className="mt-4 font-monospace">
                  <strong>
                    Um homem que buscou o conhecimento com uma sede imensa e que
                    conquistou a construção de seu conhecimento, construindo
                    objetos voadores. Balões dirigíveis, planadores, aviões. Um
                    verdadeiro transformador da educação, onde todo o
                    conhecimento adquirido era revitalizado em uma leitura
                    própria e formatado em inventos e mais inventos...
                  </strong>
                </p>
              </Col>
              <Col
                xs={12}
                md={6}
                className="mt-5 order-1 order-md-2 order-xl-1"
              >
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2008-o-que-eu-vi-o-que-nos-veremos/grupo1.JPG?raw=true"
                  }
                  fluid
                ></Image>
              </Col>
            </Row>
          </Container>
        </div>
        <svg viewBox="0 0 1440 320" className="mt90- divisor">
          <path
            fill="#ffffffbf"
            fill-opacity="1"
            d="M0,192L30,197.3C60,203,120,213,180,218.7C240,224,300,224,360,240C420,256,480,288,540,304C600,320,660,320,720,293.3C780,267,840,213,900,181.3C960,149,1020,139,1080,149.3C1140,160,1200,192,1260,186.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="background-oque-eu-vi-3">
        <Container className="">
          <Row>
            <Col xs={1} md={1} className="order-1 order-md-2 order-xl-1"></Col>

            <Row>
              <Col xs={12} md={7} className="order-1 order-md-1 order-xl-1">
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2008-o-que-eu-vi-o-que-nos-veremos/14bis.JPG?raw=true"
                  }
                  fluid
                ></Image>
              </Col>
              <Col xs={12} md={5} className="order-2 order-md-1 order-xl-1">
                <p className=" font-monospace">
                  Estudar então, também para Santos Dumont, era absorver idéias
                  dos outros, revitalizá-las e transformá-las em um novo
                  conjunto de idéias próprias. Era fazer o saber acontecer. Era
                  trabalhar. Não apenas o trabalho braçal, mas mental, sensível.
                  Era sorver as essências mais fundamentais para vivermos como
                  cidadãos livres. O conhecimento então, era sinônimo de
                  liberdade. Uma engrenagem inesgotável, e só as pessoas que
                  assim aprendiam, poderiam saber como elaborar novos caminhos
                  saudáveis e corretos para as conquistas humanas. Santos Dumont
                  foi um grande estudioso, desde a juventude até o final de sua
                  vida. E foi um transformador do que estudou em novas leituras,
                  revitalizando o conhecimento.
                </p>
              </Col>
              <Col xs={12} md={0} className="mt-5"></Col>
            </Row>
          </Row>

          <Row className="">
            <Col
              xs={12}
              md={12}
              className="d-flex justify-content-center align-items-center"
            ></Col>
          </Row>
          <Row className="">
            <Col xs={12} md={5} xl={12} className="mt-5">
              <p className="font-monospace"></p>
            </Col>
          </Row>

          <Row>
            <Col
              xs={1}
              md={2}
              className="mt-1 order-1 order-md-2 order-xl-1"
            ></Col>
          </Row>
        </Container>
        <Row>
          <Col xs={12} md={2}></Col>
          <Col xs={12} md={10}>
            <Image
              src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2008-o-que-eu-vi-o-que-nos-veremos/paredao.jpg?raw=true"
              fluid
            ></Image>
          </Col>
        </Row>
      </div>
      <div>
        <svg
      
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M4200,0H0V30H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,30h277Z"
            fill="#e2f4fb"
          ></path>
        </svg>
      </div>
      <Row className="">
        <Col className="text-center mb-5 mt50-">
          <div className="">
            <h3>Elenco - O que eu vi o que nós veremos </h3>
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
              actor.temporadas.includes("2008 - O que eu vi, o que nós veremos")
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

export default OqueEuVi;
