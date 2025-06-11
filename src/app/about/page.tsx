import { Metadata } from "next";
import React from "react";
import Counter from "./component/counter";
import ServerComp from "./component/serverComp";
import AddProduct from "./addProduct/AddProduct";

export const metadata: Metadata = {
  title: "About Page",
};
export interface IGetProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}
const about = async () => {
  const result = await fetch("http://localhost:3000/products", {
    next: {
      revalidate: 10,
    },
  });
  const data = await result.json();
  console.log(data);

  return (
    <>
      <div>about us</div>

      <AddProduct />

      <Counter>
        <ServerComp />
        {data.map((item: IGetProduct) => (
          <div key={item.id} className="bg-slate-600 mb-2">
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </Counter>
    </>
  );
};

export default about;
