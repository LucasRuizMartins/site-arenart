import {  Image } from "react-bootstrap";
import "./styles.css";
import React from "react";
import VerticalModal from "../VerticalModal";
import { ActorInfoDTO } from "../../models/actors";

type Props = {
  actor:ActorInfoDTO;
  name: string;
  imgUrl: string;
  instagram: string;
};

function CardsActor({ actor,name, imgUrl, instagram }: Props) {
  const [modalShow, setModalShow] = React.useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previne a propagação do clique para evitar conflitos
    setModalShow(true);
  };

  return (
    <>
      <div style={{ width: "18rem" }} className="card-actor" onClick={handleCardClick}>
        <div>
        <Image className="actor-photo" src={imgUrl}  fluid></Image>
        </div>

        <h3 className="actor-title">{name}</h3>
        <p>{instagram}</p>
      </div>

      <VerticalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={actor.nome}
  
        actor={actor}      />
    </>
  );
}

export default CardsActor;
