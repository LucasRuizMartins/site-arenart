import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import motorBoy from "../../../assets/pecas/motorboy/motorboy.png";
import predio from "../../../assets/pecas/motorboy/predio.png";
import { Col, Row, Image, Container, Carousel } from "react-bootstrap";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import { Link } from "react-router-dom";
import CardsActor from "../../../components/CardsActor";
export function MotorBoy() {
  return (
    <>
      <Header />
      <section className="site-area-motorboy">
        <div className="motorboy-top">
          <Image src={motorBoy} />
        </div>

        <Container>
          <Row className="section-area  mt-5 ">
            <Col xs={12} md={6}>
              <Image src={predio} fluid />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="font-monospace mt-2"> Sombras da mesma luz</h2>
              <p className="font-monospace mt-4">
                Lá fora a cidade começa a ser atacada pela luz, uma luz que não
                perdoa nada, nem as rachaduras nas paredes, nem uma rua mal
                varrida, nem as rugas disfarçadas nos rostos maquiados. As
                próprias sombras são atacadas mal saem das coisas e desfazem-se
                antes de chegar ao chão1. Dentro de uma hora, as últimas sombras
                da cidade já estarão refugiadas debaixo das árvores da avenida e
                atrás dos muros mais espessos dos bairros populares. Até que o
                sol se ponha novamente, milhares de passos vão cruzar as
                calçadas e esquinas do centro da cidade. As pessoas nas ruas
                também são sombras, dia e noite, escorregando entre as frestas
                abertas das avenidas. Sombras em busca da luz.
              </p>
            </Col>
          </Row>

          <Row className="section-area d-flex mt-5 ">
            <Col xs={12} md={6}>
              <h2>Desvendando São Paulo</h2>
              <p className="font-monospace mt-4">
                São Paulo é mesmo única. Sedutora e sufocante. Cativante e
                congestionada. A cidade, a um só tempo, seduz e transforma
                mentalidades. Os cheiros e sons, o vozerio das ruas, as luzes e
                sombras de São Paulo perturbam os sentidos. A verticalidade é
                metáfora do crescimento da cidade, os arranha-céus recortando-se
                contra um fundo quase sempre cinzento, o crescimento para cima
                valendo mais que a expansão dos bairros, que o alargamento da
                superfície urbana. No centro, a vida passa mais depressa. Não é
                só figura de linguagem. À medida que os dias se sucedem, fica
                mais difícil reconhecer as fachadas dos velhos edifícios, a
                nobreza nos seus monumentos, aquelas esquinas, as mesinhas de
                bar... Mais do que tudo, o Centro nos mostra que nós é que
                passamos. Embora destruído, desleixado e desprotegido, ele
                continua resistindo a todos nós e, se não formos atentos,
                devora-nos como a velha esfinge indecifrada, contemplando o
                homem, na sua passagem fugaz, de brevidade irritante2.
              </p>
              <p className="font-monospace mt-4">
                Caminhando no centro velho numa ensolarada manhã de domingo, a
                Cia. de Teatro Tal&Pá reencontrou a cidade. Melhor: viu a cidade
                pela primeira vez.
              </p>
            </Col>
            <Col xs={12} md={5}>
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/456.JPG?raw=true"
                }
              />
            </Col>
          </Row>
          <Row>
            <p className="font-monospace mt-4">
              Nos contornos das esculturas de mármore, bronze e granito da Praça
              Ramos, no brilho cristalino da Fonte dos Desejos, nas imagens
              nostálgicas do museu subterrâneo, nas escadarias imponentes do
              Teatro Municipal, vislumbrou um retrato diferente da metrópole.
              Sob os olhares curiosos de seus moradores, atravessou ruas e
              debruçou-se sobre o Viaduto do Chá para reconhecer ali o cenário
              de sua próxima história.
            </p>
            <p className="font-monospace mt-4">
              Percorreu a Barão de Itapetininga, entre as vitrines escondidas
              pelas portas fechadas, e cruzou a Avenida Ipiranga em direção à
              feira de artesanato da Praça da República. O colorido substituiu
              os tons monocromáticos em meio aos tapumes amarelos das obras do
              metrô. Cheiro de yakisoba e tempurá, incenso indiano, capoeira de
              Angola, água de coco da Bahia, praça de todas as nações. O azul
              das camisetas perdeu-se na confusão da feira. Agora, as sombras
              tinham todas as cores. Cada contorno, cada canto, cada rua daquela
              manhã incorporou-se à história de cada um. A paisagem mutante não
              se repete, mas permanece na memória, e vai se traduzir, simbólica
              e surpreendente, no palco na temporada de 2007.
            </p>
          </Row>

          <div className="">
            <Carousel>
              <Carousel.Item>
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/473.JPG?raw=true"
                  }
                  fluid
                />
                <Carousel.Caption>
                  <Link
                    to={"temporadas/tempus-fugit"}
                    className="link-carousel"
                  >
                    <h3 className="carousel-caption-info"></h3>
                    <div className="d-flex justify-content-center"></div>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/498.JPG?raw=true"
                  }
                  fluid
                />
                <Carousel.Caption>
                  <Link
                    to={"temporadas/tempus-fugit"}
                    className="link-carousel"
                  >
                    <div className="d-flex justify-content-center"></div>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/431.jpg?raw=true"
                  }
                  fluid
                />
                <Carousel.Caption>
                  <Link
                    to={"temporadas/tempus-fugit"}
                    className="link-carousel"
                  >
                    <div className="d-flex justify-content-center"></div>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/516.JPG?raw=true"
                  }
                  fluid
                />
                <Carousel.Caption>
                  <Link
                    to={"temporadas/tempus-fugit"}
                    className="link-carousel"
                  >
                    <div className="d-flex justify-content-center"></div>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <Row className="mt-5">
            <h1>A Montagem</h1>
            <p className="font-monospace mt-1">
              A Cia. Tal&Pá conta sempre com um grande número de participantes
              em virtude da escassez de oportunidades na região para os jovens
              que gostam de teatro, dança, música e outras artes. Esse motivo
              reforça a prioridade do trabalho coletivo e gera a necessidade de
              examinar múltiplas formas de comunicação, que garantam o
              envolvimento do maior número possível de participantes.
            </p>
            <p className="font-monospace mt-1">
              Nesse sentido, a noção de texto pode variar conforme a perspectiva
              adotada, indo além da atividade verbal, já que esta constitui
              apenas uma parte do processo de comunicação humana. Assim, o texto
              deixa de ser visto como simples produção de linguagem oral ou
              escrita para ser entendido como elemento de construção de
              significado, de planejamento e de ação social. Para a montagem de
              Motorboy, a Cia. Tal&Pá utilizou o cartoon e as HQ’s como
              inspiração para algumas das cenas que constituem o pano de fundo
              para a história principal.
            </p>
            <p className="font-monospace mt-1">
              Um dos maiores problemas que encontramos em nossa comunidade é a
              alienação e imobilidade a que nossos jovens estão submetidos,
              mergulhados na crença de que o futuro está traçado e que não há
              perspectiva de mudança. Então, mais do que retratar a realidade, é
              preciso mudar essa crença. O futuro está sempre em movimento: é,
              sim, resultado do contexto no qual estamos inseridos, mas também
              de nossas próprias escolhas. Nosso papel não é indicar um caminho
              a seguir, mas mostrar que existem muitas possibilidades. Essa
              idéia nos guiou através de nossa viagem dentro do texto
              “Motorboy”.
            </p>
          </Row>

          <Row className="section-area  mt-5 ">
            <Col xs={12} md={6}>
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/509.JPG?raw=true"
                }
                fluid
              />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="font-monospace mt-2">Nada é por acaso...</h2>
              <p className="font-monospace mt-1">
                Guarulhos, manhã de fevereiro, cidade quente. Uma voz e um
                violão distraídos atravessaram a sala de reuniões. Nada novo,
                estranhamente familiar. Mesmo assim, o amor pela música na voz
                de Amadeu Albuquerque soou na mesma freqüência do Tal&Pá. Bastou
                ouvir uma vez para sentir a música escorrendo entre as linhas de
                “Motorboy”. Início de uma deliciosa parceria. No dicionário,
                “visionários” são sonhadores, utópicos, excêntricos,
                devaneadores. Nome bem próprio para esses músicos que acreditam
                num mundo melhor. Perfeito para a Cia. Tal&Pá que eles sejam
                jovens, também da Zona Leste de São Paulo. Perfeito que eles
                estejam em busca de um ideal comum: mais do que o sucesso,
                deixar sua marca nesse mundo.
              </p>
            </Col>
          </Row>
          <Row className="section-area  mt-5 ">
            <Col xs={12} md={6}>
              <p className="font-monospace mt-1">
                A banda é formada por mais três integrantes: Péricles (baterista
                e compositor), Ricardo (baixo e arranjo musical) e Tiago (flauta
                e percussão). O rock alternativo dos Visionários lembra as
                canções que explodiram na virada da década de oitenta, de onde
                vem a maioria de suas influências musicais: acordes simples,
                letras existencialistas. Um recado a quem vier ouvir. O tom
                melancólico vem das cordas metálicas do violão de Amadeu e da
                flauta de Tiago, nos belos arranjos de algumas das dez músicas
                reunidas na demo que chegou às mãos da Cia. Tal&Pá em fevereiro.
                Parte dessas composições é resultado de uma experiência musical
                anterior, a banda Prophecia, da qual Amadeu e Péricles fizeram
                parte. A dupla participou de outros projetos e tocou com outros
                músicos até chegar à formação atual. Amadurecidos, buscam agora
                o reconhecimento da qualidade do trabalho desenvolvido ao longo
                desses anos. O lançamento definitivo no cenário musical
                profissional deve acontecer em julho, no Mix Music Hall, um mês
                antes da estréia de Motorboy. Na ocasião, será gravado um clip
                ao vivo, que se juntará ao CD independente para divulgação nas
                rádios e TV. Enquanto não rola uma turnê, a música dos
                Visionários S/A vai ocupar o nosso palco, na voz e no coração do
                elenco adolescente da Cia Tal&Pá.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/460.JPG?raw=true"
                }
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Row className="text-center mb-5 mt-5">
        <h1>Elenco - Motorboy</h1>
      </Row>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="justify-content-center align-items-center">
          {actorService.playsSeason
            .slice()
            .filter((actor: ActorInfoDTO) =>
              actor.temporadas.includes("2007 - Motorboy")
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

export default MotorBoy;
