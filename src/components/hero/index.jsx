import React from 'react';
import CountTimer from "./CountDown";


export default function Hero(){
  return (
    <section id='/' className="hero mb-48">
      <div className="px-20 ml-64">
        <h1 className="text-6xl	font-bold  leading-[6rem] ">Первый курс <br/> по компьютерной сборке</h1>
        <div className='timer flex items-center text-center mt-12'>
          <CountTimer/>
        </div>
      </div>
      <div className="hero-bottom flex bg-[#121212] max-w-full h-32 mt-60  content-center items-center ">
        <button className="ml-[22rem] bg-gradient-to-br from-red-500 to-purple-900 py-2.5 px-8 rounded-full mr-20">Заказать курс
        </button>
        <div className="mr-20">
          <p className="text-neutral-500 mb-2">Учеников всего:
            <span className="text-white ml-28">200</span>
          </p>
          <p className="text-neutral-500">Успешно закончили курс:
            <span className="text-white ml-10">190</span>
          </p>
        </div>

        <div className="flex text-neutral-500 flex-col ">
          <p className="mb-1">Заработано учениками:
            <span className="text-white ml-10">400 000&#8381;</span>
          </p>
          <div className="progress mb-1">
            <div style={{width: '70%'}} className="progress__inner"></div>
          </div>

          <div className="flex justify-between">
            <p>0</p>
            <p>1 000 000&#8381;</p>
          </div>
        </div>
      </div>
    </section>
  );
};
