import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function ChaoBrasil2016() {
  return (
    <>
      <Header />

      <Container>
        <Row>
          {" "}
          <h1 className="text-center mt-4">Chão Brasil</h1>
        </Row>
        <Row>
          <Col xs={12} md={5} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2017-chao-brasil/guarda-chuva.jpg?raw=true"
              }
              fluid
            />
          </Col>
          <Col xs={0} md={1} className="mt-5"></Col>
          <Col xs={12} md={6} className="mt-5">
            <p>
              Em novembro de 2016 a Cia Tal&Pá apresentava o entreato “Chão
              Brasil”, uma ciranda colorida que trazia reflexões sobre as
              expectativas de uma trupe a respeito do próprio país e o futuro do
              artista. Inspirado no livro “Quem roubou o meu futuro?”, de Sylvia
              Orthof, foi a primeira aventura do Tal&Pá em espaço aberto.
            </p>
            <p>
              Ei, gente presente, gente ausente, eu peço um tico-tico de
              atenção! Sou o palhaço da lua, sou da estrela e do dragão! Sou o
              teatro, pé sem sapato, alegria e coração!
            </p>
            <p>
              Roubaram o meu futuro! Sou jovem, estou duro. Não sei o que
              estudar, o que fazer, para onde ir... Dizem que o amanhã foi
              exportado. Venderam nosso amanhã no mercado...As palavras estão
              coladas nas paredes. Somos peixes em redes
            </p>

            <p>
              Embora tenha sido uma temporada curta, tivemos grandes aventuras.
              Apresentamos em um domingo na Paulista, ocupamos escolas e fomos
              ao festival Santa Cruz
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} className="mt-5">
            <h3 className="mt-5"> Partir ou ficar ?</h3>
            <p className="mt-4">
              A reflexão que o palhaço da Lua faz durante o espetaculo tem sido
              uma reflexão comum aos brasileiros na última década. Nosso país
              que sempre esteve mais habituado a receber imigrantes, começa a
              ter um processo emigração. Os brasileiros começam a sair do país
              em busca de oportunidades de melhoria de vida
            </p>
            <p className="mt-4">
              Além disso todo artista em território nacional em algum momento
              vai se ver pensando sobre viver o sonho ou pagar as contas, ter
              que decidir entre essas duas coisas gera uma dicotomia, deixar o
              país para o palhaço da Lua é abandonar a mãe, é abandonar o sonho,
              é abandonar a si próprio, a decisão vem por uma necessidade e traz
              junto uma promessa de retorno. "Eu vou mas eu volto"
            </p>
            <p className="mt-4">
              Acreditamos que essa é uma possibilidade para muitos jovens
              artistas que acreditam se encontrar na arte, por mais que os
              caminhos possam se distanciar de seus sonhos, esperamos que a
              possibilidade de voltar a vivenciar aquilo que ama esteja sempre
              num horizonte possível, até quem sabe possa se concretizar. Talvez
              de um jeito diferente do sonhado, talvez de uma forma mais real,
              mas quem sabe tão prazeroso quanto foi os sonhos
            </p>
          </Col>

          <Col xs={12} md={6} className="mt-5 julia-photo">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2017-chao-brasil/julia.jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>
      </Container>

      <div className="secound-part-chao-brasil">
        <Row className="first-wave-chao-brasil">
          <svg viewBox="0 0 1000 290" xmlns="http://www.w3.org/2000/svg">
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
            ></path>
          </svg>
          <Image
            className="backgroun-chaobrasil"
            src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2017-chao-brasil/chao-brasil-1.jpg?raw=true"
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
          <Col xs={12} md={6} xl={4} className="mt-5 backgroun-chaobrasil">
            <p className="mt-4 backgroun-chaobrasil">
              A música tem sido uma das formas mais poderosas de expressão ao
              longo da história, e isso não é diferente quando se trata de
              protesto e senso crítico da realidade nacional. No Brasil, a
              música como forma de crítica social tem uma longa história. Na
              década de 60, com a ditadura militar no poder, tornou-se uma forma
              de resistência contra o regime opressor. Nos anos 70, representou
              uma válvula de escape para dizer e viver aquilo que era negado
            </p>
            <p className="mt-4 backgroun-chaobrasil">
              a liberdade, a quebra de tabus e a experimentação do novo. Nos
              anos 80, o rock nacional abordou temas como a desigualdade social,
              a corrupção, a violência e a falta de perspectivas para os jovens.
              As letras e melodias podem inspirar ações, mobilizar pessoas e
              criar um senso de unidade e solidariedade entre aqueles que
              compartilham as mesmas preocupações e lutas.
            </p>
          </Col>
          <Col xs={12} md={6} xl={7} className="mt-5">
            <Image
              className=""
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2017-chao-brasil/chao-brasil.jpg?raw=true"
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
              revisitando um período onde muitos artistas exilados viveram a
              mesma experiência que o Palhaço Lua em sua viagem. <br />
              <br />A distância da terra natal traz uma nova percepção sobre os
              rios e as praias, os sorrisos, as esquinas e os bares, a lua
              cheia, o perfume de terra molhada que só a chuva traz... Permeando
              a tradição regional popular e clássicos da MPB, Chão Brasil é um
              sopro de esperança em tempos de reconstrução.
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
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2017-chao-brasil/chao-brasil-elenco.jpg?raw=true"
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
      </div>
      <Row>
        <Col className="text-center mb-4">
          <div className="elenco-desc">
            <h3>Elenco - Chão Brasil</h3>
          </div>
        </Col>
      </Row>

      <Container
        fluid
        className="d-flex justify-content-center align-items-center elenco-chaobrasil"
      >
        <Row className="justify-content-center align-items-center">
          {actorService.playsSeason
            .slice()
            .filter((actor: ActorInfoDTO) =>
              actor.temporadas.includes("2016 - Chão Brasil")
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

export default ChaoBrasil2016;
