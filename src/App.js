import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import LayoutPage from "./Components/Layout/Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="home" element={<Home />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="checkout/" element={<Checkout />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
