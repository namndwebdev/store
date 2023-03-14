import React, { useState } from "react";

function Product(props) {
  const { name, price, quantity, onIncreaseQuantity } = props;

  return (
    <div>
      <span>{name} </span> 
      <span>
        <label htmlFor="">Số lượng </label>
        {/* <button onClick={onIncreaseQuantity}>+</button> */}
        <input style={{width:"50px"}} type="number" onClick={onIncreaseQuantity} value={quantity} />
        {/* <span>{quantity}</span> */}
      </span>
      <div>{price*quantity} VND</div>
    </div>
  );
}

function Cart() {
  const [products, setProducts] = useState([
    { name: "Sản phẩm A", price: 10, quantity: 1 },
    { name: "Sản phẩm B", price: 20, quantity: 0 },
    { name: "Sản phẩm B", price: 20, quantity: 20 },
  ]);

  const handleIncreaseQuantity = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <h2>Giỏ hàng</h2>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          onIncreaseQuantity={() => handleIncreaseQuantity(index)}
        />
      ))}
      <div>Tổng giá trị: {totalPrice} VNĐ</div>
    </div>
  );
}

export default Cart;