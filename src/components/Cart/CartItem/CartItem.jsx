import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useState } from "react";

const CartItem = () => {
    const [cart,setCart] =useState(0)


    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <MdClose className="close-btn" />
                <div className="quantity-buttons">
                    <span onClick={()=>setCart(cart-1)} >-</span>
                    <span>{cart}</span>
                    <span onClick={()=>setCart(cart+1)} >+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span>&#8377;23</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
