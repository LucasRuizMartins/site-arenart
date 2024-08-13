import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ActorInfoDTO } from '../../models/actors';

type Props = {
  title: string;
  bodyText: string;
  actor: ActorInfoDTO;
  onHide: () => void; // Adicionando o tipo para a função onHide
  show: boolean; // Adicionando o tipo para a prop show
};

export function VerticalModal({ actor,  bodyText, onHide, ...props }: Props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {actor.nomeSocialArtistico} {/* Exibe o título passado como prop */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Detalhes do Ator</h4> 
        <p>{actor.conselhoParaNovosIntegrantes}</p>
        <p>{bodyText}</p> {/* Exibe o texto do corpo passado como prop */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>fechar </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalModal;
