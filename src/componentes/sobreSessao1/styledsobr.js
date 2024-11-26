import styled from "styled-components";

export const StyledSobre = styled.div`
  position: relative;
  display: block;
  height: 100vh;
  background-image: url(${(props) => props.bgImage}); /* Usando a imagem passada como propriedade */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    height: 30vh;
  }
`;
