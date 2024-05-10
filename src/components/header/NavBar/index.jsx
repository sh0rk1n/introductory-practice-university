import React from "react";
const menuItems = [ /* можно конечно закинуть на бэк и с помощью axios/fetch вытащить данные, но мне лень */
  { id: "/", text: "Главная" },
  { id: "about", text: "О нас" },
  { id: "start", text: "Курс" },
  { id: "teachers", text: "Преподаватели" },
  { id: "partners", text: "Партнеры" },
  { id: "footer", text: "Контакты" },
];
export default function NavBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className="flex ml-52 ">
        {menuItems.map((item)=> (
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