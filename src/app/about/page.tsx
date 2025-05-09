import { Metadata } from "next";
import React from "react";
import Counter from "./component/counter";

export const metadata: Metadata = {
  title: "About Page",
};
const about = () => {
  return (
    <>
      <div>about</div>
      <Counter />
    </>
  );
};

export default about;
