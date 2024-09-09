import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import espiral from "../../../assets/pecas/mambembe/mambembe.png";
export function Mambembe() {
  return (
    <>
      <Header />
      <div className="background-mambembe">
        <Row>
          <Col xs={2} md={3} className="mt-5"></Col>
          <Col xs={7} md={6} className="mt-5">
            <Image className="background-top-arauto" src={espiral}></Image>

            <Col></Col>
          </Col>
        </Row>
      </div>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            fill="#8E4FF0"
          ></path>
        </svg>
      </div>
      <Container className="background-">
        <Row>
          <Col xs={12} md={6} className="mt-5">
            {" "}
            <p className="mt-4 font-monospace">
              Nos últimos anos a arte vem surgindo como uma alternativa de
              trabalho para recuperar a capacidade criativa de jovens e
              adolescentes. O fazer artístico é, sem dúvida, um dos mais
              completos caminhos para a experiência do saber vivo. Dentre as
              linguagens artísticas a que vem ganhando mais força no meio
              educacional é o teatro, pela possibilidade que traz de viver um
              processo com a intensidade máxima, proporcionada pelo envolvimento
              de vários sentidos (visão, audição, tato, olfato); além da
              utilização da palavra, da emoção, do espaço, do movimento, do
              coletivo, da memória, da interpretação e análise. Com o teatro, o
              adolescente encontra no texto as vozes vivas das personagens que
              trazem informações reais. Nele o aluno cria um espaço/tempo tão
              real quanto aquele em que vive mas que não está limitado pelas
              regras do mundo “real”. Nele os fatos se sucedem numa seqüência
              lógica passível de ser vista, tocada, ouvida e sentida na sua
              plenitude.
            </p>
          </Col>
          <Col xs={12} md={6} className="mt-5">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2003-o-mambembe/mambembe%20(1).jpg?raw=true"
              }
              thumbnail
              fluid
            />
          </Col>
        </Row>
        <Row></Row>

        <Row>
          <Col xs={12} md={12} className="mt-5 ">
            <h2>Fases do projeto</h2>
            <p className="mt-4 font-monospace">
              Na primeira fase do projeto “Texto em cena” temos a proposta para
              abordagem do texto e da linguagem teatral. Esse trabalho será
              desenvolvido basicamente pelos professores de Língua Portuguesa em
              sala de aula, ainda que o auxílio das demais disciplinas seja de
              grande importância, particularmente, no caso de História e
              Geografia, cujos conteúdos são facilmente adaptados aos mais
              variados textos e montagens.
            </p>
            <p className="mt-4 font-monospace">
              O Festival Interno de Teatro do Ávila é um evento destinado aos
              alunos que manifestarem interesse em desenvolver um trabalho
              próprio, aplicando os conhecimentos e habilidades adquiridos em
              sala de aula. Para que a inscrição seja aceita, o grupo deverá
              apresentar o nome de um professor orientador, de qualquer
              disciplina ou período, que será responsável pela equipe nos
              trabalhos realizados dentro da escola. Após o Festival os alunos
              terão a oportunidade de escolher um dos três grupos em atividade
              na escola, para temporada de um ano:
            </p>
            <ul className="list-unstyled">
              <li className=" font-monospace">• Grupo de Teatro Tal&Pá</li>
              <li className=" font-monospace">• Grupo Uni-duni-tê</li>
              <li className=" font-monospace">
                • Grupo de Teatro Tal&Pá Júnior
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={0} md={2} className=""></Col>
          <Col xs={12} md={10} className="">
            {" "}
            <h2 className="mt-4 font-monospace">
              Grupo de Teatro TAL&PÁ - TEATRO JUVENIL OU ADULTO
            </h2>
          </Col>
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
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2003-o-mambembe/mambembe%20(4).jpg?raw=true"
              }
              fluid
              thumbnail
            ></Image>
          </Col>

          <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              {" "}
              Formado em 1994, dentro do projeto Educação por Processo de Grupo
              através do Teatro, o Grupo Tal&Pá está preparando sua oitava
              montagem, com estréia prevista para 13 de junho. A peça “O
              Mambembe”, de Arthur Azevedo, é uma peça de teatro sobre o teatro,
              numa verdadeira metalinguagem. A organização da companhia, os
              tipos que a compõem, os problemas financeiros, as dificuldades com
              as autoridades locais, com os conquistadores de província, com os
              coronéis, com o repertório, com as condições técnicas dos locais
              de representação, tudo é examinado e, como resultado final, há uma
              exaltação do trabalho dos artistas cênicos e do próprio teatro. O
              grupo, que tem quarenta integrantes do Ensino Médio, ensaia aos
              domingos, das 15h às 19h, e às sextas-feiras, das 18h às 21h.
            </p>
          </Col>
        </Row>
        <h2 className="mt-4 font-monospace">Arthur Azevedo</h2>
        <Row>
          <Col
            xs={1}
            md={1}
            className="mt-5 order-1 order-md-2 order-xl-1"
          ></Col>
          <Col xs={12} md={5} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://celiahelena.com.br/wp-content/uploads/2018/08/arturazevedo.jpg"
              }
              fluid
              thumbnail
            ></Image>
          </Col>

          <Col className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="font-monospace">
              Nascido em São Luís do Maranhão, Arthur Azevedo veio para o Rio
              movido pela paixão pelo teatro. Foi autor de dezessete revistas de
              ano, escreveu uma centena de comédias de costumes, operetas,
              sainetes, intermezzos e cançonetas, ao lado também de inúmeros
              parceiros, entre eles o próprio irmão, Aluísio de Azevedo.
            </p>
            <p className="font-monospace">
              Em seus últimos quinze anos de vida, Artur Azevedo acelerou em
              suas crônicas a inexistência do teatro nacional. Acreditando no
              futuro do nosso teatro, ele insuflou sozinho, anos a fio, uma
              campanha em favor da construção de uma casa, que oferecesse a um
              grande público os melhores espetáculos, dignificando o país e o
              município do Rio de Janeiro, então capital federal. Em 1909, o
              Theatro Municipal do Rio de Janeiro foi inaugurado, com Hino
              Nacional, e discurso de Olavo Bilac, um ano depois da morte de
              Artur Azevedo.
            </p>{" "}
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className="">
            <p className="font-monospace">
              Artur Azevedo produziu como poucos na história do teatro
              brasileiro. Soube adaptar-se sempre aos temas e aos gêneros da
              hora, buscando afinar-se com os acontecimentos políticos que
              presenciara em sua vida, assim como as transformações dos costumes
              e da cultura brasileira. O grande cenário de sua dramaturgia é o
              Rio de Janeiro. O grande personagem é o carioca, principalmente a
              média burguesia fluminense. Ele que era maranhense, e talvez o
              mais carioca dos maranhenses, com seu espírito satírico, crítico
              agudo, observador atento aos tipos característicos de uma cultura
              ainda em processo de auto-reconhecimento de sua identidade.
            </p>
            <p className="font-monospace">
              A expressão "teatro ligeiro" tenta dar conta de uma vertente do
              teatro brasileiro que se caracteriza pelos gêneros da comicidade,
              que em geral adotam um ritmo bastante ágil na escrita, com
              entradas e saídas de personagens, falas curtas, entre outros
              recursos. Em geral, a dramaturgia de Artur Azevedo utiliza-se de
              “tipos”, personagens de fácil identificação com o gosto popular,
              na medida em que apresentam características emblemáticas de uma
              estratificação social, seja no âmbito familiar ou social.
            </p>

            <p className="font-monospace">
              A expressão "teatro ligeiro" tenta dar conta de uma vertente do
              teatro brasileiro que se caracteriza pelos gêneros da comicidade,
              que em geral adotam um ritmo bastante ágil na escrita, com
              entradas e saídas de personagens, falas curtas, entre outros
              recursos. Em geral, a dramaturgia de Artur Azevedo utiliza-se de
              “tipos”, personagens de fácil identificação com o gosto popular,
              na medida em que apresentam características emblemáticas de uma
              estratificação social, seja no âmbito familiar ou social.
            </p>
          </Col>

          <blockquote className="blockquote">
            <p className="mb-5"></p>
            <footer className="blockquote-footer">
              Fábio Cordeiro,
              <cite title="Título da fonte">in INTERPALCO</cite>
            </footer>
          </blockquote>
        </Row>

        <Row>
          <h1 className="text-center mt-1">O Mambembe</h1>
          <Col xs={1} md={2} className="order-1 order-md-2 order-xl-1"></Col>
          <Col xs={12} md={10} className="order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2003-o-mambembe/mambembe%20(5).jpg?raw=true"
              }
              fluid
              thumbnail
            ></Image>
          </Col>

          <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              O Mambembe, uma comédia musical que tem por tema o próprio teatro,
              é um texto com uma temática interessante, com personagens
              atuantes, com um agudo espírito de observação e um senso crítico
              de grande comicidade. O Sentido e a origem do termo “mambembe” têm
              sido motivo de discussão. Teria vindo do quimbundo, língua
              africana dos bantos, significando algo de má qualidade, ordinário,
              ou ainda lugar deserto (versão fortemente contestada). Mas Arthur
              Azevedo se encarrega de dar ao público o significado que adotou
              pela fala do personagem Frazão, ao convidar Laudelina, atriz
              amadora, para ser a primeira dama da sua trupe, que vai partir
              para o interior do Brasil:
            </p>
            <p className="mt-4 font-monospace">
              “Mambembe é a companhia nômade, errante, vagabunda, organizada com
              todos os elementos de que um empresário pobre possa lançar mão num
              momento dado, e que vai de cidade em cidade, de vila em vila, de
              povoação em povoação, dando espetáculos aqui e ali, onde encontre
              um teatro ou onde possa improvisa-lo.” <br></br> Arthur Azevedo
              coloca todo o seu amor pelo teatro em O Mambembe. De passagem,
              ainda, há uma crítica ao desamparo em que a arte cênica e seus
              artistas são deixados pelas autoridades, uma sátira às figuras e
              aos costumes interioranos e até mesmo ao próprio teatro, dividido
              entre o amor a arte e as necessidades materiais. Uma das grandes
              peças da dramaturgia nacional.
            </p>
            <blockquote className="blockquote">
              <p className="mb-4"></p>
              <footer className="blockquote-footer">
                Clóvis Garcia
                <cite title="Título da fonte"></cite>
              </footer>
            </blockquote>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="mt-1 ">
            <Image src={""} thumbnail fluid></Image>
          </Col>
          <Col xs={12} md={8} className="mt-1 ">
            <p className="mt-4 font-monospace">
              Em sua nova temporada, o Grupo de teatro Tal&Pá propõe uma
              reflexão sobre o trabalho do ator, sobre a possibilidade de
              comunicar-se com o semelhante através da troca de idéias, imagens,
              palavras, gestos e emoções. Um divertido, fascinante, e muitas
              vezes cruel jogo que mistura ficção e realidade, consciente e
              inconsciente, sagrado e profano, amor e ódio, vida e morte. Uma
              paixão.
            </p>
          </Col>

          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>
      </Container>

      <Container>
        <Row className="backgroun-chaobrasil">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          ></Col>
        </Row>
        <Row className="">
          <Col xs={12} md={6} xl={6} className="mt-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2003-o-mambembe/mambembe%20(6).jpg?raw=true"
              }
              fluid
            />
          </Col>
          <Col xs={12} md={6} xl={6} className="mt-1">
            <p className="font-monospace">
              “O Mambembe”, com o Grupo de Teatro Tal&Pá, pretende oferecer três
              níveis de realidade ao espectador: No primeiro, um grupo de
              artistas na virada do século XIX (Não é sem propósito que a última
              fala de Frazão faça referência ao Ano Novo, estabelecendo uma
              ponte entre o passado e o presente, ainda incerto para quem vive
              da arte no Brasil) encena pequenos quadros para diferentes
              platéias no interior. No segundo nível, a vida dos atores
              confunde-se com o teatro ao mostrar a realidade por trás dos
              bastidores. No terceiro, um personagem contemporâneo passeia pela
              peça, interagindo com os atores e fazendo uma reflexão sobre o
              mistério de representar.
            </p>
            <p className="font-monospace">
              O grupo ouviu diversas sugestões de músicas que poderiam compor a
              trilha sonora e escolheu aquela com a qual mais se identificava.
              Abriu mão de uma trilha tipicamente nacional, como seria esperado
              num espetáculo de Artur Azevedo, e optou por uma remixagem moderna
              dos clássicos, mas garantiu a presença do inesquecível Villa-Lobos
              na cena da estação. A coreografia é um aspecto marcante do
              trabalho do Tal&Pá, desde a sua criação. Sempre elaborada pelos
              próprios alunos, ela determina a energia característica do
              espetáculo.
            </p>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col xs={12} md={12} className="">
            <p className="font-monospace">
              Cada ator apresentou sua proposta de figurino e maquiagem, a
              partir de cuidadosa pesquisa de época. As imagens foram
              posteriormente estilizadas para conferir ao espetáculo um caráter
              alegre e moderno, deixando sempre no ar o real momento onde a
              história se passa. Ao mesmo tempo, procuramos resgatar a
              comicidade do teatro de costumes próprio da época. O colorido
              intenso dos figurinos contrasta com o cenário neutro, transformado
              a todo momento por guarda-chuvas que se abrem e fecham sugerindo
              diferentes ambientes.
            </p>
          </Col>
        </Row>
        <Row>
          <Image
            src={
              "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2003-o-mambembe/mambembe.jpg?raw=true"
            }
            fluid
            thumbnail
          />
          <p className="font-monospace mt-2">
            A inspiração para o cenário vem dos quadros de Magritte, que revelam
            o seu desejo de “descrever o mistério do visível e do invisível”, de
            revelar, como um oráculo, a face oculta da realidade. Quando olhamos
            para um quadro de Magritte, experimentamos sempre uma surpresa, e
            por isso, rapidamente somos seduzidos. A desordem torna-se
            elegância. Temos a sensação de participar numa experiência sobre os
            objetos que nos rodeiam, assim que os nossos olhos se apercebem de
            cada um deles.{" "}
          </p>
          <p className="font-monospace">
            As cenas de teatro dentro do teatro são realizadas sobre
            praticáveis, que substituem o palco no palco. A iluminação é
            simples, como caberia ao grupo nessa real situação.
          </p>
          <p className="font-monospace">
            Várias cenas foram construídas a partir do resultado das oficinas
            realizadas no início dos trabalhos. As trocas de cena são rápidas,
            com intensa e mágica movimentação, construindo novos cenários diante
            dos olhos do espectador. No “Mambembe”, a coxia é revelada, tornando
            cúmplices público e platéia.
          </p>
        </Row>

        <Row>
          <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
            <h1>Sinopse</h1>
            <p className="mt-4 font-monospace">
              A peça “O Mambembe” de Arthur Azevedo, revela todo o seu amor pelo
              teatro. De passagem, ainda, há uma crítica ao desamparo em que a
              arte cênica e seus artistas são deixados pelas autoridades, uma
              sátira às figuras e aos costumes interioranos e até mesmo ao
              próprio teatro, dividido entre o amor a arte e as necessidades
              materiais. Uma das grandes peças da dramaturgia nacional.
            </p>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col className="text-center mb-5 mt-5">
          <div className="">
            <h3>Elenco - Mambembe</h3>
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
              actor.temporadas.includes("2003 - O Mambembe")
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

export default Mambembe;
