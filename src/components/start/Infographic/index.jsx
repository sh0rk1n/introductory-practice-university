import React from 'react';
export default function Infographic() {
  const percentages = ['100%', '75%', '50%', 'Итог'];
  const heights = [20,14,8,2.5]
  const texts = Array(4).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.');
  return (
    <div className="text-4xl font-bold">
      {percentages.map((percent,index) => (
        <span key={index}>{percent}</span>
      ))}
      <div className="flex items-center mt-5">
        {heights.map((height,index) => (
          <div
            key={index}
            className={`w-80 h-${height} bg-gradient-to-br from-purple-400 to-indigo-600`}>
          </div>
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

