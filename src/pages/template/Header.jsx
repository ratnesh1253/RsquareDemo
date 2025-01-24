import React from "react";
import Logo from "./../../assets/image.png";

export default function Header() {
  return (
    <div className="p-2">
      <div
        style={{
          textAlign: "center",
          paddingTop: "5px",
          paddingBottom: "5px",
          background: "linear-gradient(#0b63f6, #003cc5)",
          color: "white",
        }}
        className="lead"
      >
        <strong>Delivering Best-In-Class Technology</strong>
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid" style={{ display: "flex" }}>
          <a className="h1" href="/">
            <img src={Logo} alt="logo" />
            {/* <h1 style={{ display: "inline-block" }}>
              RSquareSoft Technologies
            </h1> */}
          </a>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="/" className="nav-link active mx-3">
              HOME
            </a>
            <a href="/about-us" className="nav-link active mx-3">
              ABOUT US
            </a>
            <a href="/products/" className="nav-link active mx-3">
              PRODUCTS
            </a>
            <a href="/services/" className="nav-link active mx-3">
              SERVICES
            </a>
            <a href="/career/" className="nav-link active mx-3">
              CAREER
            </a>
          </div>
          <div>
            <a href="/contact-us/" className="buttonanime nav-link active mx-3">
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
