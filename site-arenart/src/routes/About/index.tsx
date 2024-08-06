import { Container, Image } from "react-bootstrap";

import "./styles.css";
import onda from "../../assets/util/onda-tep.svg";
import logo from "../../assets/logo-talepa.png";
import RevealText from "../../components/Utils/RevealText";

export function About() {
  return (
    <>
      <section className="first-part">
        <Container>
          <RevealText>
            <h2 className="text-review">é possível mudar o mundo?</h2>
          </RevealText>
          <RevealText>
          <h2 className="text-review">Talvez não...</h2>
          </RevealText>
          <RevealText>
          <h2 className="text-review">Mas podemos mudar as pessoas  </h2>
          </RevealText>
          <RevealText>
          <h2 className="text-review">E torcer para elas mudarem o mundo </h2>
          </RevealText>
          <RevealText>
          <h2 className="text-review">Aos poucos... </h2>
          </RevealText>
          <RevealText>
          <h2 className="text-review">Era uma vez à trinta anos atrás </h2>
          </RevealText>
          <RevealText>
          <h2 className="text-review">Um Grupo de Jovens </h2>
          </RevealText>
        </Container>

        <RevealText>
            <Image src={logo} fluid />
          </RevealText>


      </section>
      <Image className="wave" src={onda} fluid />
    </>
  );
}

export default About;
