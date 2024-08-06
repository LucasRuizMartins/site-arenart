import { Card } from "react-bootstrap";
import "./styles.css";


type Props = {
  name: string;
  imgUrl: string;
  instagram: string;
};

function CardsActor({ name, imgUrl, instagram }: Props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
    
          <Card.Title>{name}</Card.Title>

        <Card.Text>{instagram}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardsActor;
