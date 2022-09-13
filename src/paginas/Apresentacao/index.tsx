import React, { useEffect } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import CardapioCategoria from "../../componentes/CardapioCategoria";
import CardapioItem from "../../componentes/CardapioItem";
import Menu from "../../componentes/Menu";
import styles from './styles.module.css';
import {MDCRipple} from '@material/ripple';
import Categoria from "../../modelos/Categoria";
import Produto from "../../modelos/Produto";


function PaginaApresentacao() {
    const [categorias, setCategorias] = React.useState<Categoria[]>([]);
    const [produtos, setProdutos] = React.useState<Produto[]>([]);
    const produtosDaCategoria = (categoria: Categoria) => produtos.filter(produto => (produto.id_categoria === categoria.id));

    useEffect(() => {
        //TODO: Conectar no back-end
        setCategorias([
            {
                id: 1,
                nome: 'Comidas',
            },
            {
                id: 2,
                nome: 'Bebidas',
            },
        ]);
        setProdutos([
            {
                id: 1,
                nome: 'Coca',
                descricao: 'refrigerante lata',
                id_categoria: 2,
                imagem_url: '',
            },
        ]);
    }, []);

    return (
        <>
            <header className={styles.header}>
                <h1>Lelexo Bar</h1>
                <Menu />
                
                <div className="mdc-touch-target-wrapper">
                <button id="buttonApp" className="mdc-button mdc-button--raised">
  <span className="mdc-button__label">Contained Button</span>
</button>
                </div>
            </header>

            <main id="inicio">
                <Carousel>
                    <CarouselItem>
                        <img 
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/R.b2dc9af7b3474227e367f8d567b4371a?rik=XNNL0gDEys77%2bg&pid=ImgRaw&r=0"
                        alt="primeiro slide"
                        />
                    </CarouselItem>
                </Carousel>
                <div className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="..." alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Aberto</h5>
                                <p>terça - quinta</p>
                                <p>11am - 21pm</p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <section id="cardapio">
                    <h2>Cardápio</h2>
                    {categorias.map(categoria =>
                        <CardapioCategoria categoria={categoria} produtos={produtosDaCategoria(categoria)} />
                    )}   

                </section>

                <section id="contato">
                    <h2>Contato e localização</h2>
                    <iframe 
                    title="mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.648436946044!2d-47.89359248445502!3d-22.024777612530777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87722afe006bb%3A0x4a8b254e7543696!2sSenac%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1662657816629!5m2!1spt-BR!2sbr" 
                    width={600} height={450}
                     style={{
                        borderStyle:"none"
                     }} 
                     allowFullScreen 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"/>
                     
                     <ul>
                        <li>+ 55 (16) 9970707070</li>
                        <li>Lelexo@gmail.com</li>
                        <li>Rua Episcopal - Centro</li>
                     </ul>
                    <h3>Horario de funcionamento  </h3>
                     <ul>
                        <ul>TERÇA - QUINTA</ul>
                        <ul> 11H - 21H</ul>
                        <ul> SEXTA - DOMINGO E FERIADOS </ul>
                        <ul> 14H - 02H </ul>
                    </ul>
                        
                     
                </section>
            </main>
        </>
    );
}

export default PaginaApresentacao;