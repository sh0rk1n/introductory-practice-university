import React, {useState} from 'react';
import Reveal from "../utils/Reveal";
import {Notification} from "../utils/Notification";
export default function Footer(){
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');
  const handleClick = () => {
    if (email.trim() !== '') {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 800);
    }
  };

  return (
    <footer id='footer' className="flex flex-col items-center text-center ml-32">
      <Reveal>
        <h2 className="text-5xl font-bold ">Статьи каждую неделю</h2>
      </Reveal>
      <Reveal>
        <p className=" text-neutral-500 mt-8 mb-16 ">Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
      </Reveal>
      <div className="flex relative h-11">
        <Reveal>
          <input
            className="w-96 h-11 pl-4 mr-20  bg-white bg-opacity-25 border-none rounded-l-full outline-none "
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-40 py-2.5 px-8 bg-gradient-to-br from-red-500 to-purple-900 rounded-full absolute left-80"
            onClick={handleClick}
          >
            Подписаться</button>
        </Reveal>
        <Notification isMessageVisible={showMessage}/>
      </div>
      <div className="flex mt-10 mb-11">
        <Reveal>
          <a href="https://github.com/sh0rk1n" target="_blank">
            <img className="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-600 p-3.5 rounded-[100%] cursor-pointer" src="/img/icons/vk.svg" draggable="false" alt="VK Logo"/>
          </a>
        </Reveal>
        <Reveal>
          <a href="https://github.com/sh0rk1n" target="_blank">
            <img className="w-12 h-12 ml-8 bg-gradient-to-br from-purple-300 to-indigo-600 p-3.5 rounded-full cursor-pointer" src="/img/icons/youtube.svg" draggable="false" alt="Youtube Logo"/>
          </a>
        </Reveal>
      </div>
      <Reveal>
        <p className="text-neutral-500 mb-4">Сайт создал Ткачев Данил</p>
      </Reveal>
    </footer>
  );
};
