import imagemEsquerda from "../../assets/festa-30-anos.png";
import imagemSobre from "../../assets/grito-tep.jpg";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function BodyFirstPart() {
  return (
    <section>
      <div className="">
        <h1 className="daily-title">Tal & Pá 30 Anos</h1>
        <Row>
          <Col xs={12} md={0}></Col>

          <Col xs={12} md={6}>
            <p>
              <img
                src={imagemEsquerda}
                className="body-left-image d-flex justify-content-center align-items-center"
              ></img>
            </p>
          </Col>

          <Col xs={12} md={6}>
            {" "}
            <p className="body-text-area">
              Há três décadas, o grupo de teatro Tal&Pá tem sido a principal
              iniciativa artística da ONG ARENART, transformando vidas e
              espalhando cultura na Zona Leste de São Paulo. Neste ano especial,
              celebramos 30 anos de dedicação ao teatro e ao desenvolvimento de
              jovens talentos.
              <br />
              <br />
              Ao longo desses anos, inúmeras peças foram encenadas,
              proporcionando um espaço de expressão e aprendizado para
              adolescentes da nossa comunidade.
              <br />
              <br />
              Com o compromisso de enriquecer a vida cultural e promover a
              inclusão social, seguimos firmes na missão de inspirar e capacitar
              nossos jovens através da arte. Agradecemos a todos que fizeram
              parte dessa trajetória – atores, diretores, voluntários e,
              principalmente, nosso público.
              <br />
              <br />
              Junte-se a nós nas comemorações e continue acompanhando nossas
              histórias e espetáculos. O palco é nosso, mas a celebração é de
              todos!
              <br />
              <br />
              <h6 className="text-primary tags">
                {" "}
                #30AnosDeTalEPá #ARENART #TeatroTransformador #ZonaLesteSP
              </h6>
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Image src={imagemSobre} fluid />
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10}>
            <p className="body-text-area">
              A Cia de Teatro Tal&Pá é um importantes grupo de teatro estudantil
              Paulista. Criado em 1992 na Zona Leste de São Paulo, o grupo busca
              desenvolver um teatro que propicie uma formação de público, com
              montagem de peças que possuem grande poder de comunicação com o
              público de todas as idades.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Link to={"/quem-somos"}> 
            <div className="secondary-btn arenart-btn ms-3">
              {" "}
              conheça o Tal&Pá
            </div>
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default BodyFirstPart;
