import React, { FC } from 'react';
import Produto from '../../modelos/Produto';
import styles from "./styles.module.css";

type Props = {
    produto: Produto;
};

const CardapioItem: FC<Props> = function(props) {
    return ( 
        <div className={styles.produto}>
                {/* https://via.placeholder.com/200 */}
                <img src={"https://via.placeholder.com/200"}/>
                <h2>{props.produto.nome}</h2>
                <p>{props.produto.descricao}</p>
                <ul>
                    <li> <span> R$ 19,80 </span> Arroz </li>
                    <li> <span> R$ 17,00 </span> Feijão </li>
                    <li> <span> R$ 9,00 </span> Farofa </li>
                    <li> <span> R$ 189,00 </span> Chapinha </li>
                    <li> <span> R$ 245,00 </span> Chapa </li>
                </ul>
        </div>
     );
}
 
export default CardapioItem;