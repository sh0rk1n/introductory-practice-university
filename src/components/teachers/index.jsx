import React from 'react';
import Reveal from "../utils/Reveal";

const teacherData = [
  {
    imgSrc: '/img/teachers/teacher-1.jpg',
    name: 'Михаил Белкин',
    descr: 'Специалист по видеокартам'
  },
  {
    imgSrc: '/img/teachers/teacher-2.jpg',
    name: 'Константин Иванов',
    descr: 'Специалист по процессорам'
  },
  {
    imgSrc: '/img/teachers/teacher-3.png',
    name: 'Иван Нитроксенус',
    descr: 'Специалист по блокам питания'
  },
]
export default function Teachers() {
  return (
    <section id='teachers' className="teachers px-20 ml-64 mb-48">
      <div className="flex items-center">
        <Reveal>
          <img src="/img/logo/teachers.svg" draggable="false" alt="Teachers Logo"/>
        </Reveal>
        <Reveal>
          <h2 className="text-5xl font-bold ml-12 ">Ваши преподаватели</h2>
        </Reveal>
      </div>
      <div className="flex justify-between mt-28 ml-10 max-w-screen-xl">
        {teacherData.map((item,index) => (
          <Reveal  key ={index} >
          <div className="flex flex-col items-center ml-8">
            <img className="rounded-[100%] h-48	w-48 mb-8" src={item.imgSrc} draggable="false"
                 alt="Teacher"/>
            <h4 className="text-2xl font-medium mb-3 ">{item.name}</h4>
            <p className="text-neutral-500 mb-5">{item.descr}</p>
            <button className="border rounded-full py-2.5 px-7 ">Биография</button>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
