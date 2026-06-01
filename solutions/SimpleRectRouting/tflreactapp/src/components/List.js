//react hooks library
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const List = () => {
    //useNavigate is a hook that allows
    // us to navigate to different routes programmatically
    const navigate = useNavigate();
    const [flowers, setFlowers] = useState([
        { name: 'Rose', color: 'Red', price: 5.99 },
        { name: 'Lotus', color: 'Pink', price: 7.99 },
        { name: 'Gerbera', color: 'Yellow', price: 4.99 },
        { name: 'Sunflower', color: 'Yellow', price: 3.99 },
    ]);

    return (
        <div>
            <h1>Flower List</h1>
            <ol style={{ textAlign: 'left', color: 'blue' }}>
                {flowers.map((flower, index) => (
                    <li key={index}>{flower.name} - {flower.color} - ${flower.price.toFixed(2)}</li>
                ))}
            </ol>

            <button onClick={() => navigate('/aboutus')}>About us</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
        </div>
    );
}

export default List;