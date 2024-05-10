import React from 'react';
import Timeline from "./Timeline";

export default function Program(){
  return (
    <section className="program px-20 ml-20 mb-48 ">
      <div className="flex flex-col items-center text-center">
        <img className="mb-8" width={70} height={45} src="/img/logo/program.svg" draggable="false" alt="Program Logo"/>
        <h2 className="text-5xl font-bold">Программа обучения</h2>
        <p className=" text-neutral-500 mt-8 mb-20 ">Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
      </div>
      <Timeline/>
    </section>
  );
};

