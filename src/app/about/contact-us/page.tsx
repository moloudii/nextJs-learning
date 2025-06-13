"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { IGetProduct } from "../page";

const ContactUs = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/products").then((result) => {
      setProducts(result.data);
    });
  }, []);
  console.log(products);

  return (
    <div>
      {products.map((item: IGetProduct) => (
        <div key={item.id} className="bg-slate-600 mb-2">
          <h5>{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
