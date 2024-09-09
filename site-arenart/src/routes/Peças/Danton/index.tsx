import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import danton from "../../../assets/pecas/danton/danton.png";
export function Danton() {
  return (
    <>
      <Header />
      <div className="background-danton">
        <Image className="background-top-danton mt-1" src={danton}></Image>

        <Container className="background-danton">
          <Row>
            <Col className="text-center "></Col>
          </Row>
          <Row>
            <h1 className="d-flex justify-content-center align-items-center danton-title ">
              TAL & PÁ CONTA A MORTE DE DANTON
            </h1>
          </Row>
          <Row>
            <Col
              xs={9}
              md={4}
              className="mt-5 order-1 order-md-1 order-xl-1 ms-5"
            >
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/lucas%20acusacao.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={5} className="mt-5 order-2 order-md-1 order-xl-1">
              <h2>na trilha da Revolução</h2>
              <p className="mt-4 font-monospace">
                A identificação do grupo com o Teatro de Arena começou em 2004,
                com a montagem de “O Arauto da Liberdade”, inspirado no texto
                “Arena conta Tiradentes”, de 1967. Em 2006 o Tal&Pá revisitou o
                Arena para contar a história de Zumbi, outro símbolo da luta
                pela liberdade, mantendo o compromisso de criar referências
                comuns ao momento social e político no qual o Brasil se
                encontrava.
              </p>
              <p className="mt-4 font-monospace">
                O sistema coringa de atuação, em que todos os atores se revezam,
                representando quase todos os personagens, abriu novas
                possibilidades para o trabalho da Cia. Tal & Pá, formada por um
                grande número de alunos com diferentes idades e experiências no
                palco. O espaço alternativo, a proximidade com o público e a
                dinâmica das representações foram uma resposta inspiradora para
                o jovem grupo, em busca de um projeto artístico mais relevante
                dentro do seu contexto social.
              </p>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Row>
            <Col xs={12} md={5} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                A Cia. Livre deve o seu nome a um intrincado desejo:
                constituir-se numa trupe enquanto artistas-criadores, que
                revezam funções de acordo com o processo da vez. Nessa roda,
                atores escrevem e dirigem, e diretores atuam e iluminam, ou
                vice-versa, numa espécie de anti-hierarquia. Pareceu-nos muito
                apropriado que a Cia. Livre tivesse tanto sucesso na ocupação do
                Teatro de Arena em 2003, e seu projeto despertou em nossa equipe
                um enorme desejo de experimentar essa combinação. Isso só foi
                possível graças à intervenção de Gabriela Rabelo, que fez parte
                da história do Teatro de Arena e intermediou nosso contato.
              </p>
              <p className="mt-4 font-monospace">
                Quando pensou em concorrer ao edital de ocupação do Teatro de
                Arena em 2003, Cibele Forjaz imaginou um espetáculo no qual o
                grupo recontasse A Morte de Danton, de Büchner, baseado no
                processo do “Arena Conta” e do “Sistema Coringa”. Seria uma
                oportunidade para um encontro de gerações, oportunidade de dar
                voz ao grito do jovem revolucionário desencantado em pleno
                Teatro de Arena. As contradições levantadas por Büchner falavam
                diretamente com a sua geração, que sempre viu com uma nostalgia
                romântica o ideal revolucionário da geração dos anos 60, mas que
                encontrou em pleno calor da juventude o desencanto do chamado
                “fim das utopias”.
              </p>
            </Col>
            <Col xs={12} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/kamila-xadrez.jpg?raw=true"
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
              className="mt-1 order-1 order-md-2 order-xl-1"
            ></Col>
            <Col xs={10} md={10} className="mt-1 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/mata.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>

            <Row>
              <Col
                xs={12}
                md={7}
                className="mt-1 order-1 order-md-1 order-xl-1"
              >
                <Image
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/mata-2.jpg?raw=true"
                  }
                  fluid
                ></Image>
              </Col>
              <Col
                xs={12}
                md={5}
                className="mt-5 order-2 order-md-1 order-xl-1"
              >
                <h4> Um encontro com a história no centro da arena</h4>
                <p className="mt-4  fst-italic">
                  “Como ser livre, de fato, diante da desigualdade? Como romper
                  esse ciclo vicioso de violência e miséria, num país que
                  perpetua, geração a geração, a desigualdade? Que liberdade é
                  possível sem igualdade? Que igualdade é possível em uma
                  sociedade estruturada a partir da legitimação da desigualdade
                  econômica e social? Como mudar o rumo da concentração de renda
                  e de poder, através de uma política na qual a “democracia” tem
                  uma representatividade bastante duvidosa, e o interesse dos
                  grandes grupos econômicos se vê tão amplamente “representado”?
                  O que fazer com os nossos sonhos de justiça social, diante de
                  tamanha impotência?”
                </p>
                <p className="ms-5 fs-6 fst-italic">
                  Cibele Forjaz-Revista Sala Preta
                </p>
              </Col>
              <Col xs={12} md={0} className="mt-5"></Col>
            </Row>

            <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                Esse questionamento da Cia Livre é o nosso próprio
                questionamento na prática cotidiana, e assim a proposta de
                “Arena conta Danton” encaixava-se plenamente em nosso trabalho.
                Contudo, o experiente elenco da Cia. Livre era muito diferente
                da garotada de 12 a 18 anos que integra hoje o Tal&Pá. A
                dificuldade para trabalhar um projeto tão ambicioso se fez
                presente logo nos primeiros dias. Falta muitas vezes a esta
                geração o sentido da vida, a razão da existência, a razão pela
                qual crescer e enfrentar a vida, com todos os seus desafios.
                Como aprofundar essa turma em temas tão complexos para a sua
                realidade?
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
          <Col xs={12} md={4} xl={4} className="mt-5">
            <p className="font-monospace">
              No processo, cada aluno participante envolveu-se dentro dos
              limites de suas possibilidades, do seu amadurecimento e
              disponibilidade pessoal, o que num grupo grande como o Tal&Pá cria
              momentos muito heterogêneos dentro do trabalho. Mas acredito que a
              experiência como um todo contribuiu para ampliar o universo desses
              jovens, estimulando o desejo por um desenvolvimento interno que
              virá com o tempo.
            </p>
            <p className="font-monospace">
              A montagem da Cia. Tal&Pá perdeu o precioso alicerce do
              espetáculo-jogo proposto por Cibele à Cia. Livre. Seguiu o sistema
              coringa, mas abriu mão do sorteio entre os atores para a troca de
              personagens durante o espetáculo, já que a nossa estrutura não
              comportava a preparação necessária para essa demanda. Mas a
              dinâmica do “jogo” era atraente e foi introduzida num outro
              contexto, possibilitando improvisação em momentos específicos do
              espetáculo, sem a pretensão de competir com a proposta original.
            </p>
          </Col>
          <Col xs={12} md={8} xl={8} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/setembro.jpg?raw=true"
              }
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="font-monospace">
              A trilha musical não prima pela unidade. Segue a fragmentação
              proposta por Büchner e Bonassi em seus textos, privilegiando mais
              os climas do que as referências comuns. A escolha das músicas
              remete à França, joga com a Marseillaise e o Hino Nacional
              Brasileiro, ao mesmo tempo em que mistura canções clássicas
              revolucionárias da década de 70 com o protesto velado das bandas
              de Brasília do pós-revolução.
            </p>
          </Col>

          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>

        <Row>
          <Col xs={12} md={5} className="mt-5 order-2 order-md-2 order-xl-2">
            <p className="mt-4 font-monospace">
              A Cia. Tal&Pá mantém um fórum de discussão na internet, a
              princípio restrito ao grupo, onde são inseridos textos de
              pesquisa, palestras, charges, artigos e todos podem manifestar sua
              opinião, enquanto recolhem informações preciosas sobre os assuntos
              em debate. Do ponto de vista pedagógico, essa foi uma das etapas
              mais importantes do processo, por ter contribuído não apenas com
              conhecimentos específicos das áreas de História, Filosofia e
              Sociologia, mas também com o exercício da elaboração e expressão
              coerente de suas opiniões.
            </p>
          </Col>
          <Col xs={12} md={6} className="mt-5 order-1 order-md-1 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/tres.jpg?raw=true"
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
            className="mt-1 order-1 order-md-2 order-xl-1"
          ></Col>
          <Col xs={10} md={10} className="mt-1 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/circulo.jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>

          <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              Durante a produção desse espetáculo, em plena temporada
              pré-eleitoral, o grupo teve oportunidade de refletir sobre o
              panorama político daquela época e também sobre a nossa realidade,
              sobre o poder das classes dominantes, a alienação da população
              diante da corrupção latente e do cerceamento explícito dos seus
              direitos. O tema foi lançado, e o que pareceu mais importante foi
              discutir como essas questões podem vir a público, como elas podem
              se tornar visíveis, e como esses jovens podem participar da
              negociação, interlocução e disputa política nos seus dias.
            </p>
            <p className="mt-4 font-monospace">
              Arena conta Danton não é uma peça sobre revolução, mas sobre o seu
              fracasso. Contudo, nossa visão sobre ela não é pessimista:
              queremos sim, despertar nossos alunos da apatia em que se
              encontram, a partir de um final aberto que o público não vai
              comemorar. Nós acreditamos que não há nenhuma revolução que não
              tenha por base um novo estágio de consciência do seu povo. Por
              tanto, sem educação não há revolução. A revolução pela educação se
              estabelece no momento em que a sociedade democrática se dá conta
              dos seus direitos e os faz valer. Mas é necessário ter muita
              paciência, porque ainda percorreremos um longo caminho antes que
              essa trilha seja definitivamente descoberta.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={10}>
            <Image
              src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/danton.jpg?raw=true"
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={1}></Col>
        </Row>

        <Row>
          <Col className="text-center mb-5 mt-5">
            <div className="">
              <h3>Elenco - Tal & Pá conta a morte de Danton </h3>
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
              actor.temporadas.includes("2012 - Arena Conta Danton")
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

export default Danton;
