import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="1" />
            </div>
            <div className="prod-details">
                <span className="name">Product</span>
                <span className="price">&#8377;499</span>
            </div>

        </div>
    );
};

export default Product;