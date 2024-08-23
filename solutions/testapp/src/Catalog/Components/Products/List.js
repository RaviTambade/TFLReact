import { Link, Outlet } from "react-router-dom";

const List=()=>{

    const products = [
        { id: 1, title: 'Gerbera', description:'Wedding Flower', unitprice:8, quantity:2300,likes:8734 },
        { id: 2, title: 'Lotus', description:'Worship Flower', unitprice:35, quantity:5400,likes:4598 },
        { id: 3, title: 'Jasmine', description:'Fregrance Flower', unitprice:2, quantity:5600,likes:6587 },
        { id: 4, title: 'Lily', description:'Delicate Flower', unitprice:15, quantity:1200,likes:5678 },
        { id: 5, title: 'Rose', description:'Valentine Flower', unitprice:9, quantity:1200,likes:2387 },
        { id: 6, title: 'Marigold', description:'Festival Flower', unitprice:2, quantity:6500,likes:9834 }    
    ];


    const handleDelete = (id) => {
           console.log('Deleting product with id:', id);
    };

    return(
        <div>
            <h2>Todays Fresh Flowers</h2>
            <Link to="/products/create">Add New Flower</Link>
            <ul>
                {
                    products.map(product => (
                                            <li key={product.id}>
                                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                                                {' | '}<Link to={`/products/update/${product.id}`}>Update</Link>
                                                {' | '} <button onClick={() => handleDelete(product.id)}>Delete</button>
                                            </li>
                ))}
            </ul>
             <Outlet/>
        </div>
    );
}
export default List; 