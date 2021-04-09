import React, { useEffect, useState } from 'react';
// import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory()

    const handelProceedCheckout = () =>{
        // console.log("place added");
        history.push('/shipment');
    }

    const handelRemoveProduct = (productkeys) => {
        // console.log("clicked product", productkeys);
        const newCart = cart.filter(pd => pd.key !== productkeys);
        setCart(newCart);
        removeFromDatabaseCart(productkeys);
    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        // console.log(savedCart);//review inside
        const productkeys = Object.keys(savedCart);
        // console.log(productkeys);
        fetch('https://floating-tundra-81752.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productkeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))

        // const cartProducts = productkeys.map(key => {
        //     const product = fakeData.find(pd => pd.key === key);
        //     product.quantity = savedCart[key];
        //     return product;
        // });
        // setCart(cartProducts);
    }, []);
    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
            {/* <h1>Cart Items: {cart.length}</h1> */}
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        handelRemoveProduct={handelRemoveProduct}
                        product={pd}
                    ></ReviewItem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handelProceedCheckout} className="main-btn">Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;