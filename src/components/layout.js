import React from "react";
import Header from "./header";

export default function Layout({ title, children }) {
  return (
    <div>
      <Header text={title} />
      <div className="container-fluid">{children}</div>
    </div>
  );
}
