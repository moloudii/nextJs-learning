"use client";

import axios from "axios";

const AddProduct = () => {
  const handleAddProduct = () => {
    axios("http://localhost:3000/products", {
      method: "post",
      data: { id: Math.random(), title: "test title", views: 200 },
    });
  };
  return (
    <div>
      <button className="bg-blue-500 p-2 rounded" onClick={handleAddProduct}>
        ADD Product
      </button>
    </div>
  );
};

export default AddProduct;
