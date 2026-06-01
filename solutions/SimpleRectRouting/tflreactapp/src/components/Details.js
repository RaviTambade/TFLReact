import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Counter from './Counter';
const Details = (props) => {

    const flowers = [
        {id: 1, name: 'Rose', color: 'Red', price: 5.99 },
        {id: 2, name: 'Lotus', color: 'Pink', price: 7.99 },
        {id: 3, name: 'Gerbera', color: 'Yellow', price: 4.99 },
        {id: 4, name: 'Sunflower', color: 'Yellow', price: 3.99 },
        {id: 5, name: 'Tulip', color: 'Pink', price: 15.99 }
    ];

    const { id } = useParams();
    const currentId = id;
    const [favoriteFlower, setFavoriteFlower] = useState(flowers[currentId - 1]);
   
    return (
        <div style={{ border: '1px solid black',
                      padding: '10px', margin: '10px' }}>
            <h1>Flower Details</h1>
            <p style={{color:'red'}}>Name: {favoriteFlower.name}</p>
            <p>Color: {favoriteFlower.color}</p>
            <p>Price: ${favoriteFlower.price.toFixed(2)}</p>
            <Counter />
        </div>
    );
}

export default Details;