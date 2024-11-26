import { data } from "../data";
import { StyleFooter, FooterImage } from "./styledFooter";
import imagem from "./footertnt.png";

export default function Footer() {
    return (
        <>
            <StyleFooter>
                <FooterImage src={imagem} alt="Logo" />
            </StyleFooter>
        </>
    );
}
