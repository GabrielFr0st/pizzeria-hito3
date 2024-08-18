import React from 'react';

const CardPizza = ({ pizza }) => {
    return (
        <div className="card">
            <img src={pizza.image} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>Precio: ${pizza.price}</p>
            <button>Añadir al carrito</button>
        </div>
    );
};

export default CardPizza;
