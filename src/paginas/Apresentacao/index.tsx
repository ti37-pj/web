import React from "react";
import CardapioCategoria from "../../componentes/CardapioCategoria";
import CardapioItem from "../../componentes/CardapioItem";
import Menu from "../../componentes/Menu";
import { Categoria } from "../../modelos/Produto";
import styles from './styles.module.css';

function PaginaApresentacao() {
    return (
        <>
            <header className={styles.header}>
                <h1>Lelexo Bar</h1>
                <Menu />
                
                <div><i className="fa fa-donwload">Baixe o nosso App</i></div>
            </header>
            <main id="inicio">
                <div className="carousel-item">
                    <img src="..." alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <section id="cardapio">
                    <h2>Cardápio</h2>
                    <CardapioCategoria titulo='Bebidas' categoria={Categoria.Bebidas} />
                    <CardapioCategoria titulo='Comidas' categoria={Categoria.Comidas} />
                    <CardapioCategoria titulo='Petiscos' categoria={Categoria.Petiscos} />
                    <CardapioCategoria titulo='Sobremesas' categoria={Categoria.Sobremesas} />
                </section>

                <section id="contato">
                    <h2>Contato e localização</h2>
                </section>
            </main>
        </>
    );
}

export default PaginaApresentacao;