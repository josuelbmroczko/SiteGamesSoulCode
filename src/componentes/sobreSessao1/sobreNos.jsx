import { StyledSobre } from "./styledsobr";
import data from "./BRANDBOOKTNT.png"; // Importando a imagem

export default function SobreNos() {
  return (
    <>
      <StyledSobre  >
        <img src={data} alt="TNT" />
       </StyledSobre>
    </>
  );
}
