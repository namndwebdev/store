import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import LayoutPage from "./Components/Layout/Layout";
import Cart from "./Pages/Cart/Cart";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="home" element={<Home />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="checkout/" element={<Checkout />} />
          <Route path="cart/" element={<Cart />} />
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
