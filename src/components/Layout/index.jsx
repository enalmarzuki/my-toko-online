import React from "react";
import Navbar from "../Navbar";

export default function Layout(props) {
  document.title = props.title;
  return (
    <div>
      <Navbar />

      <div className="mt-8">{props.children}</div>
    </div>
  );
}
