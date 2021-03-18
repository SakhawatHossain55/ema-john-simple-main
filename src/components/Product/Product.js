import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {img, name,seller,price,stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4 className="product-name-style"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
            { props.showAddToCart && <button 
            className="main-btn" 
            onClick={() =>props.handelAddProduct(props.product)}>
                <FontAwesomeIcon icon={faCartArrowDown}/> add to cart
                </button>}
            </div>
            
        </div>
    );
};

export default Product;