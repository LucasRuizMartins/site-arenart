import {
  Carousel,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./styles.css";
import onda from "../../assets/util/onda-tep.svg";
import logo from "../../assets/logo-talepa.png";
import RevealText from "../../components/Utils/RevealText";
import OverlayBtn from "../../components/Utils/OverlayBtn";
import returnIcon from "../../assets/util/return.svg";
export function About() {
  return (
    <>
      <section className="about-section">
        <section className="first-part">
          <Nav>
            <Nav.Link href="/">
              <Image className="botao-voltar" src={returnIcon}></Image>
            </Nav.Link>
          </Nav>
          <Container style={{ overflow: "hidden" }}>
            <RevealText>
              <h2 className="text-review">é possível mudar o mundo?</h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review">Talvez não...</h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review">Mas podemos mudar as pessoas ! </h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review">
                E torcer para elas mudarem o mundo ...
              </h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review">Aos poucos ... </h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review">Nossa história começa a 30 anos </h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review ">Com um Grupo de Jovens </h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review ">
                {" "}
                E trinta anos depois, quantos grupos existiram?{" "}
              </h2>
            </RevealText>
            <RevealText>
              <h2 className="text-review  ">
                {" "}
                Desejamos acreditar que ainda somos um só grupo
              </h2>
            </RevealText>
          </Container>
          <div className="image-review">
            <RevealText>
              <Image src={logo} fluid />
            </RevealText>
          </div>{" "}
        </section>{" "}
      </section>
      <div>
        <Image className="wave" src={onda} fluid />
      </div>
      <section className="secound-part">
        <Row>
          <Col>
            <p className="text-about">
              Poucas iniciativas culturais em nossa região tiveram tanto êxito
              quanto o projeto “Educação por processo de grupo através do
              Teatro”. Durante quatorze anos, o Núcleo de Teatro Ávila,
              responsável pelo projeto, através da “Cia. Juvenil de Teatro
              Tal&Pá”, representou Artur Alvim e a Escola Estadual Professora
              Maria Augusta de Ávila em mais de 20 festivais, dentro e fora da
              cidade de São Paulo, com mais de 100 indicações e premiado cinco
              vezes como o melhor do teatro estudantil no Estado.
              <br />
              <br />
              Em 2007, com o intuito de ampliar as possibilidades artísticas do
              projeto e estender a oportunidade a um maior número de
              participantes, a direção do Núcleo de Teatro Ávila reuniu
              professores, colaboradores, pais e ex-alunos para fundar o Centro
              Cultural ArenArt, associação sem fins lucrativos que reúne
              crianças e adolescentes de Artur Alvim, Vila Nhocuné, COHAB 1 e
              outras localidades, trazendo para a comunidade mais duas
              companhias de teatro, música e dança.
              <br />
              <br />
            </p>
          </Col>
        </Row>

        <div>
          <p className="text-about">
            O grupo Tal&Pá surgiu a partir de um evento escolar anual chamado “A
            Casa do Terror”, que angariava fundos durante as festas juninas.
            Desfazer o grupo ao final do evento criava um inevitável sentimento
            de frustração. Era evidente a necessidade de um espaço maior para
            que estes jovens pudessem se expressar. De sua própria iniciativa,
            um texto inspirado num musical feito para o cinema nos anos oitenta
            transformava-se no primeiro roteiro de teatro da escola.
          </p>
          <p className="text-about">
            O que não passava de uma atividade despretensiosa alcançou um
            relativo sucesso e consolidou-se como um projeto bem sucedido.
            Incorporou a pesquisa do texto, contexto histórico, cenário,
            figurino. Buscava a “alfabetização” na linguagem do mundo, nas
            diferentes formas de expressão que garantem a comunicação dos
            indivíduos entre si e com o mundo ao redor, mas também a linguagem
            cênica nos seus diferentes aspectos.
          </p>
        </div>
        <Row>
          <Col className="">
            <Carousel>
              <Carousel.Item interval={2400}>
                <Image
                  className="d-block w-100 carousel-img-play"
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/1994-dirty-dancing/dirty-dancing.jpg?raw=true"
                  }
                  alt="First slide"
                  fluid
                />

                <Carousel.Caption>
                  <div className=""></div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2400}>
                <Image
                  className="d-block w-100 carousel-img-play"
                  src={
                    "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/1994-dirty-dancing/dirty-dancing2.jpg?raw=true"
                  }
                  alt="Second slide"
                  fluid
                />
                <Carousel.Caption>
                  <div className="d-flex justify-content-center"></div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <div className="overlay-btn">
          <OverlayBtn
            btnText={"mais a respeito da foto"}
            text={"Primeiro Espetaculo da cia de teatro Tal&Pá 1994"}
            title={"Dirty Dancing"}
            color={"secondary"}
          />
        </div>

        <Row>
          <Col xs={12} md={8} className="p-4 order-xs-1 order-md-1">
            <p className="text-about">
              O nome Tal&Pá, uma gíria popular, foi escolhido pelos alunos ainda
              no primeiro ano do grupo, mas foi só em 1998 que as camisetas
              azuis, tradicionais uniformes do grupo, começaram a circular pelo
              colégio. Naquele ano, misturando capoeira e coreografias criadas
              pelos alunos, o Tal&Pá contou a saga de jovens vivendo em prédios
              abandonados na periferia de São Paulo, em quadros interligados
              pela poesia urbana de Renato Russo. O grupo classificou-se para o
              Festival Estadual de Teatro Estudantil de Tatuí, promovido pela
              Secretaria de Cultura, respeitado como um dos mais significativos
              do país, dentro de sua proposta estudantil.
            </p>

            <p className="text-about">
              Diante daquela nova realidade, a despeito de sua importância
              enquanto trabalho de formação de grupo, ficava evidente a
              fragilidade do processo de criação teatral desenvolvido pelo
              Tal&Pá. A oportunidade de trocar experiências com profissionais
              das mais variadas vertentes foi enriquecedora e muito contribuiu
              para o aprimoramento do trabalho. O FETESP, através dos debates e
              cursos promovidos, abriu as portas para uma nova experiência
              teatral. Mais do que isso, formou amigos e parceiros que serão
              lembrados por toda a vida.
              <br />
            </p>
            <p className="text-about">
              Entre 1994 e 2001, o grupo realizou seis montagens. Mais de
              duzentos alunos do Ensino Médio já haviam integrado o elenco fixo
              do Tal&Pá, e seu processo de entrada, aprendizagem e saída do
              grupo assemelhava-se cada vez mais a um ritual de passagem. A
              montagem de “O longo caminho até a fonte”, inspirada no livro “A
              História sem Fim”, de Michael Ende, consolidou essa
              característica, que passou a ser referência do nosso trabalho.
              Essa temporada contribuiu com a formação de colaboradores que
              permanecem até os dias de hoje.
              <br />
            </p>
            <br />
          </Col>
          <Col xs={12} md={4} className=" order-xs-2 order-md-3">
            <Image
              src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/camisa.jpg?raw=true"
              fluid
            />
          </Col>
        </Row>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="negative-margin-bottom"
        >
          <path
            fill="#000"
            fill-opacity="1"
            d="M0,224L8.9,224C17.8,224,36,224,53,213.3C71.1,203,89,181,107,197.3C124.4,213,142,267,160,261.3C177.8,256,196,192,213,138.7C231.1,85,249,43,267,64C284.4,85,302,171,320,181.3C337.8,192,356,128,373,90.7C391.1,53,409,43,427,37.3C444.4,32,462,32,480,37.3C497.8,43,516,53,533,96C551.1,139,569,213,587,213.3C604.4,213,622,139,640,122.7C657.8,107,676,149,693,154.7C711.1,160,729,128,747,122.7C764.4,117,782,139,800,165.3C817.8,192,836,224,853,240C871.1,256,889,256,907,224C924.4,192,942,128,960,117.3C977.8,107,996,149,1013,170.7C1031.1,192,1049,192,1067,165.3C1084.4,139,1102,85,1120,64C1137.8,43,1156,53,1173,96C1191.1,139,1209,213,1227,213.3C1244.4,213,1262,139,1280,112C1297.8,85,1316,107,1333,133.3C1351.1,160,1369,192,1387,208C1404.4,224,1422,224,1431,224L1440,224L1440,320L1431.1,320C1422.2,320,1404,320,1387,320C1368.9,320,1351,320,1333,320C1315.6,320,1298,320,1280,320C1262.2,320,1244,320,1227,320C1208.9,320,1191,320,1173,320C1155.6,320,1138,320,1120,320C1102.2,320,1084,320,1067,320C1048.9,320,1031,320,1013,320C995.6,320,978,320,960,320C942.2,320,924,320,907,320C888.9,320,871,320,853,320C835.6,320,818,320,800,320C782.2,320,764,320,747,320C728.9,320,711,320,693,320C675.6,320,658,320,640,320C622.2,320,604,320,587,320C568.9,320,551,320,533,320C515.6,320,498,320,480,320C462.2,320,444,320,427,320C408.9,320,391,320,373,320C355.6,320,338,320,320,320C302.2,320,284,320,267,320C248.9,320,231,320,213,320C195.6,320,178,320,160,320C142.2,320,124,320,107,320C88.9,320,71,320,53,320C35.6,320,18,320,9,320L0,320Z"
          ></path>
        </svg>
        <Row className="tertiary-part">
          <Col xs={12} md={6} className="">
            <Image
              src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/ARAUTO2.JPG?raw=true"
              fluid
            />
          </Col>
          <Col xs={12} md={5} className="p-4 ">
            <p className="text-about text-white">
              O amadurecimento veio em 2004, com a produção do espetáculo “O
              Arauto da Liberdade”, despertando a paixão pelo Teatro de Arena e
              por temas mais engajados na realidade nacional. Essa fase foi
              marcada por outros dois trabalhos: “O Último Carro” e “Arena conta
              Zumbi”. Ameaçada pela perda do seu espaço de trabalho (o Teatro
              Ávila permaneceu fechado por três anos, por falta de manutenção),
              a companhia começou a fazer as malas, ao mesmo tempo em que
              constituía o Centro Cultural ArenArt. Mas uma reforma inesperada,
              a participação de amigos improváveis e mudanças na direção da
              escola modificaram os planos na virada de 2008. O Centro Cultural
              ArenArt e o Conselho da EE Professora Maria Augusta de Ávila
              firmaram um acordo de parceria e utilização do espaço público para
              que o projeto continuasse ali. “O que eu vi, o que nós veremos”, o
              espetáculo da temporada de 2008, celebrou sua permanência e levou
              sua mensagem a centenas de pessoas: “Quem não sonha, apenas
              sobrevive”.
            </p>

            <p className="text-about text-white">
              “Até onde a vista alcança”, de 2009, trouxe ao teatro Ávila os
              fundadores da cadeira de Artes Cênicas da Unicamp. Nesse período,
              recebemos alunos da Escola de Comunicação e Artes da USP e de
              outras universidades, que realizaram aqui seus estágios e
              trabalhos de conclusão de curso, numa nova oportunidade de troca
              de experiências e aperfeiçoamento. Em 2010, o Centro Cultural
              ArenArt firmava seu primeiro convênio com a Secretaria de Estado
              da Cultura.
              <br />
            </p>
          </Col>
        </Row>
        <Row className="tertiary-part">
          <Col xs={12} md={5} className="p-4 ">
            <p className="text-about text-white">
              Outros festivais passaram a fazer parte do nosso calendário, mas o
              FETESP, sem dúvida, contribuiu de muitas formas para o caminho
              trilhado pela Cia. Tal&Pá. E foi um dos muitos encontros
              proporcionados pelo festival que nos levou à aventura da temporada
              2012, de volta ao teatro de Arena. Na busca de um projeto
              artístico mais relevante dentro do seu contexto social, Arena
              conta Danton reacendeu no grupo o desejo de mudança e a saudável
              rebeldia que sempre foi sua marca. E o Tal&Pá continuaria nesse
              caminho até que a pandemia fechasse novamente as portas do nosso
              teatro, em 2020.
            </p>

            <p className="text-about text-white">
              Não sei se alguém pode explicar com clareza o que esse período
              representou para todos nós, que temos a arte como parte das nossas
              vidas. Após vinte e seis anos de trabalho, a companhia se desfazia
              rapidamente com a dificuldade de acesso online que os alunos da
              rede pública de ensino experimentavam. Mesmo assim, corajosamente,
              o grupo chegou ao seu vigésimo segundo espetáculo, de modo
              virtual, encenando Drummond com seu “Flor, telefone, moça”, conto
              de terror psicológico de 1951. Apesar do processo peculiar, a
              produção garantiu que o projeto não fosse interrompido. Mas só
              retornaríamos ao nosso espaço dois anos depois, com “O Bar do
              Caminho”, uma coletânea de memórias dos moradores do bairro, num
              exercício de gratidão pela oportunidade de celebrarmos a saudade e
              a vida
            </p>
          </Col>
          <Col xs={12} md={6} className="">
            <Image
              src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2009-ate-onde-a-vista-alcanca/ate-onde.jpg?raw=true"
              roundedCircle
              fluid
            />
          </Col>
        </Row>

        <Row className="tertiary-part">
          <Col>
            <p className="text-about text-white">
              A passagem do tempo deixou marcas na companhia. Temos um elenco
              menor, experenciamos a inclusão de alunos muito especiais e cinco
              coordenadores (ainda hoje, todos voluntários!) desenvolvem
              oficinas de preparação, três deles ex-integrantes da turma, assim
              como nossa equipe técnica, que já atua profissionalmente na área.
              A reedição do FETESP em 2022 trouxe para nós a expectativa do
              reencontro. Nossa história passa inevitavelmente pelo aprendizado
              em Tatuí, afinal, o FETESP é parte de quem somos. E essa história
              não tem ponto final. A Cia. Tal&Pá segue sua trajetória,
              desafiando a si mesma, convidando vocês a contarem com a gente
              nossos próximos capítulos.
            </p>
          </Col>
        </Row>

        <Row className="tertiary-part">
          {" "}
          <Col xs={2} md={4}></Col>
          <Col xs={10} md={4}>
            <h2 className="text-white">LINHA DO TEMPO TAL & PÁ</h2>
          </Col>
          <Col xs={0} md={4}></Col>
        </Row>

        <Row className="justify-content-center tertiary-part">
          <Col xs={12} md={12}>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/1994-dirty-dancing/dirty-dancing3.jpg?raw=true"
                    alt="Dirty-Dancing"
                    className="timeline-img"
                  />
                  <p>1994 - Dirty Dancing</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/1996-Fantasma-da-opera/fantasman.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>1996 - Fantasma da Opera </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/1996-Sing/sing-2.jpg?raw=true"
                    alt="SING "
                    className="timeline-img"
                  />
                  <p>1996 - SING</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/1997-Um-conto-de-natal/um-conto.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p> 1997 - Um conto de natal</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/1999-nos-telhados-da-cidade/nos-telhados.jpg?raw=true"
                    alt="nos telhados da cidade"
                    className="timeline-img"
                  />
                  <p>1999 - Nos Telhados da cidade</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2000-muito-barulho-por-nada/muito-barulho.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2000 - Muito Barulho por nada </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2001-a-pena-e-a-lei/a-pena-e-a-lei.jpg?raw=true"
                    alt="muito barulho por nada"
                    className="A pena e a lei"
                  />
                  <p>2001 - A pena e a Lei</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2002-o-longo-caminho-ate-a-fonte/longo-caminho.jpg?raw=true"
                    alt="longo-caminho"
                    className="timeline-img"
                  />
                  <p>2002 - Longo caminho até a fonte </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2003-o-mambembe/mambembe.jpg?raw=true"
                    alt="Evento 3"
                    className="timeline-img"
                  />
                  <p>2003 - O Mambembe</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2004-o-arauto-da-liberdade/ARAUTO2.JPG?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p> 2004 - O Arauto da liberdade </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2005-o-ultimo-carro/ultimo-carro.jpg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p>2005 - O Ultimo Carro</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2006-arena-conta-zumbi/zumbi.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p> 2006 - Arena Conta Zumbi </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2007-motorboy/motorboy.jpg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p>2007 - MotorBoy</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2008-o-que-eu-vi-o-que-nos-veremos/oq-eu-vi%20-2.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2008 - O que eu vi e o que nós veremos </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2009-ate-onde-a-vista-alcanca/ate-onde.jpg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p>2009 - Até onde a vista alcança</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2010-voando-para-o-alto/voando2.JPG?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2010 - Voando para o alto </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2011-sussurros/sussurros.jpg?raw=true"
                    alt="2011 - Sussurros"
                    className="timeline-img"
                  />
                  <p>2011 - Sussurros</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2012-arena-conta-danton/danton.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2012 - Arena conta Danton </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2013-as-vozes-de-joana/joana2.jpg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p>2013 - As vozes de Joana </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2016-insane/2016-insane.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2016 - Insane </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2017-chao-brasil/guarda-chuva.jpg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p>2017 - Chão Brasil</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2018-clarao-nas-estrelas/clarao.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2018 - Clarão nas estrelas </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2019-nos-telhados-da-cidade/nos-telhados.jpg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p>2019 - Nos telhados da cidade</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2021-flor-telefone-moca/flor-telefone-moca.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2021 - Flor telefone moça </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content left">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2022-bar-do-caminho/bar.jpeg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p>2022 - Bar do caminho</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content right">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2023-chao-brasil/chaobrasil.jpg?raw=true"
                    alt="fantasma da opera"
                    className="timeline-img"
                  />
                  <p>2022 - 2023 - Chão Brasil </p>
                </div>
              </div>
              <div className="">
                <div className="timeline-content center">
                  <Image
                    src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2024-tempus-fugit/bg.jpeg?raw=true"
                    alt="Ultimo carro"
                    className="timeline-img"
                  />
                  <p className="tempus-fugit-text">2024 - Tempus Fugit</p>
                </div>
              </div>

              {/* Adicione mais itens conforme necessário */}
            </div>
          </Col>
        </Row>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,96L8.9,117.3C17.8,139,36,181,53,213.3C71.1,245,89,267,107,277.3C124.4,288,142,288,160,261.3C177.8,235,196,181,213,149.3C231.1,117,249,107,267,117.3C284.4,128,302,160,320,160C337.8,160,356,128,373,128C391.1,128,409,160,427,192C444.4,224,462,256,480,266.7C497.8,277,516,267,533,261.3C551.1,256,569,256,587,256C604.4,256,622,256,640,250.7C657.8,245,676,235,693,202.7C711.1,171,729,117,747,128C764.4,139,782,213,800,240C817.8,267,836,245,853,245.3C871.1,245,889,267,907,272C924.4,277,942,267,960,256C977.8,245,996,235,1013,202.7C1031.1,171,1049,117,1067,122.7C1084.4,128,1102,192,1120,192C1137.8,192,1156,128,1173,112C1191.1,96,1209,128,1227,122.7C1244.4,117,1262,75,1280,58.7C1297.8,43,1316,53,1333,101.3C1351.1,149,1369,235,1387,229.3C1404.4,224,1422,128,1431,80L1440,32L1440,0L1431.1,0C1422.2,0,1404,0,1387,0C1368.9,0,1351,0,1333,0C1315.6,0,1298,0,1280,0C1262.2,0,1244,0,1227,0C1208.9,0,1191,0,1173,0C1155.6,0,1138,0,1120,0C1102.2,0,1084,0,1067,0C1048.9,0,1031,0,1013,0C995.6,0,978,0,960,0C942.2,0,924,0,907,0C888.9,0,871,0,853,0C835.6,0,818,0,800,0C782.2,0,764,0,747,0C728.9,0,711,0,693,0C675.6,0,658,0,640,0C622.2,0,604,0,587,0C568.9,0,551,0,533,0C515.6,0,498,0,480,0C462.2,0,444,0,427,0C408.9,0,391,0,373,0C355.6,0,338,0,320,0C302.2,0,284,0,267,0C248.9,0,231,0,213,0C195.6,0,178,0,160,0C142.2,0,124,0,107,0C88.9,0,71,0,53,0C35.6,0,18,0,9,0L0,0Z"
          ></path>
        </svg>

        <Row className="second-part">
          <Col xs={2} md={4}></Col>
          <Col xs={8} md={4}>
            <p className="text-about ">
              Contar trinta anos é sempre um desafio. Em cada foto dessas existe
              um universo cada universo é repleto de pessoas cada pessoa possui
              inúmeras histórias. E todas essas histórias nós contamos juntos,
              aos alunos atores e aos alunos público enquanto for possível, nós
              nos veremos de novo amigos
            </p>
          </Col>
          <Col xs={2} md={4}></Col>
        </Row>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/Home" className="mx-auto">
            <img className="logo-tep" src={logo} alt="Logo" />
          </Navbar.Brand>
        </Navbar>
      </section>
    </>
  );
}

export default About;
