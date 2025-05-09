import { Metadata } from "next";
import React from "react";
import Counter from "./component/counter";
import ServerComp from "./component/serverComp";

export const metadata: Metadata = {
  title: "About Page",
};
const about = () => {
  return (
    <>
      <div>about</div>
      <Counter>
        <ServerComp />
      </Counter>
    </>
  );
};

export default about;
