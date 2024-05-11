import React from 'react';
import Item from "./Item";
import data from "../../data.json"
import Reveal from "../utils/Reveal";

export default function Advantages(){
  return (
    <section className="advantages flex flex-col items-center px-20 ml-20 mb-48 ">
      <Reveal>
        <h2 className="text-5xl font-bold mb-28 text-center">Получите профессию прямо сейчас</h2>
      </Reveal>
      <div className="flex text-center items-center ">
        {data.advantages.map((item, index) => (
          <Item
            key={index}
            item={item}
          />
        ))}
      </div>


    </section>

);
};

