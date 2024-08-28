// src/App.js import React from 'react';
import Tabs from './Tabs';
import './TabContainer.css';
 
const TabContainer = () => {
  return (
    <div>
      <h1>Sales</h1>
      <Tabs>
        <div label="Products">
            <ol>
                <li>Gerbera</li>
                <li>Rose</li>
                <li>Lily</li>
            </ol>
        </div>
        <div label="Orders">
        <ol>
                <li>Ravi Tambade  876 order comfirmed</li>
                <li>Charan patil  675 Shipment dispatched</li>
                <li>Manu Narang  875  shipment returned</li>
            </ol>
        </div>
        <div label="Payments">
            <ol>
                <li>876 payment successful</li>
                <li>675 payment not done</li>
                <li>875 payment successful</li>
            </ol>        
        </div>
      </Tabs>
    </div>
  );
};

export default TabContainer;
