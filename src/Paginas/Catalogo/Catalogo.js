import React from 'react';
import "./Catalogo.css";
import Produto from '../../Componentes/Produtos/Produto';
import axios from 'axios';

const Catalogo = () => {

    const [produtos, alteraProdutos] = React.useState([]);

    axios.get("http://10.60.38.41/produtos/busca_todos")

    return ( 
        <div className='Catalogo'>
            <h1> Catalogo de Produtos </h1>
            <Produto/>
            <Produto/>
            <Produto/>
        </div>
     );
}
 
export default Catalogo;