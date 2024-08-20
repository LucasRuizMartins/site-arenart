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
        <Row>
          {" "}
          <Image src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/WhatsApp%20Image%202024-08-20%20at%2018.39.53.jpeg?raw=true"></Image>{" "}
        </Row>
        <Row className="mt-5">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          ></Col>
        </Row>

        <Row>
          <Col xs={0} md={0} className="mt-5"></Col>
          <Col xs={12} md={6} className="mt-5">
            <p className="mt-4">
              A música tem sido uma das formas mais poderosas de expressão ao
              longo da história, e isso não é diferente quando se trata de
              protesto e senso crítico da realidade nacional. No Brasil, a
              música como forma de crítica social tem uma longa história. Na
              década de 60, com a ditadura militar no poder, tornou-se uma forma
              de resistência contra o regime opressor. Nos anos 70, representou
              uma válvula de escape para dizer e viver aquilo que era negado – a
              liberdade, a quebra de tabus e a experimentação do novo. Nos anos
              80, o rock nacional abordou temas como a desigualdade social, a
              corrupção, a violência e a falta de perspectivas para os jovens.
              As letras e melodias podem inspirar ações, mobilizar pessoas e
              criar um senso de unidade e solidariedade entre aqueles que
              compartilham as mesmas preocupações e lutas.
            </p>
          </Col>
          <Col xs={12} md={5} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/WhatsApp%20Image%202024-08-20%20at%2018.39.53%20(1).jpeg?raw=true"
              }
              fluid
            />
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            style={{ order: 1 }}
            md={6}
            className="mt-1 d-flex justify-content-center align-items-center order-1 order-md-2"
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
            style={{ order: 2 }}
            className="mt-1 order-2 order-md-1"
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
          <div className="elenco-desc">
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
