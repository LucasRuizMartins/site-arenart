import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import zumbi from "../../../assets/pecas/zumbi/zumbi.png";

export function Zumbi() {
  return (
    <>
      <Header />
      <div className="background-zumbi">
        <Image className="background-top-zumbi " src={zumbi}></Image>
      </div>
      <Row>
        <Col className="text-center "></Col>
      </Row>
      <div className="divisor">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#dc8c29"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".35"
            fill="#375f21"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            opacity=".1"
            fill="#dc8c29"
          ></path>
        </svg>
      </div>

      <div className="background-zumbi-2">
        <Container className="mt-5">
          <Row>
            <Col xs={12} md={4} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-5 font-monospace"></p>
            </Col>
            <Col xs={12} md={8} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image src={""} fluid></Image>
            </Col>
          </Row>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="mt90- divisor"
        >
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,192L30,197.3C60,203,120,213,180,218.7C240,224,300,224,360,240C420,256,480,288,540,304C600,320,660,320,720,293.3C780,267,840,213,900,181.3C960,149,1020,139,1080,149.3C1140,160,1200,192,1260,186.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="background-sussurros-3 mt20-">
        <Container className="mt20- ocean-zumbi">
          <Row className="">
            <Col
              xs={12}
              md={6}
              className="order-1 order-md-1 order-xl-1 mb-5"
            ></Col>
            <Col xs={12} md={6} className="order-2 order-md-1 order-xl-1">
              <h4> "Ninguém vai me dizer o que eu não posso ser!"</h4>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>
          <Row>
            <Col xs={1} md={1} className="order-1 order-md-2 order-xl-1"></Col>
            <Col xs={10} md={10} className="mt-1 order-1 order-md-2 order-xl-1">
              <Image src={""} fluid></Image>
            </Col>

            <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace"></p>
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
            <Col xs={12} md={5} xl={6} className="mt-5">
              <p className="font-monospace mt-5">
                “Ainda hoje, Zumbi” renova o compromisso do grupo de criar
                referências comuns ao momento social e político no qual o Brasil
                se encontra nos "dias de hoje (escrito em 2006)". A
                identificação do grupo com o Teatro de Arena começou em 2004,
                com a montagem de “O Arauto da Liberdade”, baseado no texto
                “Arena conta Tiradentes”, de 1967. Agora, o Tal&Pá revisita o
                Arena para contar a história de Zumbi, outro símbolo da luta
                pela liberdade.
              </p>
              <p className="font-monospace">
                O Teatro de Arena não pode ser visto apenas como um fenômeno dos
                anos 60, mas também como resultado de uma série de
                acontecimentos de natureza artística e política ocorridos em São
                Paulo no período que vai da instauração do regime democrático,
                após a queda do Estado Novo, em 1945, até o golpe militar de
                1964. Também em “Arena conta Tiradentes” e “Arena conta Zumbi”,
                a presença de duas funções opostas - a protagônica, a cargo dos
                atores, e a explicativa, a cargo do "coringa", permite uma maior
                possibilidade de variação formal, abrasileirando-se de certa
                forma o teatro épico de Brecht.
              </p>

              <p className="font-monospace"></p>
            </Col>
            <Col xs={12} md={6} xl={6} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2006-arena-conta-zumbi/bastoes-2.jpeg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="font-monospace">
                “Ainda hoje, Zumbi” reflete outra forma de engajamento político:
                a do militante negro nos processos sociais. Revela um ponto de
                vista humano, capaz de romper as fronteiras da raça. Desde a
                introdução de Oliveira Silveira, procura resgatar a contribuição
                do povo negro nas áreas social, econômica e política pertinentes
                à história do nosso país. A espinha dorsal do original “Arena
                Conta Zumbi” vem do romance “Ganga Zumba”, de João Felício dos
                Santos, e conta a epopéia do Quilombo dos Palmares desde a vinda
                de Zambi ao Brasil, num navio negreiro, até a morte de Ganga
                Zumba. A imaginação privilegiada, a cultura popular e a
                criatividade de Guarnieri e Boal, aliada à inspiração jovem e
                singular de Edu Lobo garantem ao espetáculo lugar de destaque na
                memória dos palcos mais importantes do país.
              </p>
            </Col>

            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col xs={12} md={5} className="mt-5">
              <p className="mt-4 font-monospace">
                [...] Às cidades cheguei em tempo de desordem, com a fome
                imperando.
              </p>
              <p className="mt-4 font-monospace">
                Junto aos homens cheguei em tempo de tumulto, e me rebelei com
                eles. Assim passou-se o tempo que sobre a terra me foi
                concedido. [...]
              </p>
              <p className="mt-4 font-monospace">
                Vós, que vireis na crista da maré em que nos afogamos, pensai,
                quando falardes em nossas fraquezas, também no tempo sombrio a
                que escapastes. Vínhamos nós então mudando de país mais do que
                de sapatos, em meio às lutas de classes, desesperados, enquanto
                apenas injustiça havia e revolta nenhuma. [...]
              </p>
              <p className="mt-4 font-monospace">
                Mas vós, quando chegar a ocasião de ser o homem um parceiro para
                o homem, pensai em nós com simpatia.
              </p>
            </Col>
            <Col xs={12} md={7} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2006-arena-conta-zumbi/zumbi_1.jpg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={10}>
              <p className="mt-4  fs-6">
                (Bertolt Brecht, in Aos Que Vão Nascer, tradução do grande poeta
                brasileiro Geir Campos)
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              xs={1}
              md={1}
              className="mt-1 order-1 order-md-2 order-xl-1"
            ></Col>
            <Col xs={10} md={10} className="mt-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2006-arena-conta-zumbi/costas%20com%20costas.jpeg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Col xs={12} md={12} className="mt-2 ">
              <p className="mt-4 font-monospace">
                "É um fato cultural porque é um fato político; é um fato
                político porque rompe com a política cultural dominante.
                Reflete, na verdade, outra forma, de engajamento político do
                militante negro nos processo sociais."
              </p>
              <p className="mt-4 font-monospace"></p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M4200,0H0V30H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,30h277Z"></path>
        </svg>
      </div>
      <Row className="">
        <Col className="text-center mb-5 mt50-">
          <div className="">
            <h3>Elenco - Arena Conta Zumbi </h3>
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
              actor.temporadas.includes("2006 - Arena Conta Zumbi")
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

export default Zumbi;
