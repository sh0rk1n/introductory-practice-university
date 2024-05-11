import React from 'react';
const studentsData = [
  {text: "Учеников всего:", value: 200},
  {text: "Успешно закончили курс:", value: 120},
];

export default function StudentCourse(){
  return (
    <div className="text-neutral-500 mr-20 w-64">
      {studentsData.map((item, index) => (
        <div key={index}
        >
            <p className="ml-auto" key={item.text}> {item.text}
              <span className="text-white float-right ">{item.value}</span>
            </p>
        </div>
        )
      )}
    </div>
  );
};
