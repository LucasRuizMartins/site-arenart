import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import bya from "../../../assets/pecas/tempus-fugit/bya01.jpeg";
import tempusFugit from "../../../assets/pecas/tempus-fugit/tempus-fugit.png";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";

export function TempusFugit() {
  return (
    <>
      <Header />
      <Row className="tempus-fugit-top ">
        <Image className="" src={tempusFugit} />
      </Row>

      <div className="mt20-- divisor">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="background-tempus-fugit ">
        <Container>
          <Row>
            <Col xs={12} md={5} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2024-tempus-fugit/mary-coreografia.jpeg?raw=true"
                }
                fluid
              />
            </Col>
            <Col xs={0} md={1} className="mt-5"></Col>
            <Col xs={12} md={6} className="mt-5">
              <h3 className="font-monospace">Reflexões sobre o processo</h3>
              <p className="ms-5 fs-5 font-monospace">O Tempo Voa...</p>
              <p className="font-monospace">
                "Trinta anos é um período de reflexão. Na vida de uma pessoa, é
                o momento em que se pesa o que foi feito até o momento, onde se
                está nesse momento e para onde se vai. Para essa reflexão,
                precisamos olhar para trás, mas também precisamos olhar para nós
                mesmos hoje, e só então poderemos projetar planos para um
                futuro. Talvez nós, como coletivo, também estejamos passando por
                essa reflexão.
              </p>
              <p className="font-monospace">
                Durante o FETESP de 2023, o grupo esteve diante de diversos
                questionamentos. O intervalo de onze anos entre uma participação
                e outra fez com que a passagem do tempo fosse percebida de forma
                mais viva e latente. Alguns dos velhos amigos já não estavam
                presentes, uns pela distância, outros porque o tempo deles se
                esgotou e já não pertencem a essa história terrena. Embora isso
                tenha trazido algumas reflexões aos coordenadores, a ideia de
                falarmos sobre o tempo veio dos jovens. Ao voltarmos do FETESP,
                iniciamos o novo processo que culminaria em 'Tempus Fugit'.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={0} md={6} className="mt-5">
              <p className="font-monospace">
                Na primeira etapa, vivenciamos seis meses de oficinas intensas,
                e no final os jovens tiveram de escolher e apresentar a versão
                deles para qualquer uma das 26 peças que o Tal&Pá já encenou. O
                grupo foi repartido em equipes e percebemos que todas elas
                escolheram peças que fugiam do realismo, buscavam o universo
                fantástico; quanto mais longe da realidade que viviam, mais
                parecia interessar aos jovens. Entendemos ali que nosso próximo
                espetáculo não estaria situado no mundo comum: era preciso
                procurar um outro, e contar uma história de pessoas vivendo num
                plano diferente do atual.
              </p>
            </Col>
            <Col xs={12} md={6} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2024-tempus-fugit/luz.jpeg?raw=true"
                }
                fluid
              ></Image>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-5">
              <h3 className="mt-5 ms-5"> sobre o que falar</h3>
              <p className="mt-4 font-monospace">
                Nas conversas de roda com os alunos-atores, era recorrente o
                tema 'tempo'. Como ele passa rápido, como utilizar esse tempo de
                forma proveitosa, quanto tempo se tem? O fantasma da pandemia
                ainda circula ao nosso redor e deixou clara a fragilidade da
                sociedade que parecia invulnerável, mas não é. As queimadas
                desenfreadas, o aquecimento global, a possibilidade de uma
                guerra nuclear ou até, quem sabe, uma nova pandemia mais
                letal... Fato é: distopias são criadas diariamente para todos os
                gostos e crenças, a reflexão do fim do mundo está em alta. O
                espírito do tempo pós-moderno tem sonhos e pesadelos com essa
                possibilidade e isso obviamente se reflete em nossos jovens.
              </p>
            </Col>

            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>
          <Row>
            <Col xs={0} md={1} className=""></Col>
            <Col xs={12} md={11} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2024-tempus-fugit/arena.jpeg?raw=true"
                }
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

          <Row>
            <Col
              xs={12}
              style={{ order: 2 }}
              md={6}
              className="mt-1 d-flex justify-content-center align-items-center order-2 order-md-1"
            >
              <p className="mt-4 font-monospace">
                A essa altura, já sabíamos que nossa história enfatizaria as
                nuances do tempo, como a vida passa rápido e como de repente o
                tempo pode se esgotar; sabíamos que falaríamos de um universo
                distópico paralelo ao nosso, onde poderíamos identificar essas
                aflições com um distanciamento 'seguro'. O próximo ponto seria
                descobrir quem viveria nesse universo. As personagens agora
                estavam em foco. A pergunta da vez foi: que personagens vocês
                admiram ou gostariam de interpretar? Respostas diversas, desde
                Alice e o Chapeleiro do ‘País das Maravilhas' até Joel, de ‘Last
                of Us', Katniss Everdeen, de ‘Jogos Vorazes’, e o Homem de Lata,
                do ‘Mágico de Oz’. A partir daí, iniciamos um processo de
                improvisação de cenas, onde tentariam colocar essas personagens
                em situações específicas e dariam vida a elas. Por fim, essas
                improvisações deram lugar a roteiros de cenas e, aos poucos, um
                texto surgiu.
              </p>
            </Col>
            <Col
              xs={10}
              md={6}
              style={{ order: 1 }}
              className="mt-1 order-1 order-md-2"
            >
              <Image src={bya} roundedCircle fluid></Image>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col
              xs={12}
              md={12}
              className="d-flex justify-content-center align-items-center"
            ></Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2024-tempus-fugit/elenco%20-2.jpg?raw=true"
                }
                fluid
              />
            </Col>
            <Col xs={12} md={6} className="mt-5">
              <p className="font-monospace">
                Vivenciar o fim do mundo é uma experiência e tanto e queríamos
                trazer perspectivas diferentes; nossa reflexão sobre o tempo
                permeia uma discussão filosófica a respeito da natureza humana:
                egoísta ou solidária? Estamos dispostos a acabar com o planeta
                em que vivemos para usufruirmos de coisas que sequer precisamos?
                Todos somos assim? Será que o ser humano seria capaz de
                renunciar a si mesmo para que o resto do planeta tivesse uma
                chance? Se, para alguns, somos feitos à imagem e semelhança de
                um deus que se sacrifica por nós, seríamos capazes de nos
                sacrificarmos para que outras criaturas sobrevivessem? E, por
                fim, se pudéssemos escolher viver mais um único dia ao lado de
                quem amamos, sabotaríamos todo o resto?
              </p>
              <p className="font-monospace">
                Não houve consenso do grupo para essa resposta. A peça traz um
                fim possível diante desse conflito, mas não antes de uma última
                guerra entre os derradeiros habitantes. Como sempre foi. O livro
                'Cidade das Sombras', de Jeanne Duprau, foi uma referência
                importante na construção da história, e outras obras da cultura
                pop influenciaram a estética, como 'O Silo' e 'Duna'. A música é
                ritualística e foge de uma escolha nacional, porque a história a
                ser contada não tem um endereço só: é do homem enquanto espécie,
                no final do seu tempo. As coreografias trazem o peso coletivo do
                grande número de participantes. Utilizamos cenários modulares
                que permitem a transformação rápida dos diferentes ambientes,
                com forte influência do universo cinematográfico, outra marca do
                nosso trabalho. Ao celebrarmos 30 anos de história, queremos
                trazer para o palco tudo o que nos definiu enquanto companhia,
                ao longo do tempo."
              </p>
            </Col>
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
          <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        </svg>
      </div>
      <Row>
        <Col className="text-center mb-4 mt-5">
          <div className="elenco-desc-">
            <h3>Elenco - Tempus Fugit</h3>
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
              actor.temporadas.includes("2024 - Tempus Fugit")
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

export default TempusFugit;
