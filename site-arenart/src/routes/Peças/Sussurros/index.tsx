import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import danton from "../../../assets/pecas/sussurros/sussurros.png";
export function Sussurros() {
  return (
    <>
      <Header />
      <div className="background-sussurros">
        <Image className="background-top-danton " src={danton}></Image>
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
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#424443"
          ></path>
        </svg>
      </div>
      <div className="background-sussurros-2">
        <Container className="mt50-">
          <Row>
            <Col
              xs={9}
              md={6}
              className="mt-5 order-1 order-md-1 order-xl-1 ms-5"
            >
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/andy;jpg.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={5} className="mt-5 order-2 order-md-1 order-xl-1">
              <h2>Uma noite é muito tempo...</h2>
              <p className="mt-4 fs-6">
                “Só quero aquele momento, aquele vago instante que existe entre
                um pensamento e outro... Um momento de paz e silêncio, um
                intervalo, uma vírgula, um hiato... Porque a minha mente fala,
                surrura, grita e murmura como uma matraca solta, um ruído
                constante de vozes das pessoas que sou. Elas falam do que foi,
                do que se tornou, do que será. Chego ao ponto de algumas vezes
                querer apenas, ainda que seja só um pouco, silêncio dentro de
                mim...”
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                Um jovem repassa a sua vida e suas angústias ao longo de uma
                noite, perdido num porão escuro entre o delírio e a realidade. O
                texto é uma colcha de retalhos poéticos de autores consagrados e
                outros inéditos, construído a partir de cartas e relatos
                pessoais dos integrantes do grupo. “Sussurros” é um intervalo de
                reflexão, um sopro de ar fresco para a Cia. de Teatro Tal&Pá em
                seus dezessete anos de trabalho, um recorte da vida aos
                dezessete anos nos dias de hoje.
              </p>
            </Col>
            <Col xs={12} md={8} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/meninos.jpg?raw=true"
                }
                fluid
              ></Image>
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
        <Container className="mt20-">
          <Row>
            <Col xs={1} md={1} className="order-1 order-md-2 order-xl-1"></Col>
            <Col xs={10} md={10} className="mt-1 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/palmito.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Row>
              <Col xs={12} md={7} className="order-1 order-md-1 order-xl-1">
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/lampada.jpg?raw=true"
                  }
                  fluid
                ></Image>
              </Col>
              <Col xs={12} md={5} className="order-2 order-md-1 order-xl-1">
                <h4> "SUSSURROS"</h4>
                <p className="  fst-italic">
                  “Só quero aquele momento, aquele vago instante que existe
                  entre um pensamento e outro... Um momento de paz e silêncio,
                  um intervalo, uma vírgula, um hiato... Porque a minha mente
                  fala, surrura, grita e murmura como uma matraca solta, um
                  ruído constante de vozes das pessoas que sou. Elas falam do
                  que foi, do que se tornou, do que será. Chego ao ponto de
                  algumas vezes querer apenas, ainda que seja só um pouco,
                  silêncio dentro de mim...”
                </p>
                <p className="ms-5 fs-6 fst-italic">(Jeovane Maciel)</p>
              </Col>
              <Col xs={12} md={0} className="mt-5"></Col>
            </Row>

            <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                “Sussurros” foi o espetáculo da Cia. de Teatro Tal&Pá em seus
                dezessete anos de trabalho, um recorte da vida aos dezessete
                anos nos dias de hoje. Um jovem repassa a sua vida e suas
                angústias ao longo de uma noite, perdido num porão escuro entre
                o delírio e a realidade. O texto é uma colcha de retalhos
                poéticos de autores consagrados e outros inéditos, construído a
                partir de cartas e relatos pessoais dos integrantes do grupo.
              </p>
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
              <p className="font-monospace">
                Sabe quando você descobre que tá sozinho e tenta gritar o mais
                alto que já gritou, mas não vai adiantar nada porque ninguém vai
                ouvir? Sabe? Sabe, coisa nenhuma!{" "}
              </p>
              <p className="font-monospace">
                Eu quero uma tarde com meus amigos sentados no chão, ouvindo
                música. Eu quero um céu azul. Eu quero voar. Eu quero me
                apaixonar novamente.
              </p>
              <p className="font-monospace">
                Eu quero olhar o mundo do jeito que eu via antes. Eu quero
                encontrar alguém pra dividir comigo todos os meus sonhos e
                problemas.
              </p>
              <p className="font-monospace">
                Eu quero chegar em casa e receber um abraço. Pintar o cabelo de
                três cores diferentes, e mesmo assim continuar a ser eu mesma.
                Eu quero trocar o dia pela noite. E correr na chuva. Ou só andar
                sentindo os pingos tocarem o meu rosto . Coisas que só o outono
                ensina. O resto... o resto são folhas mortas.
              </p>
            </Col>
            <Col xs={12} md={8} xl={6} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/meninas.jpg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="font-monospace fs-3">
                Se eu ficar indiferente e continuar sorrindo, será que eu
                consigo seguir em frente?
              </p>
            </Col>

            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col xs={12} md={5} className="mt-5 order-2 order-md-2 order-xl-2">
              <p className="mt-4 font-monospace">
                Como isso pode acontecer comigo? Antes eu sabia quem eu era...
                Agora eu tenho medo da minha casa, medo de me olhar no espelho,
                das pessoas, do futuro, de mim mesmo, do que fiz e do que ainda
                vou fazer, e pior ainda, do que deixei e ainda vou deixar de
                fazer. Medo de não conseguir o que planejei, de não alcançar o
                que desejo. Medo de perder aqueles que são importantes para mim.
                Mas de todas as coisas, o que tenho mais medo é o medo em si,
                que me faz correr, fugir, me esconder, ou me paralisa
                completamente, sem deixar que as palavras saiam da garganta para
                a boca e daí para o mundo.
              </p>
              <p className="mt-4 font-monospace ">
                O mundo é sempre o mesmo. Só as cores se vão quando o inverno
                chega. Tudo passa mais devagar. Tudo adormece no inverno, a não
                ser o sussurro do vento. E a vida desliza em câmera lenta,
                esperando pela luz que demora a chegar
              </p>
            </Col>
            <Col xs={12} md={6} className="mt-5 order-1 order-md-1 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/menina-bicicleta.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>
          <Row>
            <Col
              xs={1}
              md={2}
              className="mt-1 order-1 order-md-2 order-xl-1"
            ></Col>
            <Col xs={10} md={10} className="mt-1 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/sussurros-2-palmito.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                Quando a gente é pequeno, a gente quer uma porção de coisas. Aí,
                quando a gente cresce, a gente quer mais coisas. E a gente
                começa a sentir falta de coisas que nem entende direito. Dá um
                vazio aqui dentro, e você perde a fome, ou então come até não
                aguentar mais... Você fica triste do nada e depois dá risada de
                cada coisa besta... E de repente fica sozinho, mesmo no meio de
                uma porção de gente...
              </p>
              <p className="mt-4 font-monospace">
                Eu vi uma escada... Não tinha luz, eu só desci... Eu não sabia
                que era um precipício Eu não tenho para onde ir Eu não consigo
                explicar o que aconteceu e não consigo apagar as coisas que eu
                fiz Eu não consigo Como isto pode acontecer comigo? Eu estou tão
                cansado Eu só quero dormir Eu só quero gritar Eu só queria
                começar tudo de novo!
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={1}></Col>
            <Col xs={12} md={10}>
              <Image
                src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/fui.jpg?raw=true"
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={1}></Col>
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
            <h3>Elenco - Sussurros </h3>
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
              actor.temporadas.includes("2011 - Sussurros")
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

export default Sussurros;
