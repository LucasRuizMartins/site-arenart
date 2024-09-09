import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import ateOnde from "../../../assets/pecas/ate-onde/ateonde.png";

export function AteOnde() {
  return (
    <>
      <Header />
      <div className="background-ate-onde">
        <Image className="background-top-ate-onde" src={ateOnde}></Image>
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
        >
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
        </svg>
      </div>
      <Container className="mt-2 ">
        <Row>
          <Col xs={0} md={0}></Col>
          <Col xs={12} md={5} className="mt-5 order-1 order-md-1 order-xl-1 ">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2009-ate-onde-a-vista-alcanca/T&P%20(10).jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
            <h2>Do arto do seu cavalo...</h2>
            <p className="mt-4 font-monospace">
              "... o peão de boiadero observa a boiada e seu olhar toca a linha
              do horizonte, onde o céu e a terra se encontram. Alembrando os
              causos, os pousos, as longa comitiva, bamo contar pr’ocês um
              pouquinho da sua história. História que começou lá em 1930, no
              terreiro da fazenda de Seu Pedro Antonio, na chegada da folia do
              Santo Reis. Sodade daquele céu coaiado de estrela, de quando a
              gente deitava ali debaxo e o sono vinha chegano devagarinho, como
              se a gente fosse dono de tudo, sem possuir nada. Adiante, que é
              chegada a hora! Canta, minha gente!"
            </p>
            <p className="mt-4 font-monospace">
              Nesse país de contrastes, de extrema diversidade, a cultura
              popular é retrato de um Brasil em sua essência, e representa a
              expressão legítima de seu povo. Mas boa parte dessa riqueza
              cultural anda esquecida ou é desconhecida pela nova geração,
              principalmente nos grandes centros urbanos. Nas andanças que faço
              pela minha cidadezinha no vale histórico, região do Rio Paraíba,
              ouço as pessoas lamentarem o quanto estão se modificando ou se
              perdendo pouco a pouco os folguedos e as festas populares da minha
              região, e não dá para deixar de pensar no quanto é frágil o que
              sobrou das nossas tradições. Penso que contar a história de "Até
              onde a vista alcança", que vem lá do outro lado do Estado, é por
              si uma forma de fazer durar mais um pouquinho algumas dessas
              memórias.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={5} className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              Reinaldo Santiago foi merecedor do prêmio Arte em Cena, promovido
              pela nossa caixa, com a peça “Até onde a vista alcança”. Segundo
              Marcília do Rosário que, com Márcio Tadeu, fez parceria de
              trabalho com Reinaldo, a peça passou por cerca de 40 cidades no
              estado de São Paulo e, a cada apresentação, contava com um público
              de centenas de pessoas, o que faz a gente acreditar no encanto que
              esse tipo de espetáculo desperta no imaginário popular.
            </p>
            <p className="mt-4 font-monospace">
              A cultura caipira, segundo o Professor Clóvis Garcia, se constitui
              de um conjunto de usos e costumes, crendices e superstições,
              medicina popular, comidas e bebidas. Entretanto, tem na linguagem
              sua maior característica. A possibilidade de estudar uma forma
              diferente de expressar sua língua foi uma experiência
              enriquecedora e divertida para os jovens participantes,
              principalmente ao perceberem que a fala do paulistano também tem
              suas peculiaridades, reconhecidas facilmente em outras regiões.
            </p>
          </Col>

          <Col xs={12} md={7} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2009-ate-onde-a-vista-alcanca/ate-onde-3.jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className="mt-5">
            <p className="fs-1 d-flex justify-content-center align-items-center"></p>
          </Col>
          <Col xs={0} md={2} className="mt-1 "></Col>
          <Col xs={12} md={10} className="mt-5 ">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2009-ate-onde-a-vista-alcanca/T&P%20(44).jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>

          <Row>
            <Col xs={12} md={7} className="mt-3 order-2 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2009-ate-onde-a-vista-alcanca/IMG_0030.JPG?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={5} className="mt-3 order-1 order-md-2 order-xl-1">
              <p className="font-monospace">
                O ponto de partida para a montagem foi a Folia de Reis, que
                conduziu o processo desde a escolha do texto. A Folia de Reis é
                um festejo de origem portuguêsa ligado às comemorações do culto
                católico do Natal, trazido para o Brasil ainda nos primórdios da
                formação da identidade cultural brasileira, e que ainda hoje
                mantém-se vivo nas manifestações folclóricas de muitas regiões
                do país. Em nossa montagem, a história é contada na passagem da
                folia, uma viagem pelo tempo ao longo de trinta anos que marcam
                o declínio da pecuária na região. Por esse motivo, todos os
                participantes tem o mesmo figurino, completado por acessórios
                que caracterizam cada personagem, uma opção tradicional da
                Companhia, que tem um grande número de participantes.
              </p>
              <p className="mt-4 font-monospace">
                A produção musical é de Soraya de Oliveira, que manteve a
                maioria das músicas originais da peça, mas também trouxe alguns
                clássicos da música caipira, sem necessariamente se restringir
                ao período histórico abordado. A estrutura do texto é
                fragmentária e o espaço cênico compreende vários locais de ação,
                com a utilização de cenas simultâneas.
              </p>
            </Col>
          </Row>

          <Col
            xs={12}
            md={12}
            className="mt-2 order-2 order-md-1 order-xl-1"
          ></Col>
        </Row>

        <Row>
          <Col
            xs={1}
            md={2}
            className="mt-1 order-1 order-md-2 order-xl-1"
          ></Col>
          <Col xs={12} md={10} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2009-ate-onde-a-vista-alcanca/SDC13715.JPG?raw=true"
              }
              fluid
            ></Image>
          </Col>
        </Row>
      </Container>

      <Row className="">
        <Col className="text-center mb-5 mt-5">
          <div className="">
            <h3>Elenco - Voando para o alto </h3>
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
              actor.temporadas.includes("2009 - Até onde a vista alcança")
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

export default AteOnde;
