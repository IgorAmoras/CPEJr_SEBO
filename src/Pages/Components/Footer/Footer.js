import React from "react";
import "./Footer.css";

function Footer(){
    return (
        <>
            <div className="footer">

                <div className="Text1">
                    <h4 className = "TextG">Cadastre-se <br/> Faça login <br/> 
                    Blog <br/> <br/>
                    <b> LOCALIZAÇÃO: </b> <br/>
                    Belo Horizonte, MG <br/>
                    Av. Augusto de Lima, 233 <br/>
                    Cep: 30190-000 <br/>
                    Saiba como chegar</h4>
                </div>

                <div className="Text2">
                    <h4 className= "TextG"><b> INFORMAÇÕES: </b> <br/>
                    Quem somos <br/>
                    Como doar um exemplar <br/>
                    Como Comprar
                    </h4>
                </div>

                <div className="Text3">
                    <h4 className= "TextG"><b> HORÁRIOS DE <br/>
                        ATENDIMENTO: </b> <br/>
                        Das 10h às 18h, de <br/>
                        segunda à sexta-feira <br/>
                        Sábado das 09h às 17h <br/>
                        (exceto feriados)* <br/>
                        (31) 3104-7111
                    </h4>
                </div>
            </div>
        </>
    );
}

export default Footer;