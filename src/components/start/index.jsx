import React from 'react';

export default function Start(){
  return (
    <section id = "start" className="start px-20 ml-64 mb-48">
      <div className="flex items-center text-center">
        <img width={70} height={45} src="/img/logo/start.svg" draggable="false" alt="FastStart Logo"/>
        <h2 className="text-5xl font-bold ml-12 ">Быстрый старт</h2>
      </div>
      <p className="max-w-md text-neutral-500 mt-10 ml-1 mb-20 ">Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
      <div className="text-4xl font-bold">
        <span>100%</span>
        <span>75%</span>
        <span>50%</span>
        <span>Итог</span>
        <div className="flex items-center mt-5">
          <div className="w-80 h-20 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
          <div className="w-80 h-14 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
          <div className="w-80 h-8 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
          <div className="w-80 h-2.5 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
        </div>
        <div className="flex font-normal mt-5 items-center">
          <p className="text-sm text-neutral-500 max-w-72 mr-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
          <p className="text-sm text-neutral-500 max-w-72 mr-9 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
          <p className="text-sm text-neutral-500 max-w-72 mr-9 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
          <p className="text-sm text-neutral-500 max-w-72 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>
      </div>
    </section>
  );
};

