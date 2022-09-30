import React, { FC } from 'react';
import Produto from '../../modelos/Produto';
import styles from "./styles.module.css";

type Props = {
    produto: Produto;
};

const CardapioItem: FC<Props> = function(props) {
    return ( 
        <li className={styles.produto}>
                <img src={props.produto.imagem_url}/>
                <h2>{props.produto.nome}</h2>
                <p>{props.produto.descricao}</p>
                <h1>{props.produto.preco_venda}</h1>
        </li>
     );
}
 
export default CardapioItem;