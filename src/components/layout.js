import styled from "styled-components";

const LayoutStyled = styled.main`
  min-block-size: 100vh;
  max-inline-size: 75rem;
  margin: auto;
  padding-inline: 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    border: 10px solid red;
    grid-template-columns: 278px 1fr;
    grid-template-areas: "profile filters" "profile repo-list";
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
  }
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
