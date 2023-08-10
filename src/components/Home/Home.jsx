import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import useFetch from "../../utils/useFetch";

const Home = () => {
    const { data } = useFetch('/products?populate=*');
    console.log(data);

    return (<div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category />
                <Products data={data} headingText="Popular Products" />
            </div>
        </div>
    </div>);
};

export default Home;
