import { Container, Navbar } from "react-bootstrap";
import instagramIcon from "../../assets/instagram.svg";
import youtubeIcon from "../../assets/youtube.svg";
import "./styles.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="footer">
      <Container className="footer-content justify-content-center align-items-center">
        <div className="text-footer d-block">
          <h6>SIGA NOS</h6>
        </div>
        <div className="d-flex">
          <div className="m-3">
            <NavLink to="https://www.instagram.com/centroculturalarenart">
              <img src={instagramIcon} alt="Instagram" />
            </NavLink>
          </div>
          <div className="m-3">
            <NavLink to="https://www.youtube.com/@arenartcultural">
              <img src={youtubeIcon} alt="YouTube" />
            </NavLink>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
