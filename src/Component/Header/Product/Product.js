import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, price } = props.product;
    return (
        <div>

            <div className="col">
                <div className="card h-100 p-2">
                    <img src={img} className="card-img-top w-50 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                    </div>
                    <button onClick={() => props.handleAddToClick(props.product)} className='d-flex justify-content-center'>
                        <p className='mt-2 me-2'>Add to Card</p>

                        <FontAwesomeIcon className='mt-2' icon={faShoppingCart}></FontAwesomeIcon>
                    </button>

                </div>
            </div>




        </div>



    );
};

export default Product;