import React from 'react';
import Infographic from "./Infographic";
import Reveal from "../utils/Reveal";
export default function Start(){
  return (
    <section id = "start" className="start px-20 ml-64 mb-48">
      <div className="flex items-center text-center">
       <Reveal>
        <img width={70} height={45} src="/img/logo/start.svg" draggable="false" alt="FastStart Logo"/>
       </Reveal>
        <Reveal>
        <h2 className="text-5xl font-bold ml-12 ">Быстрый старт</h2>
        </Reveal>
      </div>
      <Reveal>
      <p className="max-w-md text-neutral-500 mt-10 mb-20 ml-1">Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
      </Reveal>
      <Infographic/>
    </section>
  );
};

