import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function Zumbi() {
  return (
    <>
      <Header />
      <div className="background-ultimo-carro">
        <Col className="text-center "></Col>
      </div>
      <div className="background-ultimo-carro">
        <Container className="mt-5 ">
          <Row>
            <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="font-monospace text-center">
                <h1 className="ultimo-carro-titulo">O Ultimo Carro</h1>
              </p>
            </Col>

            <Col xs={12} md={8} className="mt-3 order-1 order-md-2 order-xl-1">
              <Image src={""} fluid></Image>
            </Col>
          </Row>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="mt0- divisor"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L30,197.3C60,203,120,213,180,218.7C240,224,300,224,360,240C420,256,480,288,540,304C600,320,660,320,720,293.3C780,267,840,213,900,181.3C960,149,1020,139,1080,149.3C1140,160,1200,192,1260,186.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="mt90-">
        <Container className="">
          <Row className="">
            <Col
              xs={12}
              md={6}
              className="order-1 order-md-1 order-xl-1 mb-5"
            ></Col>
            <Col xs={12} md={6} className="order-2 order-md-1 order-xl-1">
              <h4> </h4>
            </Col>
            <Col xs={12} md={0} className="mt-1"></Col>
          </Row>
          <Row>
            <Col xs={1} md={1} className="order-1 order-md-2 order-xl-1"></Col>
            <Col xs={10} md={10} className="mt-1 order-1 order-md-2 order-xl-1">
              <Image src={""} fluid></Image>
            </Col>

            <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
              <p className="mt-1 font-monospace"></p>
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
            <Col xs={12} md={5} xl={6} className="mt-1">
              <h1></h1>
              <p className="font-monospace mt-5">
                O texto de João das Neves escolhido para a temporada 2005, traz
                para o espectador uma preocupação temática básica: a discussão
                de problemas concretos do povo brasileiro. Aparentemente
                trata-se de uma simples viagem de trem no subúrbio, onde
                mendigos e operários, diversos personagens comuns a esse
                cotidiano, enfocam seus dramas particulares durante a viagem e
                suas paradas. Os vários "pequenos dramas" perdem a sua autonomia
                e ganham organicidade dramática ao serem confrontados com a
                louca corrida do trem, que, subitamente, parece já não mais
                obedecer a nenhum comando racional, obrigando a todos uma
                definição radical sobre seus destinos.
              </p>
              <p className="font-monospace">
                João da Neves é autor, tradutor, diretor, ator e iluminador
                teatral. Participou do Centro Popular de Cultura da UNE, onde
                dirigiu o setor de teatro de rua até 1964, quando a entidade foi
                extinta pela ditadura militar. Ainda em 1964 foi um dos
                fundadores do histórico Grupo Opinião. Posteriormente fez um
                curso de Prática em Ciências Teatrais na Alemanha, estagiando no
                setor de peças radiofônicas da Westdeutscher Rundfunk. Dirigiu
                óperas contemporâneas como Continente Zero Hora, de Rufo Herrera
                e Corpo Santo, de Jorge Antunes, além de roteirizar e dirigir
                inúmeros shows com nomes significativos da MPB.
              </p>
            </Col>
            <Col xs={12} md={6} xl={6} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2005-o-ultimo-carro/tres.JPG?raw=true"
                }
                fluid
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-1 order-2 order-md-1 order-xl-1">
              <p className="font-monospace">
                A trajetória de João das Neves revela coerência. Um diretor
                empenhado em buscar no teatro uma via de reflexão sobre as
                incongruências da sociedade brasileira. Escreveu e dirigiu O
                Último Carro, ganhador de mais de 20 prêmios, entre eles o
                Golfinho de Ouro, três Moliére e Bienal Internacional de São
                Paulo. É autor ainda de Mural Mulher, Café da Manhã, O Quintal e
                A Pandorga e a Lei (inédita no Brasil, mas radiofonizada na
                Alemanha). Em 1994, dirigiu no DAC/UNICAMP o espetáculo
                Primeiras Histórias, de Guimarães Rosa.
              </p>
            </Col>

            <Col xs={12} md={0} className="mt-1"></Col>
          </Row>

          <Row>
            <Col xs={12} md={7} className="mt-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2005-o-ultimo-carro/danca.JPG?raw=true"
                }
                fluid
              />
            </Col>
            <Col xs={12} md={5} className="mt-5">
              <p className="mt-1 font-monospace">
                Qualifica um movimento teatral e um conjunto de dramaturgos que
                se colocam contra o regime militar de 64. São textos que enfocam
                a repressão à luta armada, o papel da censura, o arrocho
                salarial, o milagre econômico e a ascensão dos executivos, a
                supressão da liberdade, muitas vezes apelando para episódios
                históricos ou situações simbólicas e alegóricas. Desenvolve-se
                entre 1964 e 1984, embora a grande concentração esteja entre
                1969 (decretação do AI-5 e arrocho da Censura) e 1980 (início da
                distensão).
              </p>
              <p className="mt-1 font-monospace">
                A primeira reação teatral ao golpe militar de 64 é Opinião, um
                show de protesto que reúne ex-integrantes do Centro Popular de
                Cultura, posto na ilegalidade. O espírito de resistência e
                denúncia das novas condições vigentes no país vai unir, a partir
                de então, a classe teatral em assembléias, ciclos de leituras
                dramáticas e outras atividades.
              </p>
              <p className="mt-1 font-monospace">
                Com o AI-5 e a censura, os dramaturgos são obrigados a aceitar
                cortes ou a apelar para expressões metafóricas em seus textos,
                objetivando liberar as encenações. Muitos são proibidos ou
                mutilados, conhecendo a experiência do palco somente muitos anos
                após.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={10}>
              <p className="mt-1  fs-6"></p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} className="mt-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2005-o-ultimo-carro/trem.JPG?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Col xs={12} md={12} className="mt-1 ">
              <p className="mt-1 font-monospace">
                Enfocam a temática social obras como Botequim, 1972, e Um Grito
                Parado no Ar, 1973, de Gianfrancesco Guarnieri; Mumu, a Vaca
                Metafísica, de Marcílio Morais, 1974; Corpo a Corpo, 1971, A
                Longa Noite de Cristal, 1977, e Moço em Estado de Sítio, 1977,
                de Oduvaldo Vianna Filho; bem como Gota d'Água, de Chico
                Buarque; A Cidade Impossível de Pedro Santana, 1975, e O Grande
                Amor de Nossas Vidas, 1978, de Consuelo de Castro, ou Sinal de
                Vida, 1979, de Lauro César Muniz. A situação das classes
                populares constitui tema constante na obra de Plínio Marcos, bem
                como a de O Último Carro, de João das Neves, 1977.
              </p>
              <p className="mt-1 font-monospace">
                Duas realizações coroam o movimento de resistência: A encenação
                em 1979 de Rasga Coração, texto de Oduvaldo Vianna Filho datado
                de 1972, que tem de enfrentar dura e longa batalha com a
                Censura, sendo liberado apenas após sua morte. E a visita ao
                Brasil de Augusto Boal em 1980, vivendo no exílio, com seu
                Teatro do Oprimido. O texto de Oduvaldo Vianna Filho trata das
                lutas do Partido Comunista, e o Oprimido, idealizado por Augusto
                Boal, disponibiliza técnicas teatrais às vítimas de situações
                opressivas. Um movimento paralelo, voltado para a ação e não
                somente à dramaturgia, revela uma nova tendência para a
                resistência. São grupos que, deslocando-se dos centros urbanos,
                implantam-se nos bairros periféricos, buscando aliar um esforço
                de militância, quase clandestina, com a busca de uma linguagem
                popular para suas criações, tornando-as acessíveis às
                comunidades à margem do mercado de produção cultural. A reunião
                desses grupos caracteriza o Teatro Independente, que dá origem a
                novas formas de organização e produção, que se tornarão
                hegemônicas nos anos subseqüentes. Todos esses eventos compõem
                um movimento que, tendo partido do protesto, amadurece até a
                defesa do direito à liberdade de expressão.
              </p>
              <p className="mt-4 font-monospace"></p>
            </Col>
          </Row>
        </Container>
      </div>

      <Row className="">
        <Col className="text-center mb-5 mt50-">
          <div className="">
            <h3>Elenco - O ultimo carro </h3>
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
              actor.temporadas.includes("2005 - O último Carro")
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
