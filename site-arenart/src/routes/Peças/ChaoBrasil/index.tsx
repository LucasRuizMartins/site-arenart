import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function ChaoBrasil() {
  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col xs={12} md={5} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/WhatsApp%20Image%202024-08-20%20at%2018.39.53%20(2).jpeg?raw=true"
              }
              fluid
            />
          </Col>
          <Col xs={0} md={1} className="mt-5"></Col>
          <Col xs={12} md={6} className="mt-5">
            <h1>Chão Brasil</h1>

            <p>
              Montado inicialmente como um entreato para as temporadas de 2016 e
              2017, Chão Brasil foi a primeira aventura do Tal&Pá em espaço
              aberto. Em Chão Brasil, tudo é cor e movimento: o elenco brinca
              com a realidade numa estética inspirada no universo clown. Mas nem
              tudo é diversão no espetáculo: a poesia faz lembrar que os tempos
              são de luta e que o país vive um momento que pede reflexão, sem a
              intenção de enfatizar nenhum dos temas sugeridos: pátria,
              despedida, esperança e ilusão, natureza e fantasia.
            </p>
            <p>
              A linguagem do clown se destaca como uma importante ferramenta de
              crítica social. Por meio da figura do palhaço, essa linguagem
              artística utiliza o humor e a comicidade para abordar questões
              sérias e complexas, tais como a política, a sociedade e a cultura.
              Ao subverter as expectativas do público, o palhaço cria um espaço
              para questionar as normas e os valores estabelecidos na sociedade.
              Ele faz rir, mas também faz refletir.
            </p>
            <p>
              A proposta de movimentação em Chão Brasil vem a partir dos
              repertórios e experiências corporais trazidos pelos alunos e
              trabalhados nas oficinas e ensaios, dialogando com o texto e a
              trilha musical, atentando para as possibilidades individuais do
              elenco. 2022 também marca o início do processo de inclusão na
              companhia, que proporcionou novos desafios, mas também uma
              experiência sensível e enriquecedora.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} className="mt-5">
            <h3 className="mt-5"> Por que Arte?</h3>
            <p className="mt-4">
              Acreditamos que a inclusão nas artes é de extrema importância para
              uma sociedade mais justa e igualitária. Ela permite que pessoas de
              diferentes origens e habilidades possam expressar suas emoções,
              pensamentos e criatividade por meio da arte, sem discriminação ou
              exclusão. Além disso, a inclusão na dança pode contribuir para o
              desenvolvimento físico, cognitivo e social dos participantes,
              promovendo a autoestima, a autoconfiança e a interação com o
              outro. A dança também pode ser uma forma poderosa de comunicar
              ideias, conceitos e valores, permitindo que diferentes culturas
              sejam compartilhadas e compreendidas
            </p>
          </Col>

          <Col xs={12} md={6} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/WhatsApp%20Image%202023-06-25%20at%2022.04.14.jpeg?raw=true"
              }
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>
      </Container>

      <Row className="first-wave-chao-brasil">
        <svg
          viewBox="0 0 1000 290"
          xmlns="http://www.w3.org/2000/svg"
          className="divisor"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#022777"></stop>
              <stop offset="95%" stop-color="#022777"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,500 L 0,0 C 76.50769230769234,57.34615384615384 153.01538461538468,114.69230769230768 226,162 C 298.9846153846153,209.30769230769232 368.4461538461537,246.5769230769231 447,243 C 525.5538461538463,239.4230769230769 613.2000000000002,194.99999999999997 709,207 C 804.7999999999998,219.00000000000003 908.7538461538461,287.42307692307696 992,272 C 1075.246153846154,256.57692307692304 1137.7846153846153,157.3076923076923 1209,98 C 1280.2153846153847,38.6923076923077 1360.1076923076923,19.34615384615385 1440,0 L 1440,500 L 0,500 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            className="divisor"
          ></path>
        </svg>
        <Image
          className="backgroun-chaobrasil"
          src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/WhatsApp%20Image%202024-08-20%20at%2018.39.53.jpeg?raw=true"
        ></Image>{" "}
      </Row>
      <Row className="backgroun-chaobrasil">
        <Col
          xs={12}
          md={12}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>

      <Row className="backgroun-chaobrasil">
        <Col xs={0} md={0} xl={1} className="mt-5"></Col>
        <Col xs={12} md={6} xl={5} className="mt-5 backgroun-chaobrasil">
          <p className="mt-4 backgroun-chaobrasil">
            A música tem sido uma das formas mais poderosas de expressão ao
            longo da história, e isso não é diferente quando se trata de
            protesto e senso crítico da realidade nacional. No Brasil, a música
            como forma de crítica social tem uma longa história. Na década de
            60, com a ditadura militar no poder, tornou-se uma forma de
            resistência contra o regime opressor. Nos anos 70, representou uma
            válvula de escape para dizer e viver aquilo que era negado – a
            liberdade, a quebra de tabus e a experimentação do novo. Nos anos
            80, o rock nacional abordou temas como a desigualdade social, a
            corrupção, a violência e a falta de perspectivas para os jovens. As
            letras e melodias podem inspirar ações, mobilizar pessoas e criar um
            senso de unidade e solidariedade entre aqueles que compartilham as
            mesmas preocupações e lutas.
          </p>
        </Col>

        <Col xs={12} md={5} xl={3} className="mt-5">
          <Image
            src={
              "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/WhatsApp%20Image%202024-08-20%20at%2018.39.53%20(1).jpeg?raw=true"
            }
            fluid
          />
        </Col>
      </Row>

      <Row className="backgroun-chaobrasil">
        <Col
          xs={0}
          style={{ order: 1 }}
          md={0}
          xl={1}
          className="mt-1 d-flex justify-content-center align-items-center order-xl-1"
        >
          {" "}
        </Col>
        <Col
          xs={12}
          style={{ order: 1 }}
          md={6}
          xl={6}
          className="mt-1 d-flex justify-content-center align-items-center order-1 order-md-2 order-xl-2"
        >
          <p className="mt-2">
            Em Chão Brasil, o elenco passeia por fragmentos musicais,
            revisitando um período onde muitos artistas exilados viveram a mesma
            experiência que o Palhaço Lua em sua viagem. <br />
            <br />A distância da terra natal traz uma nova percepção sobre os
            rios e as praias, os sorrisos, as esquinas e os bares, a lua cheia,
            o perfume de terra molhada que só a chuva traz... Permeando a
            tradição regional popular e clássicos da MPB, Chão Brasil é um sopro
            de esperança em tempos de reconstrução.
          </p>
        </Col>
        <Col
          xs={10}
          md={6}
          xl={5}
          style={{ order: 2 }}
          className="mt-5 order-2 order-md-1 order-xl-3"
        >
          <Image
            src={
              "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/WhatsApp%20Image%202024-08-20%20at%2018.39.53%20(3).jpeg?raw=true"
            }
            roundedCircle
            fluid
          ></Image>
        </Col>
      </Row>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="divisor"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#022777"></stop>
            <stop offset="95%" stop-color="#022777"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 L 0,262 C 51.35554792167639,280.499484713157 102.71109584335278,298.998969426314 172,317 C 241.28890415664722,335.001030573686 328.5111645482652,352.50360700790105 405,341 C 481.4888354517348,329.49639299209895 547.2442459635864,288.98660254208176 608,346 C 668.7557540364136,403.01339745791824 724.5118515973891,557.5499828237719 787,614 C 849.4881484026109,670.4500171762281 918.7083476468567,628.8134661628308 997,588 C 1075.2916523531433,547.1865338371692 1162.6547578151838,507.1961525249054 1238,528 C 1313.3452421848162,548.8038474750946 1376.672621092408,630.4019237375473 1440,712 L 1440,700 L 0,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          transform="rotate(-180 720 350)"
        ></path>
      </svg>
      <Row className="mt-5">
        <Col
          xs={12}
          md={12}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>

      <Row>
        <Col className="text-center mb-4">
          <div className="">
            <h3>Elenco - Chão Brasil 2022</h3>
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
              actor.temporadas.includes("2023 - Chão Brasil")
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

export default ChaoBrasil;
