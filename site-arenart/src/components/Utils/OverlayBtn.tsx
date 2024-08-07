import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./styles.css"
interface Props {
  btnText: string;
  text: string;
  title: string;
}

const OverlayBtn: React.FC<Props> = ({ text, btnText, title }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{text}</Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="secondary">{btnText}</Button>
    </OverlayTrigger>
  );
};

export default OverlayBtn;
