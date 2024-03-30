import React from "react";
import "../components/style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_wrapper">
        <h1 className="header_title">
          Hi, my name is <em>Nailya</em>
          <br /> junior frontend developer
        </h1>
        <a
          href="https://drive.google.com/file/d/1uZOUNWax2AONqHY8YG_Riig2WV9auzB1/view?usp=sharing"
          target="blank"
        >
          <button className="header_btn">Download CV</button>
        </a>
      </div>
    </header>
  );
}
