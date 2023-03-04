import { Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="checkout/" element={<Checkout></Checkout>} />
      </Routes>
    </div>
  );
}

export default App;
