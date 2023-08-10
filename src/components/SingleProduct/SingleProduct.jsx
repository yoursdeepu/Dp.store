import "./SingleProduct.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import RelatedProduct from "./RelatedProducts/RelatedProducts"
import prod from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return (<div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                    </div>
                <div className="right">
                    <span className="name">Name</span>
                    <span className="price">price</span>
                    <span className="desc">Discription</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button" >
                            <FaCartPlus size={20} />
                            ADD TO CART
                        </button>
                    </div>
                    
                    <span className="divider" />

                    <div className="info-item">
                        <span className="text-bold">
                            Category :
                            <span> Headphones</span>
                        </span>
                        <span className="text-bold">
                            Share :
                            <span className="social-icons">
                               < FaFacebookF size={16} />
                               < FaTwitter size={16} />
                               < FaInstagram size={16} />
                               < FaLinkedinIn size={16} />
                               < FaPinterest size={16} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProduct/>
        </div>
    </div>
    );
};
export default SingleProduct;
