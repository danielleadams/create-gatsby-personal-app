import React from "react";
import Menu from "./menu";

export default function Header({ text }) {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <h1>{text}</h1>
      </div>
    </div>
  );
}
