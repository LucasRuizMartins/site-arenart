import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Col, Container, Row, Image } from "react-bootstrap";
import del from "../../../assets/pecas/Longo caminho/longo-caminho.png";
import * as actorService from "../../../services/actor-services";

import "./styles.css";
import { ActorInfoDTO } from "../../../models/actors";
import CardsActor from "../../../components/CardsActor";
export function LongoCaminho() {
  return (
    <>
      <Header />
      <Row className="longo-top">
        <div className="first-bg-longo">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 0L0 0 1892.25 2114.72 1200 120z" fill="#fff"></path>
          </svg>
        </div>

        <Col xs={0} md={2}></Col>
        <Col xs={4} md={3} className="img-longo">
          <Image src={del} />
        </Col>
        <Col xs={8} md={4}>
          <h2 className="title-longo">O Longo Caminho até a fonte</h2>
        </Col>

        <div className="first-bg-longo-2">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </Row>
      <div className="">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#000"
          ></path>
        </svg>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
            <h2>Contando O longo caminho até a fonte</h2>

            <p className=" font-monospace">
              O povo imaginário das terras de Sikanda, em Fantasia, aguarda a
              Cerimônia da Roda, quando os mais velhos deixam a tribo e um jovem
              líder assume o comando, após o sacrifício de dois escolhidos, como
              determina a tradição de tempos imemoriais. A roda é quebrada
              quando o jovem líder recusa-se a fazer a escolha e parte com seus
              amigos em busca da água da vida, um tesouro precioso que libertará
              seu povo do ritual, vivendo experiências que transformarão sua
              vida. O longo caminho até a fonte é uma viagem dentro de outra
              viagem: um encontro consigo mesmo.
            </p>
            <h2>Jung e o Inconsciente Coletivo</h2>

            <p className=" font-monospace">
              Para montar a peça, o grupo iniciou a pesquisa pelo trabalho do
              psiquiatra suíço Carl Gustav Jung, que desenvolveu um sistema
              teórico chamado originalmente de “Psicologia dos Complexos”, e,
              mais tarde, “Psicologia Analítica”. Segundo Jung, os arquétipos –
              do grego arqui, arcaico, antigo e typos, padrão, matriz – são
              ideias primordiais, que existem no inconsciente.
            </p>
          </Col>

          <Col xs={12} md={6} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2002-o-longo-caminho-ate-a-fonte/espelhon.jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>
        <Row>
          <p className=" font-monospace">
            Estão presentes na mente de todos os seres humanos, sendo uma
            característica psíquica herdada. Diferente de Sigmund Freud que só
            concebia a existência de um inconsciente individual, Jung propunha
            também um setor da mente partilhado por todos os seres humanos, o
            chamado Inconsciente Coletivo, do qual os arquétipos fazem parte.
            Dito isto, estas estruturas arcaicas podem ser consideradas a
            matéria-prima dos sonhos, dos mitos e de tudo o que é criado pelo
            homem. Por estarem tão profundamente radicados no nível coletivo do
            inconsciente humano, estes arquétipos pouco mudam com o passar dos
            tempos e com a evolução das culturas. Contudo, não são estáticos e
            muito menos estagnados. Pelo contrário, renovam-se a cada momento e
            a cada momento ressurgem, sempre sob novas aparências, em cada
            época, em cada cultura e em cada país.
          </p>
        </Row>

        <Row>
          <Col xs={12} md={6} className="mt-5 ">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2002-o-longo-caminho-ate-a-fonte/longo120.jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={6} className="mt-5">
            <h2>Ritos de Passagem</h2>

            <p className=" font-monospace">
              Todas as sociedades humanas celebram. Comemoram, através de
              cerimônias e rituais, eventos importantes na vida de pessoas ou
              grupos, êxitos, alegrias e mesmo tristezas. Os rituais e
              cerimônias distinguem-se das demais atividades societárias por
              serem realizadas de maneira formal, seguindo padrões estabelecidos
              pela tradição. Distinguem-se também por sua natureza simbólica e
              por se realizarem em ocasiões específicas e períodos determinados.
              O ritual é um tipo de linguagem, um modo de dizer coisas, na
              medida em que não só incorpora, mas expressa concepções e valores
              sociais, religiosos, políticos, econômicos importantes para a
              sociedade que o pratica.
            </p>
            <p className=" font-monospace">
              Chamam-se ritos de passagem as cerimônias que marcam a passagem de
              um indivíduo ou grupo de uma fase do ciclo para outra.
              Infelizmente, nas sociedades modernas estas celebrações foram
              reduzidas – algumas delas ignoradas – e outras deturpadas. Vivemos
              nossas vidas, do berço até o túmulo, com apenas algumas poucas
              cerimônias marcando nossas transições, com batizado, casamento e
              enterro.
            </p>
            <p className=" font-monospace">
              Pode-se afirmar que os ritos de passagens remetem a marcas de
              transição que ocorrem em todas as culturas, sugerindo a ligação de
              conteúdos coletivos (inconscientes) à vida de um indivíduo
              (consciência). Para que isso ocorra, tem se que são processos
              eminentemente simbólicos e que apontam para uma nova agregação,
              isto é, uma amplificação da consciência. Por todas estas
              características, os ritos de passagem tornaram-se alvo de grande
              interesse para C.G. Jung, uma vez que sua teoria aborda o homem
              sob o prisma simbólico e pressupõe embasamento semelhante aos
              descritos para estes ritos.
            </p>
            <p className=" font-monospace">
              Os personagens foram escritos especificamente para o elenco do
              Tal&Pá, inspirados nos doze signos do horóscopo chinês, para que
              representassem diferentes tipos de personalidades. Cada um tem seu
              duplo dentro da peça, como se fossem sempre duas versões de uma
              mesma pessoa.
            </p>
            <p className=" font-monospace">
              O grupo ouviu diversas sugestões de músicas que poderiam compor a
              trilha sonora e escolheu aquela com a qual mais se identificava, a
              que mais se adequava à história, um instrumental de tambores,
              violinos e música eletrônica, com forte influência céltica.
            </p>
            <p className=" font-monospace">
              A opção pela neutralidade do cenário e figurinos pretendia
              valorizar a narrativa e a preparação corporal dos atores.
            </p>
          </Col>

          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>
        <Row>
          <p className=" font-monospace">
            Em lugar do palco italiano, optamos pelo palco de arena, a mais
            antiga forma de teatro conhecida pelo gênero humano
          </p>
          <p className=" font-monospace">
            A maquiagem era pessoal, e a maioria dos alunos escolheu padrões que
            remetem aos animês japoneses. A inspiração foi o grupo Secos &
            Molhados, que fez história na década de 70 com uma imagem dúbia,
            provocadora, andrógina. Pesada, funcionava quase como máscara.
          </p>
          <p className=" font-monospace">
            Várias cenas foram construídas a partir do resultado das oficinas
            realizadas no início dos trabalhos. O labirinto, o dragão, os
            espelhos, o vento e diversas outras figuras foram representados de
            modo coreográfico através de um intenso trabalho de expressão
            corporal desenvolvido ao longo da temporada
          </p>
          <p className=" font-monospace">
            O ritmo é vertiginoso: os viajantes enfrentam desafios que
            representam seus próprios conflitos, e a todo momento precisam fazer
            escolhas que podem mudar seus destinos, interligados numa roda sem
            fim. A própria peça representa um ciclo: a última cena remonta o
            começo, com o jovem líder tomando seu lugar no mundo adulto.
          </p>
        </Row>
      </Container>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#002fbb"
          ></path>
        </svg>
      </div>

      <section className="background-longo-caminho mt10-">
        <Container>
          <Row>
            <Col xs={1} md={0} className=""></Col>

            <Col xs={9} md={4} className="">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/Val.jpeg?raw=true"
                }
                fluid
                roundedCircle
              ></Image>
            </Col>

            <Col xs={12} md={6} className="">
              <h3>Val Oliveira - sobre Longo caminho</h3>
              <p className=" font-monospace">
                “O longo caminho até a fonte” foi a primeira peça que escrevi,
                uma estória sobre adolescência e amadurecimento, inspirada no
                livro A História Sem Fim (The Neverending History, 1979), do
                escritor alemão Michael Ende, com citações de Jorge Luis Borges,
                Mario Quintana, Rubem Alves e Andréa Havt.
              </p>
              <p className=" font-monospace">
                Basicamente, o livro traz a idéia de que o conjunto da
                imaginação, da criatividade, do sonho, do amor e da esperança
                humana (entre outros sentimentos) forma um mundo próprio,
                chamado Fantasia, um local onde tudo que já foi imaginado existe
                e é real. Metafisicamente, uma realidade conceitual, tornada
                real pelo simples fato de nós acreditarmos nela. Entre as
                influências literárias perceptíveis, a mais forte talvez seja de
                Lewis Carrol (Alice no País da Maravilhas), mas também
                encontramos referências à filosofia existencialista, ao mito do
                Eterno Retorno (“A História Sem Fim” é uma perpétua reiteração)
                e à Psicanálise (a porta do Espelho Mágico revela o inconsciente
                de quem está diante dela).
              </p>
              <p className=" font-monospace"></p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={5} className="order-2 order-md-2">
              <p className=" font-monospace">
                Do ponto de vista pedagógico, o projeto era decisivo. Permeava a
                busca da identidade em situação de conflito, o jogo do real e do
                imaginário no resgate da auto-estima e era marcado por uma
                profunda identificação do público pelos personagens, jovens
                entre quatorze e vinte anos, sua relação com os amigos, a
                rejeição à ordem estabelecida, o medo de crescer e as
                perspectivas sobre o mundo adulto. Acompanhar a transformação do
                personagem principal de O longo caminho até a fonte podia ajudar
                o adolescente a organizar a reflexão sobre o real processo de
                mudança que atravessava.
              </p>
              <p className=" font-monospace">
                A “História Sem Fim” parece dizer a todo instante que não há
                nada que mereça ser levado mais a sério que o sonho e a
                imaginação. Dentro dela, existem inúmeras histórias, e cada uma
                delas dá origem a outras histórias. Há muitas portas para
                Fantasia, muitos outros livros mágicos, porque todas as
                verdadeiras histórias são “Uma História Sem Fim”.
              </p>
            </Col>

            <Col xs={12} md={6} className="order-1 order-md-2">
              <Image
                src={
                  "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2002-o-longo-caminho-ate-a-fonte/12.jpg?raw=true"
                }
                fluid
              ></Image>
            </Col>
          </Row>

          <Row>
            <p className=" font-monospace">
              O grupo Tal&Pá aceitava o convite do livro para criar sua própria
              viagem através de Fantasia e reinventava a si mesmo. Reencontrava
              velhas paisagens, descobria novas aventuras e convidava o público
              a experimentar o caminho em busca da Água da Vida. Afinal, alguém
              precisava cumprir a promessa de Bastian, o herói do livro. Mais do
              que isso, o processo e seus resultados representavam tudo o que eu
              acreditava dentro de um projeto artístico e social. Trouxeram
              pessoas que marcaram minha vida para sempre e que ainda hoje são
              multiplicadoras desse trabalho.
            </p>

            <Image src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2002-o-longo-caminho-ate-a-fonte/grupo.jpg?raw=true"></Image>
          </Row>

          <Row className="mt-5">
            <Col
              xs={12}
              md={12}
              className="order-1 order-md-2 mt-5 text-center mb-5"
            >
              <p className=" font-monospace mt-5">
                Mas isso é uma outra história, e terá de ser contada em outra
                ocasião...
              </p>
            </Col>
          </Row>
          <Row>
            {" "}
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2002-o-longo-caminho-ate-a-fonte/longo-coletivo.jpg?raw=true"
              }
              fluid
            ></Image>
          </Row>
        </Container>
      </section>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#002fbb"
          ></path>
        </svg>
      </div>

      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <h1> Elenco - Longo caminho</h1>
        <Row className="justify-content-center align-items-center">
          {actorService.playsSeason
            .slice()
            .filter((actor: ActorInfoDTO) =>
              actor.temporadas.includes("2002 - O Longo caminho até a fonte")
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

export default LongoCaminho;
