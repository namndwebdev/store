import { Routes, Route } from "react-router-dom";

import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import CheckoutThank from "./Components/Checkout/CheckoutThank";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="checkout/" element={<Checkout></Checkout>} />
        <Route path="checkout/thank/" element={<CheckoutThank></CheckoutThank>}/>
      </Routes>
    </div>
  );
}

export default App;
