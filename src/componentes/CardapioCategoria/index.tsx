import React, { FC, useEffect } from 'react';
import styles from "./styles.module.css";
import axios from 'axios';
import CardapioItem from '../CardapioItem';
import Produto, { Categoria } from '../../modelos/Produto';

type Props = {
    titulo: string;
    categoria: Categoria;
};

const CardapioCategoria: FC<Props> = (props) => {

    const [produtos, setProdutos] = React.useState<Produto[]>([]);

    useEffect(function () {
        /*
        axios.get<Produto[]>(`http://10.60.38.41/produtos/?categoria=${props.categoria}`)
        .then(function (response) {
            setProdutos(response.data);
        })
        */

        //Dados de teste:
        setProdutos([
            {
                id: 1,
                nome: 'Chopp',
                descricao: 'Pilsen 300 ml',
                categoria: Categoria.Bebidas,
            },
            {
                id: 2,
                nome: 'São Jorge',
                descricao: 'Açúcar e gelo',
                categoria: Categoria.Bebidas,
            },
        ]);

    }, [])
    
    return (
        <div className={styles.cardapioCategoria}>
            <h3>{props.titulo}</h3>
            <ul>
                {produtos.map(function (produto) {
                    return <CardapioItem produto={produto}/>
                })}            
            </ul>
        </div> 
     );
}
 
export default CardapioCategoria;