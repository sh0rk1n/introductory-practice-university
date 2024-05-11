import React from 'react';
import data from "../../../data.json"

export default function StudentCourse(){
  return (
    <div className="text-neutral-500 mr-20 w-64">
      {data.students.map((item, index) => (
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
