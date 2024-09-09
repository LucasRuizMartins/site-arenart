import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import espiral from "../../../assets/pecas/arauto/arauto.jpg";
export function Arauto() {
  return (
    <>
      <Header />
      <div className="background-arauto">
        <Row>
          <Col xs={5} md={3} className="mt-5">
            <Image className="background-top-arauto" src={espiral}></Image>
          </Col>
          <Col xs={7} md={6} className="mt-5">
            <h1 className="arauto-title">Arauto da Liberdade</h1>
            <p className=" arauto-subtitle">"Dez vidas eu tivesse...</p>
            <p className="arauto-subtitle arauto-subtitle-2">Dez vidas eu daria"</p>
            <Col></Col>
          </Col>
        </Row>

        <Container className="background-arauto">
          <Row>
            <Col className="text-center mb-4 mt-5"></Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="mt-5">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/digitalizar0004.jpg?raw=true"
                }
                thumbnail
                fluid
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mt-5 ">
              <p className="mt-4 font-monospace">
                O Arauto da Liberdade é uma adaptação da peça Arena Conta
                Tiradentes, escrita e encenada pelo Teatro de Arena em 1967.
                Marco na modernização do teatro brasileiro e um dos palcos mais
                importantes do país, o Teatro de Arena de São Paulo completa
                meio século de existência, entre as comemorações dos 450 anos de
                Sampa. Aproveitando a festa, o Grupo Tal&Pá celebra seus dez
                anos reencenando o polêmico Arena conta Tiradentes, com o
                desafio de criar referências comuns ao momento social e político
                no qual o Brasil se encontra nos dias de hoje.
              </p>
              <h2>Teatro de Arena</h2>
              <p className="mt-4 font-monospace">
                O Teatro de Arena não pode ser visto apenas como um fenômeno dos
                anos 60, mas também como resultado de uma série de
                acontecimentos de natureza artística ocorrida em São Paulo no
                período que vai da instauração do regime democrático, após a
                queda do Estado Novo, em 1945, até o golpe militar de 1964.
              </p>
            </Col>
            <Col xs={12} md={6} className="mt-5 ">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/Arauto9.jpg?raw=true"
                }
                thumbnail
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>
          <Row>
            <p className="mt-4 font-monospace">
              Em 1956 surgiu o Teatro de Arena de São Paulo, dirigido
              inicialmente por José Renato e depois por Augusto Boal, com o
              compromisso de vincular o teatro à nossa realidade, alcançando uma
              linguagem e uma interpretação essencialmente brasileiras, além de
              desmistificar o preconceito da falta de público para o autor
              nacional. Em 1958, o grupo obteve o primeiro grande êxito, com a
              montagem de Eles não usam black tie, de Gianfrancesco Guarnieri.
              Foi o início de um laboratório de dramaturgia que produziu textos
              encenados um após outro, sempre com o propósito de examinar um
              aspecto da realidade do país, com temas populares como cangaço,
              futebol, trabalho nas fábricas, etc. Nessa fase o Arena inicia sua
              concepção de cenografia, liderada sobretudo por Flávio Império.
            </p>
          </Row>
          <Row>
            <Col
              xs={1}
              md={1}
              className="mt-5 order-1 order-md-2 order-xl-1"
            ></Col>
            <Col xs={12} md={10} className="mt-5 order-1 order-md-2 order-xl-1">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/digitalizar0001.jpg?raw=true"
                }
                fluid
                thumbnail
              ></Image>
            </Col>

            <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
              <p className="mt-4 font-monospace">
                Outra atividade importante do grupo foram os musicais
                intitulados “bossarena”, como A criação do mundo segundo Ari
                Toledo, Tempo de Guerra, Um americano em Brasília, Arena conta
                Castro Alves e Arena Conta Zumbi.
              </p>
              <p className="mt-4 font-monospace">
                A fase mais recente começou com a peça Arena Conta Tiradentes,
                dentro do sistema coringa, proposto como uma forma permanente de
                fazer teatro. Tratava-se de apresentar dentro do próprio
                espetáculo a peça e sua análise, desenvolvendo-o em dois níveis
                diferentes: o da fábula, com todos os recursos teatrais, e o da
                conferência, com o "coringa" como interprete e explicador do
                texto. A presença de duas funções opostas - a protagônica, a
                cargo dos atores, e a explicativa, a cargo do "coringa",
                permitiria uma maior possibilidade de variação formal, com a
                inclusão de todos os estilos, já que cada cena poderia ser
                resolvida de modo particular, dando ênfase especial na
                elaboração das "explicações", de forma que o seu estilo viesse a
                constituir o estilo geral do espetáculo e evitasse que o
                resultado final redundasse numa proposição anárquica,
                abrasileirando-se de certa forma o teatro épico de Brecht.
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mt-5 ">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/arauto1.jpg?raw=true"
                }
                roundedCircle
                thumbnail
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={6} className="mt-5 ">
              <h2>Arena conta Tiradentes – o roteiro original</h2>
              <p className="mt-4 font-monospace">
                O texto Arena conta Tiradentes, de Gianfrancesco Guarnieri e
                Augusto Boal, utiliza-se da investigação jornalística para
                comprovar e resgatar a história do herói revolucionário
                transformado em mártir da independência, construindo uma
                história mítica com estrutura de fábula, que confere um
                delicioso sabor à trama. A peça foi considerada pela crítica da
                época um marco na história da dramaturgia nacional. Constitui-se
                no auge da fase dos musicais do Teatro de Arena e de sua
                inserção político mobilizatória. É importante lembrar que esta
                peça foi concebida quando o país estava submetido à ditadura
                militar e o Arena era uma das vozes do meio artístico contra a
                repressão.
              </p>

              <p className="mt-4 font-monospace">
                No enredo original, a Inconfidência é vista pelo ângulo dos
                acontecimentos dos anos 60; ou seja, não há o objetivo de
                retratar figuras ou episódios em sua veracidade histórica.
                Trata-se, sim, de refazer a verdade histórica para enquadrar
                fatos, tipos e personagens relativas ao movimento anterior e
                posterior a 1964. Considerada uma revolução malograda porque
                obra de intelectuais distantes do povo, a Inconfidência do Arena
                apostava tudo na adesão empática em prol da luta armada.
              </p>

              <p className="mt-4 font-monospace">
                Em 2004, quase quarenta anos depois, o novo quadro político
                resultante das urnas reflete o desejo brasileiro de enfrentar o
                problema social e adotar uma posição mais afirmativa na política
                externa, mas a nação democrática acossada pelo neo-colonialismo,
                lutando para atender o pagamento de seus credores, mostra que a
                temática da Inconfidência continua atual.
              </p>
            </Col>

            <Col xs={12} md={0} className="mt-5"></Col>
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
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="#151515"
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
          <Col xs={12} md={6} xl={6} className="mt-5">
            <p className="font-monospace">
              Os heróis são símbolos cheios de ideologias e pontos de
              identificação coletiva. Atingem a alma dos cidadãos e estão a
              serviço da legitimação dos regimes políticos. Quando o povo não
              participa da implantação de um novo regime, há de se compensar
              isto com a mobilização simbólica. Mas por que Tiradentes foi
              escolhido como herói?
            </p>

            <p className="font-monospace">
              Tiradentes acrescenta para nós a parcela que falta na tríade
              imortalizada pela Revolução Francesa: a liberdade. Figura polêmica
              em nossa história, foi um dos poucos heróis realmente populares da
              luta pela Independência do Brasil. A influência das idéias
              revolucionárias francesas e da Independência dos Estados Unidos,
              ocorrida em 1776, agitou grupos de intelectuais e membros das
              elites das colônias das três Américas, no final do século XVIII.
              Os acontecimentos na França de 1789, como a queda da Bastilha e a
              declaração dos direitos do homem e do cidadão, marcaram o início
              de uma nova era e estabeleceram uma nova ordem entre os povos. No
              Brasil, estava um pleno andamento a conspiração mineira, nascida
              no interior das Gerais e inspirada na vil exploração portuguesa
              que sugava nossas riquezas.
            </p>
          </Col>
          <Col xs={12} md={6} xl={6} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/arauto3.jpg?raw=true"
              }
              roundedCircle
            />
          </Col>
        </Row>
        <Row>
          <p className="font-monospace">
            Depois de mais de 80 anos de mineração do ouro, as jazidas se
            esgotavam. O cansaço das minas serviu para estimular conflitos entre
            a colônia e a metrópole: Portugal queria mais e mais o rico metal, a
            ser obtido à força dos mineiros, por meio de um violento confisco
            chamado "derrama". Na sede da Capitania das Minas Gerais, Vila Rica
            - hoje Ouro Preto -, foi ganhando corpo a primeira grande tentativa
            de emancipação do Brasil. <br />
            <br />
            Os principais líderes da Inconfidência foram Tomás Antônio Gonzaga,
            Cláudio Manuel da Costa, Alvarenga Peixoto, José Álvares Maciel e
            Joaquim José da Silva Xavier, o Tiradentes. Eles aguardavam apenas a
            decretação da derrama, prevista para fevereiro de 1789, para colocar
            seus planos em prática. A conspiração foi denunciada por Joaquim
            Silvério dos Reis, o movimento desmantelado e os participantes
            punidos sob as ordens do poderoso intendente da rainha de Portugal.
            Os inconfidentes foram presos e enviados para a Ilha das Cobras. O
            julgamento se arrastou até 1792, quando onze homens foram condenados
            à morte. Desses, só o alferes Joaquim José da Silva Xavier foi
            executado.
          </p>
          <p className="font-monospace">
            A prisão de Tiradentes ocorreu em 10 de maio de 1789, no Rio de
            Janeiro. O alferes Joaquim José da Silva Xavier era um verdadeiro
            representante das camadas médias da população, um dos grandes
            agitadores do movimento inconfidente. Por isso, para ele, não houve
            perdão. Na manhã de 21 de abril de 1792, numa cerimônia pública no
            Rio de Janeiro, marcada por discursos e aclamações à rainha,
            Tiradentes foi enforcado. Seu corpo foi esquartejado e sua cabeça
            espetada em um alto poste de Vila Rica. Isso, porém, não foi
            suficiente para reprimir os ideais libertários no Brasil. Esquecida
            durante os anos do Império brasileiro, a memória de Joaquim José foi
            revalorizada a partir da Proclamação da República, em 1889. Os
            republicanos o colocaram como herói nacional e mártir da liberdade.
          </p>
        </Row>

        <Row>
          <Image
            src={
              "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/digitalizar0005.jpg?raw=true"
            }
            fluid
            thumbnail
          />{" "}
          <h2>A Nova colônia</h2>
          <p className="font-monospace">
            Passados 212 anos da execução de Tiradentes, a pátria mãe continua
            enfrentando dificuldades em sua dramática luta para fugir do
            subdesenvolvimento. O Brasil, lamentavelmen-te, é um bom exemplo de
            país que tem aumentado substancialmente sua competitividade e
            inserção na economia global às custas de um notável incremento das
            filas de desempregados. <br />
            Os brasileiros são vítimas de uma carga tributária injusta e
            indecente. O seu peso é superior à carga tributária do Japão e dos
            Estados Unidos. Em 2002, de tudo que foi produzido no País, em
            termos de bens e serviços, o Estado Brasileiro, mediante os
            tributos, apropriou-se de pouco mais de um terço. Os principais
            colégios eleitorais do país, São Paulo e Minas Gerais, continuam
            governados por mãos conservadoras. O poder econômico é dominado pela
            oligarquia financeira e a orientação econômica do país segue a
            cartilha do Fundo Monetário Internacional, que estabelece
            condicionamentos estruturais. Em resumo, a “derrama” continua.
          </p>
          <p className="font-monospace">
            A possibilidade de aprovação da ALCA constitui uma ameaça suspensa
            sobre nossas cabeças. Mais do que "livre comércio", deve-se falar de
            anexação ou neo-colonialismo, onde os representantes da nova
            metrópole traçam regras unilaterais para defender seus interesses.
            Mais do que tratado, estamos diante de uma imposição do norte sobre
            os países empobrecidos do sul. Mais do que negociação, o que está em
            jogo são as estratégias econômicas, financeiras e militares do
            Império. Esse estado de coisas agrava ainda mais a dependência
            externa da América Latina em relação ao capital financeiro,
            compromete o destino dos povos e aprofunda as dívidas sociais dos
            setores excluídos da população. <br /> O risco exige imediata tomada
            de posição e aponta para a necessidade do envolvimento de todos na
            construção de uma nova sociedade: justa, plural, solidária e
            fraterna. É necessário que os cidadãos participem na busca de
            alternativas ao modelo vigente. Adaptar as tecnologias e o potencial
            econômico para que sirvam às necessidades humanas é a tarefa com que
            nos defrontamos. Esta tarefa exige inteligência social, e não
            depende da chegada ao poder de uma classe ou de um personagem
            redentor. Nossos jovens cidadãos precisam ser desalienados para que
            percebam sua importância nesse processo, desacorrentando-se da
            certeza de sua inércia social. Precisam tornar-se críticos atentos
            da condição de vida dos indivíduos e das possibilidades de
            transformação dessas mesmas condições.
          </p>
          <p className="font-monospace">
            “Se todos quisessem, poderíamos fazer do Brasil uma grande Nação”
            Esse foi o ideal de Tiradentes e do Teatro de Arena, cada um ao seu
            tempo. Em 2004, ano em que o Tal&Pá comemora 10 anos de existência,
            a história continua e o público tem a chance de rever essa obra,
            interpretada por atores adolescentes da comunidade de Artur Alvim.
            De algum modo, eles esperam dar a sua contribuição.
          </p>
        </Row>

        <Row>
          <Col xs={12} md={4} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/arauto2-.jpg?raw=true"
              }
              fluid
              thumbnail
            ></Image>
          </Col>

          <Col xs={12} md={8} className="mt-5 order-2 order-md-1 order-xl-1">
            <h1>Os sons que vêm das Minas</h1>
            <p className="mt-4 font-monospace">
              Há quem diga que a música de Minas evoca todos as formas de
              sentimentos da alma. Os sons que vem de Minas são melhores para
              contar a sua própria história, fluindo em muitas ramagens pelos
              vales, campos, montanhas, veredas e espaços, a reluzir estrelas de
              várias pontas. Alguém já disse que o tempo passa mais devagar em
              Minas... De onde vem essa infinidade de tendências da música de
              Minas? Decerto, essa reunião de tendências surgiu com o batuque
              vindo da África, célula-mãe da manifestação musical popular mais
              importante do país e dele surgiram ramos, afluentes, tendências
              que se espalharam por todo o território. O ambiente urbano da
              mineração juntou-se aos rítmos rurais vindos da Bahia e
              adicionados à influência européia forjaram a base do samba surgido
              na Bahia e Rio de Janeiro. No fim do século XVIII e começo do
              século XIX, floresceu nas cidades mineiras uma geração de
              compositores responsáveis pela criação da Música Barroca de Minas,
              contemporânea da arte do Aleijadinho e da poesia dos
              inconfidentes.
            </p>
            <p className="mt-4 font-monospace">
              Em nossa época, a música mineira traz os diferentes sotaques do
              mundo. Reunindo-se a outras tendências, resultou na música sem
              rótulos do Clube da Esquina e influenciou vertentes vanguardistas
              que vão do som percussivo do Uakti ao pop-rock do Skank e Jota
              Quest, passando pela música de raiz e expressões dialéticas do
              Vale do Jequitinhonha, Norte de Minas e das Gerais, emoldurada
              pelas carrancas que singraram o Velho Chico e pelo sul-mineiro
              impregnado do sotaque paulista. Entre tantas possibilidades, o
              Tal&Pá escolheu como trilha os sons experimentais do Uakti,
              reconhecido no Brasil e no exterior como um dos principais e mais
              originais trabalhos de percussão. Para o Tal&Pá, a música é um
              elemento essencial na encenação, ocupando não apenas a função de
              ligação entre cenas como, notavelmente, criando a atmosfera do
              espetáculo. A música minimalista do Uakit casa-se perfeitamente
              com a proposta apresentada. Vale lembrar que o trabalho
              coreográfico está presente desde a formação do grupo Tal&Pá como
              uma de suas principais características e é idealizado sempre pelos
              próprios alunos.
            </p>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col className="text-center mb-5 mt-5">
          <div className="">
            <h3>Elenco - O Arauto da Liberdade</h3>
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
              actor.temporadas.includes("2004 - Arauto da Liberdade")
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

export default Arauto;
