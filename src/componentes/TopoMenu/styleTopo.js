import styled from 'styled-components';
import { data } from '../data';

export const StyledTopo = styled.div`
    display: flex;
    position: fixed;
    z-index: 4;
    width: 100%;
    justify-content: space-between;
    background-color: ${data.topoMenu.corFundoOpcoesTopo};
    opacity: 0; /* Inicialmente torna o topo invisível */
    transition: opacity 1s ease; /* Adiciona uma transição suave de 1 segundo para a propriedade de opacidade */

    ul {
        list-style: none;
        display: flex; 
        flex-wrap: wrap;  
        align-items: center;
      
        li {
            margin-right:  10px;
            padding-left: 10px;
            color: ${data.topoMenu.corTexto};

            img{
                max-width: 15px;
                width: 100%;
            }
        }
    }
   

    @media screen and (max-width: 768px) {
        ul {
            align-items: flex-start;
        }
        a{
            font-size: 10px;
        }
       
      
    }

    &.visible {
        opacity: 1; /* Torna o topo visível quando a classe .visible é aplicada */
    }
 
   
`;

export const StyledApresentacao = styled.div`
    text-align: center;
    display: flex;
   
    
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #DC0132;
   width: 100vw;
   justify-content: space-around;
   align-items: center;
    background-size: cover;
    position: relative;
    opacity: 0; /* Inicialmente torna o topo invisível */
    transition: opacity 1s ease;  /* Adiciona uma transição suave de 1 segundo para a propriedade de opacidade */

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80%;
        background-color: #DC0132;
        z-index: 1;
    }

    h1 {
        font-size: 4rem;
        margin-top: 0;
     
      
        z-index: 2;
        position: relative;
         align-items: center;
         justify-content: center;
        font-family: "Cormorant", serif;
        font-weight: bolder;
        color: ${data.topoMenu.corTexto};
        transition: color 1s ease;

        h1{
            width: 188px;
        }
    }

    p {
        font-size: 18px;
        font-weight: 100;
        color: ${data.topoMenu.corTexto};
        margin-bottom: 20px;
        z-index: 2;
        position: relative;
    }

    button {
        padding: 10px 20px;
        background-color: ${data.topoMenu.corBotaoFundo};
        color: ${data.topoMenu.corTexto};
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        z-index: 2;
        position: relative;

        &:hover {
            background-color: ${data.topoMenu.corBotaoHover};
        }
    }

    &.visible {
        opacity: 1;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column; /* Empilha os itens verticalmente */
        padding: 20px 10px; 
        gap: 30px;
    }
    
   `;
