import React from 'react';
export default function Timeline(){
  const weeks = Array.from({ length: 7 }, (_, index) => index + 1);
  return (
    <div className="my-1 mx-auto max-w-xl">
      {weeks.map((week,index) => (
        <div key = {index} className="week">
          <div>
            <p>Неделя №{week}</p>
            <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
