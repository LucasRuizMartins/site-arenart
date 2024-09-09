import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import joana from "../../../assets/pecas/Joana/top-joana.png";
export function Joana() {
  return (
    <>
      <Header />
      <div className="background-insane">
        <Image className="background-top-joana" src={joana}></Image>

        <Container className="background-insane">
          <Row>
            <Col className="text-center mb-4 mt-5"></Col>
          </Row>

          <Row>
            <Col xs={12} md={5} className="mt-5 order-1 order-md-1 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2014-as-vozes-de-joana/estandard.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={7} className="mt-5 order-2 order-md-1 order-xl-1">
              <h4>Quem está disposto a morrer por uma revolução?</h4>
              <p className="mt-4 font-monospace">
                Não existe revolução drástica sem violência e não existem
                grandes violências sem mortes. Quem está disposto a liderar uma
                revolução que mude um país sabendo que não ficará vivo para
                desfrutar das mudanças? Você estaria disposto a morrer por uma
                revolução? O espetáculo “As vozes de Joana” estreou no momento
                em que os nossos jovens experimentavam a possibilidade de
                participar efetivamente da construção de uma nova democracia,
                com a onda de manifestações que tomou o país em 2013. Recontava
                a história da camponesa de dezessete anos que se vestiu como um
                homem e liderou as tropas francesas em 1429. Nos últimos dois
                anos de sua vida fez muitas coisas improváveis, quase
                impossíveis... ganhou batalhas, coroou um Rei e salvou seu país.
                Joana não fez apenas o que era esperado dela: em vez disso,
                deixou sua marca na história. Capturada em Compiègne em 1431,
                vendida aos ingleses, interrogada pelo Bispo Cauchon, foi
                declarada como herege pela Inquisição e queimada em martírio. Ao
                longo da narrativa, que tem como fio condutor os autos do
                processo original movido pela Igreja, o espetáculo relembra
                depoimentos famosos de outras pessoas que, como ela, às suas
                épocas, contribuíram para mudar o curso da história.
              </p>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col xs={12} md={5} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                Uma coisa é certa: O povo sempre foi, em sua maioria, consciente
                dos desatinos políticos que o cercam. Traçando um paralelo com a
                nossa realidade, manifestações em várias cidades brasileiras
                apontavam para um novo caminho político no País. Se vão
                contribuir de modo positivo e consistente para o futuro do país,
                não há como saber ainda, o horizonte está aberto. Há muitas
                razões para a descrença e até o pessimismo. Quem imprimirá os
                direcionamentos para que uma nova forma de sociedade ganhe
                corpo? Em nome de quê? Servindo a quais interesses e valores?
              </p>
              <p className="mt-4 font-monospace">
                Joana sabia o que devia ser feito, foi lá, e o fez. Pagou caro
                pelas suas decisões. Não há margem para o utopismo. Não há
                garantias. Mas, sim, para o otimismo, enfim, é possível. Temos
                responsabilidade com estas oportunidades.{" "}
              </p>
              <p className="mt-4 font-monospace">
                O Brasil vive um forte momento em sua história democrática.– a
                diferença agora vem do grito nas ruas, das manifestações que
                fazem valer o desejo por mudanças. E nenhuma mudança começa sem
                uma insatisfação, sem uma certeza de que, se a história ainda
                não chegou ao seu fim, pode ser-lhe dada um rumo diferente.
              </p>
            </Col>
            <Col xs={12} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2014-as-vozes-de-joana/somora.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col xs={12} md={12} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2014-as-vozes-de-joana/joana2.jpg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={1}
              md={1}
              className="mt-1 order-1 order-md-2 order-xl-1"
            ></Col>
            <Col xs={10} md={10} className="mt-1 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2014-as-vozes-de-joana/joana.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Row>
              <Col
                xs={12}
                md={5}
                className="mt-1 order-1 order-md-1 order-xl-1"
              >
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2014-as-vozes-de-joana/jennifer.jpg?raw=true"
                  }
                  fluid
                ></Image>
              </Col>
              <Col
                xs={12}
                md={7}
                className="mt-5 order-2 order-md-1 order-xl-1"
              >
                <h4>JOANA ...</h4>
                <p className="mt-4 font-monospace">
                  acabou sendo capturada por franceses leais à Inglaterra e
                  julgada pela inquisição pois suas alegações que tinha
                  inspirações divinas foram consideradas heresia e queimada na
                  fogueira em 1431. Agora é esperar para ver até onde irão essas
                  manifestações e se essa iniciativa se transformará
                  efetivamente em um movimento de debates dos problemas do
                  Brasil Esse texto tem uma pretensão: ser um alerta para que
                  esse momento de liberdade não se transforme no oposto daquilo
                  que todos e todas procuramos: um país melhor, mais humano,
                  mais inclusivo, com maior igualdade, com respeito às
                  diferenças.
                </p>
              </Col>
              <Col xs={12} md={0} className="mt-5"></Col>
            </Row>

            <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                Contudo, é um movimento que foge às nossas categorias
                tradicionais de análise, pois não há uma liderança a qual a
                situação possa combater ou cooptar e também não é “gerenciada”
                por nenhum partido político, tendo, inclusive, uma profunda
                rejeição pela classe política. E essa ideia de um modelo de
                transformar nos moldes em que está ocorrendo, parece indicar que
                as relações políticas no Brasil, ou pelo menos as relações entre
                o Estado e a Sociedade, nunca mais serão as mesmas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="custom-shape-divider-top-1724944696">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
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
          <Col xs={12} md={4} xl={4} className="mt-5">
            <p className="font-monospace">
              E isso é algo que gera grande inquietação, exceto nas mentes mais
              jovens (independentemente da idade cronológica), pois não se está
              acostumado a lidar com complexidade das múltiplas e ricas culturas
              que estão se apresentando à sociedade brasileira. Nesse sentido,
              para que a participação nas Manifestações tenha caráter de
              protagonismo político e social efetivo, acho necessário apontar
              algumas questões para as quais deve haver a busca de algum tipo de
              resposta: para quem está "vibrando" com as manifestações, está
              claro quais são os atores envolvidos? Qual é o papel da mídia
              (eterna amiga de quem está ou pretende chegar ao Poder) em tudo
              isso? O que significa a expulsão de partidos (qualquer partido) de
              um evento público? Qual o significado de o "povo se levanta" sem
              apoio de partidos e/ou lideranças políticas?
            </p>
          </Col>
          <Col xs={12} md={8} xl={8} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2014-as-vozes-de-joana/elenco.jpg?raw=true"
              }
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="font-monospace">
              Sem alguns indicativos de eventuais e parciais respostas,
              minimamente adequadas, às perguntas acima, qualquer participação
              nas manifestações podem se esvaziar em um "modismo" inconsequente.
              Brasil vive momento de afirmação da sua democracia', Nossa versão
              mistura depoimentos famosos, cada um em sua época, acusados por
              defenderem seus princípios.
            </p>
          </Col>

          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>
        <Row>
          <Col className="text-center mb-5 mt-5">
            <div className="">
              <h3>Elenco - As vozes de Joana</h3>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="justify-content-center align-items-center">
          {actorService.playsSeason
            .slice()
            .filter((actor: ActorInfoDTO) =>
              actor.temporadas.includes("2014 - As vozes de Joana")
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

export default Joana;
