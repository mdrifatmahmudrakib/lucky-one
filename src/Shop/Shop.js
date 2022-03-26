import React, { useEffect, useState } from 'react';
import Product from '../Component/Header/Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToClick = (product) => {


        const newCart = [...cart, product];
        setCart(newCart);
    }



    return (
        <div className='shop-container'>
            <div className="product-container row row-cols-1 row-cols-md-3 g-4" >
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToClick={handleAddToClick}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>hello</h1>
                <p>Selected Items: {cart.length}</p>

                {
                    cart.map(item => <p key={item.id} >{item.name}
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;