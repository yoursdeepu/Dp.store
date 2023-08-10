import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";      
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
// import AppContext from "./utils/AppContext"

function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="catagory/:id" element={<Category />}></Route>   
            <Route path="product/:id" element={<SingleProduct />}></Route>            
        </Routes>
        <Newsletter />
        <Footer />
        </BrowserRouter>
    )
}

export default App;
