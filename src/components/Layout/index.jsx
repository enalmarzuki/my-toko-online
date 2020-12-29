import React from "react";
import Navbar from "../Navbar";
import Footer from "../../parts/Footer";

export default function Layout(props) {
  document.title = props.title || "Online Shop";
  return (
    <div>
      <Navbar {...props} />
      {props.children}
      <Footer />
    </div>
  );
}
