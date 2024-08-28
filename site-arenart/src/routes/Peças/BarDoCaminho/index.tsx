import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function BarDoCaminho() {
  return (
    <>
      <Header />
      <div className="background-bardocaminho">
        <Container className="background-bardocaminho">
          <Row>
            <Col className="text-center mb-4 mt-5">
              <h1 className="text-center mt-4">
                Tal & Pá conta o Bar do caminho
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={5} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2022-bar-do-caminho/bardocaminho2.jpg?raw=true"
                }
                fluid
              />
            </Col>
            <Col xs={0} md={1} className="mt-5"></Col>
            <Col xs={12} md={6} className="mt-5">
              <p>
                Tal & Pá conta o Bar do Caminho é ao mesmo tempo uma reflexão e
                uma homenagem aos encontros e histórias que marcaram as nossas
                vidas. Ao fim da pandemia do covid 19, os corpos e pessoas já
                não são as mesmas, durante o processo do Bar do caminho nós
                refletimos sobre como o isolamento físico e social causado pela
                pandemia acentuou o sentimento de saudade e como isso afetou as
                relações pessoais. Tendo a saudade como norte nós pensamos em
                como expressar essa experiência coletiva de forma relevante mas
                sem que a pandemia fosse o foco principal, queríamos discutir
                sobre as relações sociais e sobre como isso estava
                intrinsecamente ligado ao emocional coletivo e individual.
              </p>
              <p>
                Ao pensarmos sobre a saudade percebemos os diferentes nuances
                que existem ao retratar essa emoção tão presente em nossa vida,
                desde a infância até a vida adulta vivenciamos diferentes tipos
                de saudade, e esse sentimento molda as experiências das pessoas.
                A saudade no Bar do Caminho é apresentada não apenas como um
                sentimento de perda, mas como uma conexão profunda com o passado
                e com as pessoas que foram importantes na vida dos personagens.
              </p>
              <p>
                Montada inicialmente como uma experiência imersiva refletindo
                sobre o cotidiano dos bares que acabavam servindo também como
                mercadinhos de bairro, a peça oferece um retrato colorido e
                autêntico da vida do Brasileiro no fim do século XX. Em Tal&Pá
                conta o Bar do Caminho, cada cena é uma festa de emoções e
                interações com a plateia, refletindo a dinâmica única dos bares
                que são pontos de encontro para pessoas de diversas origens
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4">
                Neste espetáculo, o bar se torna um microcosmo da sociedade,
                onde o humor e a camaradagem prevalecem. A peça explora temas
                universais como amizade, família, pertencimento e a magia dos
                encontros humanos, utilizando uma linguagem que mistura comédia
                e drama para destacar as nuances do cotidiano no bar. O elenco
                mergulha nas histórias e nas vivências dos personagens com uma
                energia contagiante, trazendo à tona a autenticidade dos
                momentos compartilhados.
              </p>
              <p className="mt-4">
                Durante o desenvolvimento da peça, foram realizadas oficinas
                para os atores, onde exploraram profundamente as características
                e histórias dos frequentadores de bar. Esses exercícios ajudaram
                a criar uma conexão genuína com o ambiente e as histórias que se
                desenrolam, garantindo uma representação fiel e rica das
                experiências vividas no bar.
              </p>
            </Col>

            <Col xs={12} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2022-bar-do-caminho/foto-casamento.jpeg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col
              xs={1}
              md={1}
              className="mt-5 order-1 order-md-2 order-xl-1"
            ></Col>
            <Col xs={10} md={5} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2022-bar-do-caminho/lucas%20e%20paty.jpeg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4">
                O Bar do Caminho é mais do que um simples local; é o personagem
                central na peça, representando o espaço onde as memórias e
                relações se formam. Através do bar, a peça explora temas de
                tradição, comunidade e o impacto de mudanças sociais e pessoais.
                O bar é um símbolo da permanência e da transitoriedade,
                refletindo tanto a estabilidade quanto a mudança na vida dos
                personagens, e é claro que a efemeridade da vida acaba também se
                alastrando para o bar, o sonho do Sr.Túlio não é o sonho de seu
                filho e no fim mesmo com muita relutância o bar precisa ser
                fechado para que Maurício possa seguir a própria história.
              </p>
              <p className="mt-4">
                O fechamento do bar e a reflexão sobre o legado do avô enfatizam
                a importância de reconhecer e preservar as memórias e tradições
                familiares. A peça convida o público a considerar como os
                legados pessoais e culturais são transmitidos e como eles
                continuam a influenciar as gerações futuras.
              </p>
              <p className="mt-4">
                A música, com sua capacidade única de evocar emoções e memórias,
                desempenha um papel fundamental na peça. Desde clássicos que
                ressoam com a tradição dos bares até músicas contemporâneas que
                capturam a essência da vida noturna, a trilha sonora da peça
                contribui para a criação de uma atmosfera autêntica e
                envolvente. Cada música é escolhida para refletir o espírito
                docd bar e as histórias dos personagens, proporcionando uma
                experiência sensorial completa para o público, que inclusive é
                convidado a cantar os classicos junto aos atores em cena.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="backgroun-chaobrasil">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          ></Col>
        </Row>
        <Row className="">
          <Col xs={12} md={12} xl={12} className="mt-5">
            <p className="">
              o Bar do Caminho é uma peça que explora a saudade de maneira
              profunda, utilizando o bar como um lugar comum para que possamos
              examinar as memórias, tradições e o impacto das mudanças na vida
              das pessoas. A peça combina elementos de nostalgia, cultura e
              experiência pessoal para criar uma narrativa rica e emocionalmente
              ressonante.
            </p>
          </Col>
          <Col xs={12} md={12} xl={12} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2022-bar-do-caminho/paredao-cadeiras.jpeg?raw=true"
              }
              fluid
            />
          </Col>
        </Row>
      </Container>

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
            <h3>Elenco - Bar do caminho</h3>
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
              actor.temporadas.includes("2022 - Bar do Caminho")
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

export default BarDoCaminho;
