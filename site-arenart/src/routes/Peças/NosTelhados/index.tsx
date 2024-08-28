import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function NosTelhados() {
  return (
    <>
      <Header />

      <h1 className="text-center mt-4">Nos telhados da cidade</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,224L0,192L51.4,192L51.4,256L102.9,256L102.9,32L154.3,32L154.3,256L205.7,256L205.7,192L257.1,192L257.1,160L308.6,160L308.6,32L360,32L360,0L411.4,0L411.4,256L462.9,256L462.9,160L514.3,160L514.3,64L565.7,64L565.7,64L617.1,64L617.1,128L668.6,128L668.6,192L720,192L720,96L771.4,96L771.4,256L822.9,256L822.9,288L874.3,288L874.3,192L925.7,192L925.7,32L977.1,32L977.1,32L1028.6,32L1028.6,64L1080,64L1080,32L1131.4,32L1131.4,32L1182.9,32L1182.9,160L1234.3,160L1234.3,256L1285.7,256L1285.7,256L1337.1,256L1337.1,64L1388.6,64L1388.6,128L1440,128L1440,320L1388.6,320L1388.6,320L1337.1,320L1337.1,320L1285.7,320L1285.7,320L1234.3,320L1234.3,320L1182.9,320L1182.9,320L1131.4,320L1131.4,320L1080,320L1080,320L1028.6,320L1028.6,320L977.1,320L977.1,320L925.7,320L925.7,320L874.3,320L874.3,320L822.9,320L822.9,320L771.4,320L771.4,320L720,320L720,320L668.6,320L668.6,320L617.1,320L617.1,320L565.7,320L565.7,320L514.3,320L514.3,320L462.9,320L462.9,320L411.4,320L411.4,320L360,320L360,320L308.6,320L308.6,320L257.1,320L257.1,320L205.7,320L205.7,320L154.3,320L154.3,320L102.9,320L102.9,320L51.4,320L51.4,320L0,320L0,320Z"
        ></path>
      </svg>
      <div className="background-nostelhados mtt-1">
        <Container className="">
          <Row>
            <Col md={2}></Col>

            <Col>
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2019-nos-telhados-da-cidade/telhados.jpeg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col className="text-center mb-4 mt-5"></Col>
          </Row>
          <Row>
            <Col xs={12} md={5} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2019-nos-telhados-da-cidade/faisca.jpeg?raw=true  "
                }
                fluid
              />
            </Col>

            <Col xs={12} md={6} className="mt-5">
              <p>
                Em 1999 O grupo visita pela primeira vez a peça Nos telhados da
                cidade. Naquela época o tráfico de drogas intensificava-se e
                parecia ser um bom momento para promover a discussão sobre o
                tema. A partir do roteiro de Rooftops, um filme de Robert Wise,
                que já tinha realizado West Side Story, o Tal&Pá contava a saga
                de um grupo de jovens vivendo na periferia de São Paulo. O grupo
                se mantem como uma ponte entre o teatro e a televisão e a
                realidade das ruas de são paulo
              </p>
              <p>
                O espetáculo é uma releitura da montagem de 1999 e faz parte das
                comemorações dos 25 anos da companhia. Nessa nova versão, o
                grupo homenageia a poesia urbana do rapper Emicida e traz uma
                participação especial de MC Dartão Raptiulest.
              </p>
              <p>
                Durante o processo de nos telhados da cidade nós contamos e
                vivenciamos ocupações artisticas, para conhecer a realidade que
                os jovens viveriam no palco, houve uma visita a ocupação OUVIDOR
                63, ocupação artistica do centro da cidade de São Paulo que
                também se assume como um centro cultural
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
              <h2>Violencia e vingança</h2>
              <p className="mt-4">
                Rooftops é um filme de 1989 dirigido por Robert Wise, que
                acompanha as desventuras de dois adolescentes sem-teto em
                Manhattan. Foi o último filme cinematográfico dirigido por Wise
                e o segundo de seus filmes sobre jovens nova-iorquinos (o
                primeiro foi o famoso West Side Story, ou Amor sublime Amor).
                Fala sobre jovens abandonados que vivem nos telhados de prédios
                abandonados, em condições muito precárias. Os principais
                antagonistas são um grupo de traficantes de drogas que está
                lentamente invadindo os prédios abandonados da cidade,
                restringindo a juventude local e estabelecendo-se como a lei das
                ruas. Entre cenas de luta e violência, uma história de amor e
                números musicais intensos.
              </p>
              <p>
                Os personagens são retratados de forma realista, e suas
                interações refletem os desafios enfrentados em comunidades
                marcadas pela marginalização e pela violência. Faísca, Liu,
                Lobo, Manu, Elaine, e outros representam diferentes aspectos
                dessa realidade. Ao centro do espetáculo acompanhamos a
                crescente tensão entre Faísca e Lobo, relação essa vista
                diversas vezes nas periferias esse é um microcosmo do ciclo de
                violência que permeia a peça, quando uma criança não pode se
                sentir a vontade em casa, muitas vezes o que sobra é a rua. Na
                rua ela está sujeita a tudo que os adultos estão sujeitos.
              </p>
              <p className="mt-4">
                A peça lida com o impacto da violência tanto física quanto
                emocional. O ciclo de ódio é um tema recorrente, na realidade da
                peça e nas periferias das cidades. Aqui onde as ações dos
                personagens muitas vezes resultam em mais dor e tragédia, não
                conseguimos encontrar uma saída porém ainda existe a escolha
                continuar o ciclo, apesar da pressão e do ódio.
              </p>
            </Col>

            <Col xs={12} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2019-nos-telhados-da-cidade/ouvidor01.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col xs={10} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2019-nos-telhados-da-cidade/bya.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4">
                No Tal&Pá gostamos de pensar que os espetáculos vão para um
                mundo paralelo onde continuarão acontecendo. Por esse motivo, é
                quase uma regra nunca remontarmos um, conscientes também dos
                perigos que a quebra de expectativas pode trazer. Em 2019, ao
                comemorarmos os 25 anos de existência da companhia, lembramos
                dos 20 anos da nossa primeira participação em festivais e de
                como nossas vidas foram transformadas pelo aprendizado, pelos
                caminhos abertos e pelos amigos que encontramos a partir daí. E
                nesse contexto decidimos recontar a história de “Nos telhados da
                cidade... munidos da experiência e os recursos adquiridos ao
                longo dos preciosos anos vividos.
              </p>
              <p className="mt-4">
                Aconteceu que nosso antigo espetáculo recusou-se a deixar seu
                mundo paralelo... E só nos restou criar um novo, com seu próprio
                ritmo, sua cor, sua dança, sua voz. No novo caos, a poesia de
                Emicida substituiu a Legião Urbana com acidez, enquanto os
                discursos idealizados do final do século deram lugar à realidade
                crua da desigualdade social em ascensão dos nossos dias. A
                juventude pobre sobrevive em meio à violência enquanto vende
                bala nos trens, em saber se dias melhores virão. Quando os dois
                “Nos telhados da cidade...” se encontrarem, esperamos que as
                notícias sejam melhores. Por enquanto, fica o aviso: não vamos
                nos render. Manda vir tirar!
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
              <p className="">
                Temos diante de nós uma lembrança de uma poderosa reflexão sobre
                a realidade de muitas comunidades, onde a violência e as drogas
                destroem vidas e famílias. Porém ainda assim é uma história
                sobre resistência, amizade e a difícil, mas possível, busca por
                melhores condições. A peça consegue transmitir nossos nuances e
                complexidades, deixando uma marca profunda no público. Não
                existem soluções fáceis, mas força uma reflexão sobre as
                escolhas que fazemos e as consequências que elas trazem.
              </p>
            </Col>
            <Col xs={12} md={12} xl={12} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2019-nos-telhados-da-cidade/dartao01.jpg?raw=true"
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
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Row>

      <Row>
        <Col className="text-center mb-4">
          <div className="">
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
              actor.temporadas.includes("2019 - Nos telhados da cidade")
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

export default NosTelhados;
