import { Routes, Route } from "react-router-dom";

import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import CheckoutThank from "./Components/Checkout/CheckoutThank";
import Category from "./Components/Category/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="checkout/" element={<Checkout></Checkout>} />
        <Route path="checkout/thank/" element={<CheckoutThank></CheckoutThank>}/>
        <Route path="category/:catId" element={<Category></Category>}/>
      </Routes>
    </div>
  );
}

export default App;
