 import './stylle.module.css';

const Rodape = () => {

	return (
        <footer id="contato" style={estilo.contato}>

            <h2>Contato e localização</h2>

            <div style={estilo.divisaoRodape} >

                <div style={estilo.ladoEsquerdo} >

                    <iframe style={estilo.mapa}
                        title="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.648436946044!2d-47.89359248445502!3d-22.024777612530777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87722afe006bb%3A0x4a8b254e7543696!2sSenac%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1662657816629!5m2!1spt-BR!2sbr" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

                <div style={estilo.ladoDireito} >
                    <ul style={estilo.contato} >
                        <li>+ 55 (16) 9970707070</li>
                        <li>Lelexo@gmail.com</li>
                        <li>Rua Episcopal - Centro</li>
                    </ul>

                    <div className="horario">
                        <h3>Horario de funcionamento  </h3>
                        <ul>
                            <li>TERÇA - QUINTA</li>
                            <li> 11H - 21H</li>
                            <li> SEXTA - DOMINGO E FERIADOS </li>
                            <li> 14H - 02H </li>
                        </ul>
                    </div>

                </div>

            </div>    
            
        </footer>

	)
}

const estilo = {
    divisaoRodape: {
        display: "flex",
        padding: 50
    },
    ladoEsquerdo: {
        flex: 1
    },
    ladoDireito: {
        flex: 1,
        marginLeft: "10%",
        padding: 20,
        backgroundColor: "#000000CC"
    },
    mapa: {
        width: "100%",
        height: "100%",
        borderRadius: 15
    },
    contato: {
    }
}

export default Rodape; 