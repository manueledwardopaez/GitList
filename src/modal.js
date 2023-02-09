import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./components/overlay";
import styled from "styled-components";
import {ButtonContrast} from "./components/button.js";
import InputText from "./components/input-text";

class Modal extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    a: "Miguel"
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render(){
    return (
      // <div>
      //   {this.state.a}
      //   {this.state.b}
      //   Hola Mundo!!!
      // </div>
    )
  }
}

const ModalContentStyled = styled.form`
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 24rem;
  .title {
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`;

function ModalContent() {
  const form = useRef(null);
  const navigator = useNavigate();
  const [isActive, setIsActive] = useState(true)
  /* console.log({ form }); */

  function handleSubmit(event) {
    setIsActive(false)
    event.preventDefault();

    const formData = new FormData(form.current);
    navigator(`/${formData.get("username")}`);
  }

  return (
    <Overlay>
      {
        isActive ? <Modal /> : null
      }
      <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
        <h2 className="title">Search any user</h2>
        <InputText type="text" autoComplete="off" name="username" placeholder="Username" />
        <ButtonContrast text="Search" />
        <Modal></Modal>
      </ModalContentStyled>
    </Overlay>
  );
}

export default ModalContent;
