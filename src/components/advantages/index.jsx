import React from 'react';
import Item from "./Item";

const itemData = [
  {
    iconSrc: "/img/icons/pc.svg",
    altText: "Icon-Pc",
    title: "Только практические навыки в работе",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
  },
  {
    iconSrc: "/img/icons/flash.svg",
    altText: "Icon-Flash",
    title: "Работа на самом современном оборудовании",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
  },
  {
    iconSrc: "/img/icons/usb.svg",
    altText: "Icon-USB",
    title: "Сертификация по окончании обучения",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
  }
];

export default function Advantages(){
  return (
    <section className="advantages flex flex-col items-center px-20 ml-20 mb-48 ">
      <h2 className="text-5xl font-bold mb-28 text-center">Получите профессию прямо сейчас</h2>
      <div className="flex text-center items-center ">
        {itemData.map((item, index) => (
          <Item
            key={index}
            item={item}
          />
        ))}
      </div>


    </section>

);
};

