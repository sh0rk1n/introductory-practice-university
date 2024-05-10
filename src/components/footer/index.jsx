import React from 'react';
export default function Footer(){
  return (
    <footer id='footer' className="flex flex-col items-center text-center ml-32">
      <h2 className="text-5xl font-bold ">Статьи каждую неделю</h2>
      <p className=" text-neutral-500 mt-8 mb-16 ">Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
      <div className="flex relative h-11">
        <input className="w-96 bg-white bg-opacity-25 border-none rounded-l-full pl-4 mr-20 outline-none" type="text" placeholder="E-mail"/>
        <button className="bg-gradient-to-br from-red-500 to-purple-900  left-80 absolute rounded-full py-2.5 px-8 w-40  ">Подписаться</button>
      </div>
      <div className="flex mt-10 mb-11">
        <img className="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-600 p-3.5 rounded-[100%] cursor-pointer" src="/img/icons/vk.svg" draggable="false" alt="VK Logo"/>
        <img className="w-12 h-12 ml-8 bg-gradient-to-br from-purple-300 to-indigo-600 p-3.5 rounded-full cursor-pointer" src="/img/icons/youtube.svg" draggable="false" alt="Youtube Logo"/>
      </div>
      <p className="text-neutral-500 mb-4">Сайт создал Ткачев Данил</p>
    </footer>
  );
};
