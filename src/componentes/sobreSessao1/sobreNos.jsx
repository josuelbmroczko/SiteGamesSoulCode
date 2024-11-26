import { StyledSobre } from "./styledsobr";
import data from "./BRANDBOOKTNT.png"; // Importando a imagem

export default function SobreNos() {
  return (
    <>
      <StyledSobre bgImage={data}>
        {/* O conteúdo aqui será centralizado, mas a imagem de fundo estará visível */}
      </StyledSobre>
    </>
  );
}
