"use client";

import Link from "next/link";
import { useState } from "react";

const AuthTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [input, setInput] = useState("");
  return (
    <div>
      AuthTemplate
      <br />
      <Link className="mr-4" href="/register">
        register
      </Link>
      <Link className="mr-4" href="/login">
        login
      </Link>
      <Link className="mr-4" href="/forget-password">
        forget-password
      </Link>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 border-amber-600"
      />
      {children}
    </div>
  );
};

export default AuthTemplate;
