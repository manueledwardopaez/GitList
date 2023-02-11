import styled from "styled-components";
import { isValidElement } from "react";

const ButtonStyled = styled.button`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid red;
  text-decoration: none !important;
  font: var(--button);
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  background: var(--buttonBg);
  color: var(--white);
  border: 1px solid var(--grey);
  min-inline-size: 135px;

  &:hover {
    background: var(--white);
    color: var(--buttonBg);
  }
`;

function Button({ text, link, className, icon }) {
  const component = link ? "a" : "button";
  let IconComponent = null;

  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  );
}

export const ButtonContrast = styled(Button)`
  background: var(--white);
  color: var(--buttonBg);
  &:hover {
    background: var(--buttonBg);
    color: var(--white);
  }
`;

export const ButtonRounded = styled(Button)`
  border: 1px solid  red;
  min-inline-size: initial;
  border-radius: 50%;
  padding: .75rem;
  border: 2px solid var(--grey-2);
  &:hover {
    background: var(--buttonBg);
    transform: scale(1.1)
  }
`

export default Button;
