import React from 'react';
import { pizzas } from './pizzas';
import CardPizza from './CardPizza';

const Home = () => {
    return (
        <div className="pizza-container">
            {pizzas.map((pizza, index) => (
                <CardPizza key={index} pizza={pizza} />
            ))}
        </div>
    );
};

export default Home;
