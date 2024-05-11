import React from 'react';
import Reveal from "../../utils/Reveal";

export default function Infographic() {
  const percentages = ['100%', '75%', '50%', 'Итог'];
  const heights = [5,3.5,2,0.625] // rem
  const texts = Array(4).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.');

  return (
    <div className="text-4xl font-bold">
      <Reveal>
        {percentages.map((percent,index) => (
          <span  key={index}>{percent}</span>
        ))}
      </Reveal>
      <div className="flex items-center mt-5">

          {heights.map((height,index) => (
            <Reveal>
            <div
              key={index}
              style={{ height: `${height}rem` }}
              className={`w-80 bg-gradient-to-br from-purple-400 to-indigo-600`}>
            </div>
            </Reveal>

          ))}
      </div>
      <div className="flex font-normal mt-5 items-center">
        {texts.map((text,index) => (
          <p key={index} className="text-sm text-neutral-500 max-w-72 mr-9">{text}</p>
        ))}
      </div>
    </div>
  );
};

