import React from "react";
import Navbar from "../Navbar";

export default function Layout(props) {
  document.title = props.title;
  return (
    <div>
      <Navbar {...props} />
      {props.children}
    </div>
  );
}
