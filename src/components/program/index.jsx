import React from 'react';

export default function Program(){
  return (
    <section className="program px-20 ml-20 mb-48 ">
      <div className="flex flex-col items-center text-center">
        <img className="mb-8" width={70} height={45} src="/img/logo/program.svg" draggable="false" alt="Program Logo"/>
        <h2 className="text-5xl font-bold">Программа обучения</h2>
        <p className=" text-neutral-500 mt-8 mb-20 ">Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
      </div>
      {/*Translate to component*/}
      <div className="my-1 mx-auto max-w-xl">
        <div className="week">
          <div>
            <p>Неделя №1</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
        <div className="week">
          <div>
            <p>Неделя №2</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
        <div className="week">
          <div>
            <p>Неделя №3</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
        <div className="week">
          <div>
            <p>Неделя №4</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
        <div className="week">
          <div>
            <p>Неделя №5</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
        <div className="week">
          <div>
            <p>Неделя №6</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
        <div className="week">
          <div>
            <p>Неделя №7</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

