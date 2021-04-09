import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productkey} = useParams();

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch('https://floating-tundra-81752.herokuapp.com/product/'+ productkey)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productkey])
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product} key={product._id}></Product>
        </div>
    );
};

export default ProductDetail;