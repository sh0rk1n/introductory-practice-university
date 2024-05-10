import React from 'react';

export default function Advantages(){
  return (
    <section className="advantages flex flex-col items-center px-20 ml-20 mb-48 ">
      <h2 className="text-5xl font-bold mb-28 text-center">Получите профессию прямо сейчас</h2>
      <div className="flex text-center items-center ">
        <div className="flex flex-col items-center mr-20">
          <img width={100} height={100} className="mb-11" src="/img/icons/pc.svg" draggable="false" alt="Icon-Pc"/>
          <h3 className="text-2xl font-medium mb-7">Только практические <br/> навыки в работе</h3>
          <p className="text-neutral-500 max-w-[358px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>

        <div className="flex flex-col items-center mr-20">
          <img width={100} height={100} className="mb-11" src="/img/icons/flash.svg" draggable="false" alt="Icon-Flash"/>
          <h3 className="text-2xl font-medium mb-7">Работа на самом <br/>современном оборудовании</h3>
          <p className="text-neutral-500 max-w-[358px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>

        <div className="flex flex-col items-center">
          <img width={100} height={100} className="mb-11" src="/img/icons/usb.svg" draggable="false" alt="Icon-USB"/>
          <h3 className="text-2xl font-medium mb-7">Сертификация <br/> по окончании обучения</h3>
          <p className="text-neutral-500 max-w-[358px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>
      </div>
    </section>

  );
};

