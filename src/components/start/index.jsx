import React from 'react';
import Infographic from "./Infographic";

export default function Start(){
  return (
    <section id = "start" className="start px-20 ml-64 mb-48">
      <div className="flex items-center text-center">
        <img width={70} height={45} src="/img/logo/start.svg" draggable="false" alt="FastStart Logo"/>
        <h2 className="text-5xl font-bold ml-12 ">Быстрый старт</h2>
      </div>
      <p className="max-w-md text-neutral-500 mt-10 ml-1 mb-20 ">Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
      <Infographic/>
    </section>
  );
};

