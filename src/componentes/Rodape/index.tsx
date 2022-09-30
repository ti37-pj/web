 import './stylle.module.css';

const Rodape = () => {

	return (
        <footer>

            <h2>Contato e localização</h2>

            <div className="divisao-rodape" >

                <div className="lado-esquerdo" >

                    <iframe className="mapa"
                        title="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.648436946044!2d-47.89359248445502!3d-22.024777612530777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87722afe006bb%3A0x4a8b254e7543696!2sSenac%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1662657816629!5m2!1spt-BR!2sbr" 
                        style={{
                            borderStyle:"none"
                        }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

                <div className="lado-direito" >
                    
                    <ul>
                        <h2>+ 55 (16) 9970707070</h2>
                        <h3>Lelexo@gmail.com</h3>
                        <h4>Rua Episcopal - Centro</h4>
                    </ul>

                    <div className="horario">
                        <ul>
                        <h1>Horario de funcionamento  </h1>
                            <h3>TERÇA - QUINTA</h3>
                            <h4> 11H - 21H</h4>
                            <h4> SEXTA - DOMINGO E FERIADOS </h4>
                            <h4> 14H - 02H </h4>
                        </ul>
                    </div>

                </div>

            </div>    
            
        </footer>

	)
}

export default Rodape; 