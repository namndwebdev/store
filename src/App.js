import { Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
