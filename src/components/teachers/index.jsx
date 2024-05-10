import React from 'react';

export default function Teachers(){
  return (
    <section id='teachers' className="teachers px-20 ml-64 mb-48">
      <div className="flex items-center">
        <img src="/img/logo/teachers.svg" draggable="false" alt="Teachers Logo"/>
        <h2 className="text-5xl font-bold ml-12 ">Ваши преподаватели</h2>
      </div>
      <div className="flex justify-between mt-28 ml-20 max-w-screen-xl">
        <div className="flex flex-col items-center ml-8">
          {/*Translate to compontent*/}
          <img className="rounded-[100%] h-48	w-48 mb-8" src="/img/teachers/teacher-1.jpg" draggable="false" alt="Teacher-1"/>
          <h4 className="text-2xl font-medium mb-3 ">Михаил Белкин</h4>
          <p className="text-neutral-500 mb-5">Специалист по видеокартам</p>
          <button className="border rounded-full py-2.5 px-7 ">Биография</button>
        </div>
        <div className="flex flex-col items-center ml-8">
          <img className="rounded-[100%] h-48	w-48 mb-8" src="/img/teachers/teacher-2.jpg" draggable="false" alt="Teacher-2"/>
          <h4 className="text-2xl font-medium mb-3 ">Константин Иванов</h4>
          <p className="text-neutral-500 mb-5">Специалист по процессорам</p>
          <button className="border rounded-full py-2.5 px-7 ">Биография</button>
        </div>
        <div className="flex flex-col items-center mr-32">
          <img className="rounded-[100%] h-48	w-48 mb-8" src="/img/teachers/teacher-3.png" draggable="false" alt="Teacher-3"/>
          <h4 className="text-2xl font-medium mb-3 ">Иван Нитроксенус</h4>
          <p className="text-neutral-500 mb-5">Специалист по блокам питания</p>
          <button className="border rounded-full py-2.5 px-7 ">Биография</button>
        </div>
      </div>
    </section>
  );
};
