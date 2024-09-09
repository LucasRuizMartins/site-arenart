import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CardsActor from "../../../components/CardsActor";
import "./styles.css";
import * as actorService from "../../../services/actor-services";
import { ActorInfoDTO } from "../../../models/actors";
import danton from "../../../assets/pecas/voando/voando.png";
export function Voando() {
  return (
    <>
      <Header />
      <div className="background-voando">
        <Image className="background-top-danton " src={danton}></Image>
      </div>
      <Row>
        <Col className="text-center "></Col>
      </Row>

      <Container className="mt-2">
        <Row>
          <Col
            xs={9}
            md={5}
            className="mt-5 order-1 order-md-1 order-xl-1 ms-5"
          >
            <Image
              src={
                "https://scontent.fcgh38-1.fna.fbcdn.net/v/t1.18169-9/603140_546424605439168_1229691244_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f798df&_nc_ohc=FrliyPI0xWYQ7kNvgHiU2qS&_nc_ht=scontent.fcgh38-1.fna&oh=00_AYDEmn7T_j8DmOSkg67fWFPTdZHiXfOMEGmkyVQ7AvB0kA&oe=66F94C3C"
              }
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
            <h2>A obra e a adaptação</h2>
            <p className="mt-4 font-monospace">
              Richard Bach descreve de forma leve e instigante a história de
              “Fernão Capelo Gaivota”. O autor conta toda a vida de Fernão
              Capelo, uma gaivota ávida por liberdade e pelo conhecimento. Desde
              sua juventude, Fernão Capelo mostra-se diferente das outras
              gaivotas, por nutrir intensa paixão pelo vôo. Fernão Capelo
              desafia as regras da sua comunidade quando mostra suas descobertas
              acerca do vôo. Por pensar de modo anticonvencional, Fernão é
              expulso da sua comunidade. Solitária, a gaivota aprimora suas
              técnicas de vôo até sua velhice, quando é misteriosamente elevada
              a outro mundo. Neste novo mundo, Fernão se revigora, conhece
              gaivotas que pensam em liberdade e vôo como ele e, com o auxílio
              de mestres, atinge a excelência na arte de voar com o vôo do
              pensamento.
            </p>
            <p className="mt-4 font-monospace">
              Fernão passa a ensinar o que sabe a outras gaivotas, até
              decidir-se pelo retorno a sua comunidade natal. Acompanhado por
              seus discípulos, o mestre retorna à comunidade que o baniu e exibe
              diversos estilos de vôo com perfeição. Os líderes da comunidade
              decidem ignorar o degredado e impor isto às demais gaivotas.
              Entretanto, a perfeição e a liberdade trazida por Fernão Capelo,
              lentamente vai cativando gaivotas da comunidade, que querem,
              sobretudo, aprender. Por fim, Fernão Capelo parte com intento de
              disseminar o conhecimento libertador que adquiriu, deixando
              discípulos em sua comunidade natal. Esta obra de Richard Bach
              destina-se a qualquer pessoa que esteja aberta ao aprendizado,
              alertando-nos a abrir os olhos para a liberdade que só o
              conhecimento pode trazer.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8} className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              “Fernão Capelo Gaivota” não é uma obra literária privilegiada pela
              escrita, pelos substantivos e adjetivos, pelas figuras de estilo.
              Seu grande dom é a universalidade e a urgência de sua mensagem e
              nos permite contar uma história a partir de um ponto de vista que
              emerge da própria encenação. Propõe imagens leves e ao mesmo tempo
              contundentes. “As gaivotas nunca voam no escuro...” Não aquele
              escuro da física, a ausência da luz. Mas o escuro interior quando
              não vemos nada em nossa vida mesmo estando com os olhos bem
              abertos. O desejo de liberdade flui em todo o livro, em suas
              páginas, em suas linhas, em suas palavras. A liberdade de voar
              cada vez mais alto, e "descobrir que o tédio, o medo, e a ira são
              as razões porque a vida (...) é tão curta."
            </p>
            <p className="mt-4 font-monospace">
              A montagem cria uma sobreposição de metáforas ao construir imagens
              alegóricas para a linguagem narrativa do texto. As metáforas são
              uma forma especial de linguagem que dão sentido a outras mensagens
              e fazem ligações com estruturas mais profundas que existem nas
              pessoas. Em vez de secundárias à realidade, elas geralmente
              fornecem a estrutura pela qual as situações reais e a informação
              passam a ter sentido. Não há uma só verdade a ser contada, mas uma
              história a ser construída pela platéia a partir das imagens
              apresentadas.
            </p>
          </Col>

          <Col xs={12} md={4} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.18169-9/603081_546425065439122_2068072901_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f798df&_nc_ohc=m6fGh9l3v3UQ7kNvgGGSeQk&_nc_ht=scontent.fcgh12-1.fna&oh=00_AYD-IC3sF-Rgb3HLCRIE1jkDUJpasR466_dKlzePljtoww&oe=66F94C1D"
              }
              fluid
            ></Image>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className="mt-5">
            <p className="fs-1 d-flex justify-content-center align-items-center">
              Uma experiência sensorial
            </p>
          </Col>
          <Col xs={0} md={2} className="mt-1 "></Col>
          <Col xs={12} md={10} className="mt-5 ">
            <Image
              src={
                "https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.18169-9/1393586_546426138772348_61789950_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f798df&_nc_ohc=eTWQ8ft3zkoQ7kNvgHC7Xb5&_nc_ht=scontent.fcgh12-1.fna&oh=00_AYBNPx_Cql_1O7K8bkqitAI_bWjmLO0p0aAsWu14AYHknQ&oe=66F96471"
              }
              fluid
            ></Image>
          </Col>

          <Row>
            <Col xs={12} md={5} className="mt-1 order-1 order-md-1 order-xl-1">
              <Image
                src={
                  "https://scontent.fcgh38-1.fna.fbcdn.net/v/t1.18169-9/1454687_546427832105512_204197017_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f798df&_nc_ohc=3_dZmUd9ehYQ7kNvgFpQal8&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=AVFsWtyJkUkufeZIuigesYR&oh=00_AYAFh2d3XsmKstsEq5qyuMAF5pMhDvcxs6gx-_WMA1F2AA&oe=66F94367"
                }
                fluid
              ></Image>
            </Col>
            <Col xs={12} md={6} className="mt-1 order-2 order-md-1 order-xl-1">
              <p className="font-monospace">
                O espaço de percepção que se relaciona a uma idéia ou conceito
                pode ser explorado de diversas maneiras, e cada pessoa
                desenvolve suas capacidades sensoriais em níveis diversos.
                Algumas pessoas são naturalmente muito visuais, enquanto outras
                têm grande dificuldade em formar imagens visuais ou pensar de
                maneira visual. Outras são mais verbais e podem falar e
                articular suas experiências com facilidade, enquanto outras
                lutam com palavras. As palavras as confundem. Através da
                construção das imagens, da palavra, da música, da dança, da
                disposição e movimentação dos cenários em “Voando para o alto”,
                procuramos criar uma experiência sensorial que possa ser
                compartilhada em diferentes níveis por atores e platéia, e que
                funciona como parte integrante do espetáculo. Pretendemos assim
                estabelecer um canal de comunicação diferente para os temas do
                livro, passíveis de rejeição quando apresentados de forma
                didática: amor, perdão e aprendizado
              </p>
              <p className="mt-4 font-monospace">
                A escolha da música foi o guia para todas as outras escolhas
                estéticas da montagem. Une dois estilos que se completam, com
                temas orquestrados e composições que revelam nuances primorosos,
                uma sonoridade épica que permite aos ouvintes criar em sua
                imaginação lugares exóticos e fantásticos personagens.
              </p>
            </Col>
            <Col xs={12} md={0} className="mt-5"></Col>
          </Row>

          <Col
            xs={12}
            md={12}
            className="mt-2 order-2 order-md-1 order-xl-1"
          ></Col>
        </Row>

        <Row className="backgroun-chaobrasil">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          ></Col>
        </Row>
        <Row className="">
          <Col
            xs={12}
            md={5}
            xl={6}
            className="mt-5 order-2 order-md-1 order-xl-1"
          >
            <p className="font-monospace">
              Adiemus é o nome de um projeto de música incidental pensado e
              realizado pelo compositor galês Karl Jenkins em 1994. Jenkins
              propõe uma estrutura musical que apresenta evoluções harmônicas e
              melódicas inovadoras, ainda que baseada na estrutura erudita. Os
              textos foram escritos de modo que a voz soa como um instrumento a
              mais no conjunto. A parte lírica é totalmente destituída de
              significado, o que, segundo o compositor, enaltece o teor sonoro
              da obra, evitando "distrações"
            </p>
            <p className="font-monospace">
              Immediate Music é uma empresa musical sediada em Santa Monica, Los
              Angeles. Sua produção pode ser descrita como música orquestral
              contemporânea e é similar à de X-Ray Dog, Audiomachine e Corner
              Stone Cues, outros grupos especializados em músicas incidentais
              para o cinema, e que estão incluídas na trilha sonora do
              espetáculo.
            </p>
            <p className="font-monospace">
              Os adereços utilizados na maioria das coreografias de “Voando para
              o alto” tem origem nas “Color Guards” americanas, embora também
              remetam aos típicos malabares do circo. As bandeiras são figuras
              obrigatórias nas linhas de frente das bandas marciais de muitos
              Colégios, enquanto o swing, por ser muito versátil, é praticado de
              diversas maneiras. O swing Poi, composto por duas esferas, cauda e
              correntes, é muito usado em “Raves”, enquanto o swing flag ou Flag
              Poi é uma bandeira presa em correntes com pequenos pesos em suas
              extremidades, para que ocorram movimentos uniformes. Como o Swing
              Poi, a Flag Poi também é muito utilizada nas festas de música
              eletrônica, e seu visual atrai especialmente o público jovem.
            </p>
          </Col>
          <Col
            xs={12}
            md={8}
            xl={6}
            className="mt-5 order-1 order-md-2 order-xl-2"
          >
            <Image
              src={
                "https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.18169-9/1450158_546427972105498_892125989_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f798df&_nc_ohc=DAx9WoeivlkQ7kNvgFU9Eq6&_nc_ht=scontent.fcgh12-1.fna&oh=00_AYBbp6Eza-UNb3hMc9crw41Gi45IKfER1EOBU5xij1hYrA&oe=66F96F57"
              }
              fluid
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={5} className="order-2 order-md-2 order-xl-2">
            <p className="font-monospace">
              A monocromia dos cenários e figurinos em branco, cinza, preto e
              prata oferece contraponto para os efeitos de luz, a profusão dos
              adereços, a movimentação intensa do elenco e dos elementos
              cenográficos.
            </p>
            <p className="font-monospace ">
              O clássico de Richard Bach nos fala de forma metafórica sobre a
              conquista da liberdade. Fernão cria suas próprias leis e realiza o
              sonho de atingir vôos inimagináveis aos seus semelhantes. A
              história de Fernão Capelo Gaivota é a história da descoberta do
              “eu” que busca ser livre à revelia das velhas convenções sociais.
              A história desenrola-se sobre o seu fascínio pelas acrobacias e
              como isso transtorna o grupo de gaivotas do seu clã. Ele é tomado
              pela paixão pelos vôos de todos os tipos, e sua alma decola como
              os seus experimentos e emocionantes triunfos de ousadia e feitos
              aéreos.
            </p>
            <p className="font-monospace ">
              A fábula vem de encontro à realidade vivida e compartilhada pelos
              participantes do projeto “Crescendo no Teatro”, que nasceu e
              mantém sua identidade no âmbito escolar. Carrega uma crítica à
              sociedade castradora, independente das décadas que atravessou.
              Esta crítica apresentada por Richard Bach dirige-se a vários
              aspectos sociais: na resistência ao novo, na imposição
              inquestionável de certas leis, nas limitações estabelecidas para o
              aprendizado, no conformismo.
            </p>
            <p className="font-monospace ">
              Na escola, esses aspectos revelam-se num adoecimento da vontade de
              ensinar e da vontade de aprender, que paralisa ou fragiliza muitas
              iniciativas que poderiam ter sucesso. A maioria de nós, educadores
              ou profissionais direta ou indiretamente vinculados ao ambiente
              escolar, vive sob uma atmosfera de individualidade, burocracia,
              descompromisso, enfim, um pessimismo pedagógico que só faz
              refletir um pessimismo maior que atinge toda a sociedade, e que já
              é um traço cultural deste período histórico.
            </p>
          </Col>
          <Col xs={12} md={6} className="mt-1 order-1 order-md-1 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2010-voando-para-o-alto/voojpg.jpg?raw=true"
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
          <Col xs={12} md={10} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2010-voando-para-o-alto/voo2.jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>

          <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              Os efeitos mais visíveis desse processo se expressam na
              insegurança individual e coletiva, bem como na perda da
              perspectiva de vida. A indisciplina escolar, interpretada como
              apatia, desinteresse ou falta de vontade pelo estudo pode estar
              traduzindo, entre outros aspectos, a descrença do jovem em um
              mundo cada vez menos acolhedor. Discutir, comparecer, cooperar,
              estudar, ensinar e aprender são verbos e ações que perderam
              legitimidade e razão de ser. Para se proteger nesse ambiente de
              alienação, parece mais seguro abrir mão de quaisquer resquíscios
              de sensibilidade, o que produz a inversão profunda de valores que
              experimentamos nos nossos dias. Escondidos em si mesmos, nossos
              alunos buscam imunidade contra o fracasso e a dor.
            </p>
            <p className="mt-4 font-monospace">
              Assim, com freqüência, percebemos que a conduta de quebrar regras
              e desrespeitar normas é objeto de admiração de muitas pessoas. A
              cada dia, o que era certo parece tornar-se errado e o errado
              parece tornar-se certo. Quando alguém se esforça para ser uma
              pessoa mais dócil e humana, pode-se notar que estranhamente ela se
              torna merecedora de descrédito. Isso se reflete na dificuldade
              cada vez maior de encontrar aqueles que desejam estar
              comprometidos com uma vontade, como a de prestar o vestibular,
              participar de um grupo de jovens na igreja, defender um time,
              fazer teatro, por exemplo. Porque compremeter-se envolve riscos, e
              nossos alunos preferem a certeza do vazio. Sem desafios, não há
              derrotas.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={10}
            md={5}
            className="mt-5 order-1 order-md-1 order-xl-1 ms-5"
          >
            <Image
              src={
                "https://scontent.fcgh38-1.fna.fbcdn.net/v/t1.18169-9/1426272_546428518772110_1752132048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f798df&_nc_ohc=C8IGpkI65rMQ7kNvgExyS68&_nc_ht=scontent.fcgh38-1.fna&oh=00_AYBod7WBDoUqlYbmUSYC6SZsyjF3zIF3gZCH6PO34HkUAQ&oe=66F9678C"
              }
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={6} className="mt-5 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              Os que arriscam desafiar essas certezas acabam por expor a dor
              daqueles que se fecham. Por isso, nossa sociedade mascara seu medo
              segregando e excluindo quem é diferente. Quando surge alguém que
              insiste em avançar no aprendizado para descobrir algo novo e bom,
              esse alguém é excluído pela sociedade. Assim como na comunidade de
              Fernão Capelo, vivemos em uma sociedade que resiste profundamente
              ao novo. Os diferentes são colocados à margem da sociedade por
              serem justamente o que são: diferentes. Por terem se atrevido a
              contestar e a ir além dos limites impostos.
            </p>
            <p className="mt-1 font-monospace">
              Nesse sentido, o livro é uma alegoria sobre a importância de se
              buscar propósitos mais nobres para a vida. Fernão Capelo desafia
              as regras da sua comunidade quando mostra suas descobertas acerca
              do vôo. Atinge a excelência na arte de voar com o vôo do
              pensamento e passa a ensinar o que sabe a outras gaivotas, até
              decidir-se pelo retorno a sua comunidade natal. Acompanhado por
              seus discípulos, o mestre retorna à comunidade que o baniu e exibe
              diversos estilos de vôo com perfeição. Os líderes da comunidade
              decidem ignorar o degredado e impor isto às demais gaivotas.
              Entretanto, a perfeição e a liberdade trazida por Fernão Capelo,
              lentamente vai cativando gaivotas da comunidade, que querem,
              sobretudo, aprender. Fernão prova a todos a importância de
              acreditar em si mesmo, mesmo quando tudo ao redor sugere o
              contrário.
            </p>
            <p className="mt-1 font-monospace">
              Uma das tarefas mais importantes da prática educativo-crítica é
              propiciar as condições em que os educandos ensaiem a experiência
              profunda de assumir-se. Assumir-se como ser social e histórico,
              como ser pensante, comunicante, transformador, criador, realizador
              de sonhos, capaz de ter raiva porque capaz de amar.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={1}
            md={2}
            className="mt-1 order-1 order-md-2 order-xl-1"
          ></Col>
          <Col xs={12} md={10} className="mt-5 order-1 order-md-2 order-xl-1">
            <Image
              src={
                "https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2010-voando-para-o-alto/lucas-2.jpg?raw=true"
              }
              fluid
            ></Image>
          </Col>

          <Col xs={12} md={12} className="mt-2 order-2 order-md-1 order-xl-1">
            <p className="mt-4 font-monospace">
              Todos temos uma jornada em busca de si mesmo, em realizar sua
              própria vida, na procura de sua singularidade. Para iniciar essa
              grande viagem interior é preciso primeiramente desfazermo-nos da
              ilusão de nossa própria inferioridade, Não basta descobrir-se, mas
              ir em busca do que se acredita que poderia ser. Nessa caminhada é
              preciso ter coragem, disciplina e a certeza de que o processo é
              pessoal e intransferível. Ninguém crescerá por ninguém. As
              oficinas propostas durante o processo de montagem propõe caminhos
              para que eles continuem seu caminho de descoberta, conhecimento e
              compreensão de si mesmos, mas também dos outros: os mais parecidos
              consigo e os mais diferentes. Ser tolerante, respeitar as
              diferentes e legítimas manifestações dos outros é também objeto de
              aprendizagem, que se dá a partir da criação de espaços de diálogo,
              pela apropriação de valores ou cultura e, sem dúvida, prepara para
              viver numa sociedade plural e complexa, submetida a profundas,
              inevitáveis e rápidas mudanças.
            </p>
            <p className="mt-4 font-monospace">
              Ao encenarem a história da gaivota que é banida por ousar ser
              diferente, nossos alunos-atores reproduzem seu próprio momento.
              “Porque somos tão poucos?” – pergunta Fernão, ao descobrir os
              raros companheiros que compartilham seu desejo de voar. Iguais em
              suas diferenças, eles permanecem juntos nessa viagem. Diferente de
              tantos outros, aceitaram o desafio do comprometimento para voar
              com seus jovens instrutores E para voar é preciso amar o vazio,
              porque o vôo só acontece se houver o vazio. O vazio é o espaço da
              liberdade, a ausência de certezas. Os homens querem voar, mas
              temem o vazio. Não podem viver sem certezas. Por isso trocam o vôo
              por gaiolas. As gaiolas são o lugar onde as certezas moram. Nem
              certo, nem errado, só há lugar para a experiência.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={10}>
            <Image
              src="https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.18169-9/1391549_546423915439237_1221455947_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f798df&_nc_ohc=ANK06iD-uLsQ7kNvgEV6TRz&_nc_ht=scontent.fcgh12-1.fna&oh=00_AYC3AQZ6L0xQcbdD_4PeGlZ04JjalXtTtbL7YQCzX9qKxw&oe=66F94828"
              fluid
            ></Image>
          </Col>
          <Col xs={12} md={1}></Col>
        </Row>
      </Container>

      <Row className="">
        <Col className="text-center mb-5 mt-5">
          <div className="">
            <h3>Elenco - Voando para o alto </h3>
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
              actor.temporadas.includes("2010 - Voando para o Alto")
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

export default Voando;
