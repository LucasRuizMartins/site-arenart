import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import espiral from "../../../assets/pecas/insane/fundo.png";
export function Insane() {
  return (
    <>
      <Header />
      <div className="background-insane">
        <Image className="background-top-insane" src={espiral}></Image>

        <Container className="background-insane">
          <Row>
            <Col className="text-center mb-4 mt-5"></Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2016-insane/cartaz.jpg?raw=true"
                }
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                Quem pode garantir quem é louco e quem é são nesse mundo?
                Acreditar-se absolutamente lúcido, em qualquer circunstância, já
                não é um traço de desequilíbrio? E se a loucura for apenas um
                estado de espírito? Perdido num corredor entre a realidade e o
                delírio, Zach precisa descobrir o caminho para reencontrar a si
                mesmo. INSANE é o mais novo trabalho da Cia. de Teatro Tal&Pá,
                inspirado nos livros “A vantagem de ser invisível”, de Stephen
                Chbosky e “Garota Interrompida”, de Susanna Kaysen, sobre
                pessoas em busca do seu lugar no mundo.
              </p>
              <p className="mt-4 font-monospace">
                Diante de um vazio existencial crescente que se alastra através
                do reino digital habitado pela maioria. Existem aqueles com um
                potencial enorme para brilhar no mundo real, alguns desses não
                encontram como brilhar diante do tédio da vida cotidiana. Outros
                precisam desesperadamente descobrir quem são, antes de
                encontrarem seu lugar no mundo. Em Insane nós nos encontramos em
                uma viagem pessoal e coletiva com os atores, tentamos dissolver
                as barreiras entre o que é considerado normal e o insano. A
                discussão não trata apenas de desequilíbrios mentais, mas de
                tudo o que é considerado diferente na sociedade, seja no modo de
                vestir, nas questões de gênero ou na expressão artística de cada
                um.
              </p>
            </Col>

            <Col xs={12} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2016-insane/pb1.JPG?raw=true"
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
            <Col xs={10} md={10} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2016-insane/Insane10.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
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
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,288L6.2,256C12.3,224,25,160,37,128C49.2,96,62,96,74,133.3C86.2,171,98,245,111,234.7C123.1,224,135,128,148,80C160,32,172,32,185,58.7C196.9,85,209,139,222,181.3C233.8,224,246,256,258,266.7C270.8,277,283,267,295,224C307.7,181,320,107,332,69.3C344.6,32,357,32,369,64C381.5,96,394,160,406,192C418.5,224,431,224,443,218.7C455.4,213,468,203,480,170.7C492.3,139,505,85,517,58.7C529.2,32,542,32,554,69.3C566.2,107,578,181,591,186.7C603.1,192,615,128,628,96C640,64,652,64,665,101.3C676.9,139,689,213,702,234.7C713.8,256,726,224,738,192C750.8,160,763,128,775,101.3C787.7,75,800,53,812,80C824.6,107,837,181,849,202.7C861.5,224,874,192,886,154.7C898.5,117,911,75,923,90.7C935.4,107,948,181,960,224C972.3,267,985,277,997,277.3C1009.2,277,1022,267,1034,218.7C1046.2,171,1058,85,1071,90.7C1083.1,96,1095,192,1108,197.3C1120,203,1132,117,1145,85.3C1156.9,53,1169,75,1182,96C1193.8,117,1206,139,1218,133.3C1230.8,128,1243,96,1255,112C1267.7,128,1280,192,1292,224C1304.6,256,1317,256,1329,229.3C1341.5,203,1354,149,1366,144C1378.5,139,1391,181,1403,186.7C1415.4,192,1428,160,1434,144L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <Row className="backgroun-chaobrasil">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          ></Col>
        </Row>
        <Row className="">
          <Col xs={6} md={6} xl={6} className="mt-5">
            <p className="font-monospace">
              Construímos a narrativa a partir de duas histórias dentro dessa
              temática e que geraram filmes de sucesso no cinema: “As vantagens
              de ser invisível”, de Stephen Chbosky, e “Garota Interrompida”, de
              Susanna Kaysen. O grupo também assistiu “Bicho de Sete Cabeças”,
              “Se enlouquecer, não se apaixone”, “A Noiva Cadáver”, entre outras
              referências. A costura foi realizada com intervenções dos alunos,
              textos de pesquisa e depoimentos pessoais.
            </p>

            <p className="font-monospace">
              O espaço cênico foi organizado como um corredor, e a plateia
              disposta nas laterais, inserida nesse espaço, preenchido por
              módulos e praticáveis inspirados nos trabalhos de Tim Burton. O
              espetaculo possuia uma atmosfera surreal com plano entre realidade
              e alucinação, que muitas vezes se confundem por não haver uma
              linha óbvia entre elas. As portas criam distorção a partir de suas
              linhas espirais, arrematando o cenário perturbador.
            </p>
          </Col>
          <Col xs={6} md={6} xl={6} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2016-insane/beijo.jpg?raw=true"
              }
              fluid
            />
          </Col>
        </Row>
      </Container>



      <Row>
        <Col className="text-center mb-5 mt-5">
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
              actor.temporadas.includes("2015 - Insane")
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

export default Insane;
