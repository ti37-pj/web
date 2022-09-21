import React, { useEffect } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import CardapioCategoria from "../../componentes/CardapioCategoria";
import CardapioItem from "../../componentes/CardapioItem";
import Menu from "../../componentes/Menu";
import styles from './styles.module.css';
import {MDCRipple} from '@material/ripple';
import Categoria from "../../modelos/Categoria";
import Produto from "../../modelos/Produto";
import axios from "axios";

function PaginaApresentacao() {
    const [categorias, setCategorias] = React.useState<Categoria[]>([]);
    const [produtos, setProdutos] = React.useState<Produto[]>([]);
    const produtosDaCategoria = (categoria: Categoria) => produtos.filter(produto => (produto.id_categoria === categoria.id));


    const buscaProdutos = () => {
        axios.get<Produto[]>('http://10.60.46.31:3001/produtos/busca_todos')
		.then(res => {
            console.log(res.data)
            setProdutos(res.data)
        })
		.catch(res => console.log(res))
    }

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
        buscaProdutos()
        // setProdutos([
        //     {
        //         id: 1,
        //         nome: 'Coca',
        //         descricao: 'refrigerante lata',
        //         id_categoria: 2,
        //         imagem_url: '',
        //     },
        // ]);
    }, []);

    return (
        <>
            <header className="apresentacao">

                <div>
                <h1>Lelexo Bar</h1>
                </div>

                <div>
                    <Menu /> 

                </div>
            </header>

            <main id="inicio">

            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.b2dc9af7b3474227e367f8d567b4371a?rik=XNNL0gDEys77%2bg&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.b2dc9af7b3474227e367f8d567b4371a?rik=XNNL0gDEys77%2bg&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.b2dc9af7b3474227e367f8d567b4371a?rik=XNNL0gDEys77%2bg&pid=ImgRaw&r=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Aberto</h3>
          <p>
            terça - quinta
            11am - 21pm
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


                <section id="cardapio">
                    <h2>Cardápio</h2>
                    {categorias.map(categoria =>
                        <CardapioCategoria categoria={categoria} produtos={produtosDaCategoria(categoria)} />
                    )}   

                </section>

                <section className="localizacao"id="contato">
                    <h2>Contato e localização</h2>
                    <div className="mapaContato">
                      <iframe className="mapa"
                      title="mapa"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.648436946044!2d-47.89359248445502!3d-22.024777612530777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87722afe006bb%3A0x4a8b254e7543696!2sSenac%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1662657816629!5m2!1spt-BR!2sbr" 
                      width={600} height={450}
                      style={{
                          borderStyle:"none"
                      }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"/>
                      <div className="contato">
                        <ul>
                            <ul>+ 55 (16) 9970707070</ul>
                            <ul>Lelexo@gmail.com</ul>
                            <ul>Rua Episcopal - Centro</ul>
                        </ul>
                        <div className="horario">
                          <h3>Horario de funcionamento  </h3>
                          <ul>
                              <ul>TERÇA - QUINTA</ul>
                              <ul> 11H - 21H</ul>
                              <ul> SEXTA - DOMINGO E FERIADOS </ul>
                              <ul> 14H - 02H </ul>
                          </ul>
                        </div>
                      </div>  
                    </div>
                </section>
            </main>
        </>
    );
}

export default PaginaApresentacao;