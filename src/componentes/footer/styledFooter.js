import styled from "styled-components";

export const StyleFooter = styled.footer`
  display: flex;
  justify-content: center;  /* Centraliza o conteúdo horizontalmente */
  align-items: center;  /* Centraliza o conteúdo verticalmente */
  width: 100%;  /* Ocupa toda a largura disponível */
  padding: 20px;  /* Adiciona um espaçamento ao redor do conteúdo */
  background-color: #DC0132  /* Exemplo de cor de fundo */
`;

export const FooterImage = styled.img`
  max-width: 100%;  /* A imagem não ultrapassa a largura do container */
  height: auto;  /* Mantém a proporção da imagem */
  max-height: 100px;  /* Limita a altura da imagem */
  
  @media (max-width: 768px) {
    max-height: 80px;  /* Reduz a altura da imagem em telas menores */
  }
`;
