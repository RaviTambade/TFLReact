import List from '../Catalog/List/List';
import Details from '../Catalog/Details/Details';
import {useState} from 'react'
import './App.css';

function App() {
  
  //State Management
  const [items] = useState([
      { title: 'Marigold', details: 'A festival Flower', unitprice: 2, quantity: 236, likes: 5600, imageurl:"/images/marigold.jpg"  },
      { title: 'Gerbera', details: 'A Wedding Flower', unitprice: 8, quantity: 67, likes: 8000, imageurl: "/images/gerbera.jpg" },
      { title: 'Rose', details: 'A  Valentine Flower', unitprice: 12, quantity: 4348, likes: 3400, imageurl: "/images/rose.jpg" },
      { title: 'Lotus', details: 'A Worship Flower', unitprice: 22, quantity: 7654, likes: 6523, imageurl: "/images/lotus.jpg" }
  ]);

const [selectedItem, setSelectedItem] = useState(null);

//Event Handler
//callback function
const handleItemClick = (item) => {
    setSelectedItem(item);
};

return (
    <div>
        <h1>Todays Fresh Flowers</h1>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-4">
                    <h3>Select Flower</h3>
                    <List items={items} onItemClick={handleItemClick} />
                 </div>
                <div class="col-sm-8">
                    <Details item={selectedItem} />
                </div>
            </div>
        </div>
    </div>
);
}
export default App;