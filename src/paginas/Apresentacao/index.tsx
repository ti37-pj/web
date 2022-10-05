import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import CardapioCategoria from "../../componentes/CardapioCategoria";
import Menu from "../../componentes/Menu";
import styles from './styles.module.scss';
import Categoria from "../../modelos/Categoria";
import Produto from "../../modelos/Produto";
import Rodape from "../../componentes/Rodape";
import api from "../../api";

function PaginaApresentacao() {
    const [categorias, setCategorias] = React.useState<Categoria[]>([]);
    const [produtos, setProdutos] = React.useState<Produto[]>([]);
    const produtosDaCategoria = (categoria: Categoria) => produtos.filter(produto => (produto.id_categoria === categoria.id));


    const buscaProdutos = () => {
        api.get<Produto[]>('/produtos/busca_todos_aleatorio')
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
    <header className={styles.header}>
        <h1>Lelexo Bar</h1>
        <Menu />
    </header>

    <main id="inicio">

    <Carousel style={{marginBottom: 20}} >
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images.adsttc.com/media/images/5dd4/b679/3312/fd69/2000/0044/slideshow/_RAS0103.jpg?1574221388"
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chopp em dobro de quartas e domingos</h3>
        </Carousel.Caption>
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
  containerCardapio: {
    backgroundColor: "#36393FEE",
    maxWidth: 1800,
    width: "100%",
    margin: "auto",
    borderRadius: 30,
    padding: 20,
    boxShadow: "3px 4px 5px #000",
  }
}

export default PaginaApresentacao;