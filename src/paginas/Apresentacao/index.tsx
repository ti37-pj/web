import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import CardapioCategoria from "../../componentes/CardapioCategoria";
import Menu from "../../componentes/Menu";
import './styles.module.css';
import Categoria from "../../modelos/Categoria";
import Produto from "../../modelos/Produto";

import Rodape from "../../componentes/Rodape";
import api from "../../api";

function PaginaApresentacao() {
    const [categorias, setCategorias] = React.useState<Categoria[]>([]);
    const [produtos, setProdutos] = React.useState<Produto[]>([]);
    const produtosDaCategoria = (categoria: Categoria) => produtos.filter(produto => (produto.id_categoria === categoria.id));


    const buscaProdutos = () => {
        api.get<Produto[]>('/produtos/busca_todos')
		    .then(res => {
            console.log(res.data)
            setProdutos(res.data)
        })
		.catch(res => console.log(res))
    }

    const buscaCategorias = () => {
      api.get<Categoria[]>('/categorias/busca_todos')
      .then(res => {
          console.log(res.data)
          setCategorias(res.data)
      })
      .catch(res => console.log(res))
    }

    useEffect(() => {
        buscaProdutos()
        buscaCategorias()
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
          src="https://images.adsttc.com/media/images/5dd4/b679/3312/fd69/2000/0044/slideshow/_RAS0103.jpg?1574221388"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chopp em dobro de quartas e domingos</h3>        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.adsttc.com/media/images/5dd4/b411/3312/fd69/2000/0039/slideshow/_RAS0070.jpg?1574220771"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Horário de funcionamento</h3>
          <p>Terça a Quinta 11h as 21H</p>
          <p>Sexta, Domingos e Feriados 14h-02h</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.adsttc.com/media/images/5dd4/b1bb/3312/fd89/f700/0005/slideshow/_RAS0027.jpg?1574220166"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          <section style={estilo.containerCardapio} >

            <div id="cardapio" >
              <h2>Cardápio</h2>
              {categorias.map(categoria =>
                  <CardapioCategoria categoria={categoria} produtos={produtosDaCategoria(categoria)} />
              )}
            </div>

          </section>



            <Rodape />

      </main>
        </>
    );
}

const estilo = {
  tituloCardapio: {
    fontSize: "2em",
    textAlign: "center"
  },
  containerCardapio: {
    backgroundColor: "#36393FF9",
    maxWidth: 1800,
    width: "100%",
    margin: "auto"
  }
}

export default PaginaApresentacao;