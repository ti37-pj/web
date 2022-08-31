import React from 'react';
import "./Produto.css";

const Produto = () => {
    return ( 
        <div className='produto'>
                {/* https://via.placeholder.com/200 */}
                <img src={"https://via.placeholder.com/200"}/>
                <h2> Picanha </h2>
                <p> Acompanha cebola especial da casa, farofa, maionese de alho, vinagrete e pães. </p>
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
 
export default Produto;