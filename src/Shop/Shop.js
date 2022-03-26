import React, { useEffect, useState } from 'react';
import Product from '../Component/Header/Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToClick = (product) => {
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
        console.log(newCart);
    }

    const handleClearToClick = () => {
        const clearItem = [];
        setCart(clearItem);
    }

    const handleChooseToClick = () => {
        setCart(cart);
        console.log(cart);
        const random = Math.floor(Math.random() * 10) + 1;
        console.log(random);






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

                <p>Selected Items: {cart.length}</p>

                {
                    cart.map(item => <div key={item.id} className='d-flex align-items-center p-2'>
                        <div className='m-2 p-2 border bg-light rounded-circle'> <img src={item.img} width="30px" height="30px" alt="" /></div>
                        <h6>{item.name}</h6>

                    </div>
                    )
                }
                <div className='d-flex flex-column'>

                    <button onClick={handleChooseToClick} className='m-2 border border-3 border-dark'>Choose 1 for Me </button>
                    <button onClick={handleClearToClick} className='m-2 border border-3 border-dark'>Choose Again </button></div>

            </div>
        </div>
    );
};

export default Shop;