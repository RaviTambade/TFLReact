const Details=()=>{

    const currentProduct={ id: 1, title: 'Lily',
                            description:'Wedding Flower',
                             unitprice:8, quantity:2300,
                             likes:8734 
                        };
        return(
        <div>
            <h2>Todays Flower Gerbra:</h2>
            <img src="/images/flowers/gerbera.jpg" width="100" height="100"/>
            <p> Title: {currentProduct.title}</p>
            <p> Description:{currentProduct.description}</p>
            <p> UnitPrice:15 Rs.</p>
            <p> Stock Available:67000</p>
            <p> Likes:89000</p>
        </div>
    );
}

export default Details;