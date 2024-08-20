import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ActorInfoDTO } from "../../models/actors";
import { Image } from "react-bootstrap";
import "./styles.css";

type Props = {
  title: string;

  actor: ActorInfoDTO;
  onHide: () => void; // Adicionando o tipo para a função onHide
  show: boolean; // Adicionando o tipo para a prop show
};

export function VerticalModal({ actor, onHide, ...props }: Props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="actor-modal-header">
          <Image className="modal-actor-photo" src={actor.foto}></Image>
          <div className="name-actor-modal">
            <p>{`${actor.nome}`} </p>
          </div>
        </div>
        <h4 className="title-actor-modal">{`Pra mim o Tal & Pá representa/representou:`}</h4>{" "}
        <p>{`${actor.talEPaRepresentacao}`}</p>
        <h4 className="title-actor-modal">{`Conselho que eu tenho para dar :`}</h4>
        <p>{` ${actor.conselho}`}</p>
        <p className="title-actor-modal">Redes socias</p>
        <p>{actor.instagram}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>fechar </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalModal;
