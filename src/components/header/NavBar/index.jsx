import React from "react";
import data from "../../../data.json"
export default function NavBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  {console.log("Привет!")}

  return (
    <nav>
      <ul className="flex ml-52 ">
        {data.nav.map((item)=> (
          <li
            key = {item.id}
            onClick={() => scrollToSection(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}