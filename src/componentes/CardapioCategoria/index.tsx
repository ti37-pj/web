import {FunctionComponent, useState} from 'react'
import React, { FC, useEffect } from 'react';
import styles from "./styles.module.css";
import axios from 'axios';
import CardapioItem from '../CardapioItem';
import Produto from '../../modelos/Produto';
import Categoria from '../../modelos/Categoria';

type Props = {
    categoria: Categoria;
    produtos: Produto[]
};

const CardapioCategoria: FC<Props> = (props) => {
    
    return (
        <div className={styles.cardapioCategoria}>
            <h3>{props.categoria.nome}</h3>
            <ul>
                {props.produtos.map(function (produto) {
                    return <CardapioItem produto={produto}/>
                })}            
            </ul>
        </div> 
     );
}
 
export default CardapioCategoria;