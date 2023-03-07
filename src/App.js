import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";
import Home from "./Pages/Home/Home";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
