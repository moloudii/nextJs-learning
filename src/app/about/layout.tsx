import React from "react";

const aboutLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="bg-amber-500">{children}</div>;
};

export default aboutLayout;
