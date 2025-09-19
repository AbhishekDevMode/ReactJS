import React from "react";
const ProductsList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$199" },
    { id: 1, name: "Tableet", price: "$399" }
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h1>Name:{p.name}</h1>
          <h1>Price:{p.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
