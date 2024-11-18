import React, { useState } from "react";

function App() {
  const [product, updateProduct] = useState({
    pname: "Poco M3",
    price: 15000,
  });

  return (
    <>
      <h1>Product: {product.pname}</h1>
      <p>Price: {product.price}</p>
      <h1>Product: {JSON.stringify(product)}</h1>

      <input id="pname" placeholder="Enter new price" />
      <button
        onClick={() => {
          let mprice = document.getElementById("pname").value;
          updateProduct({
            ...product,
            price: mprice,
          });
        }}
      >
        Update Price
      </button>
    </>
  );
}

export default App;
