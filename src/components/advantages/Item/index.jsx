import React from 'react';
import Reveal from "../../utils/Reveal";
export default function Item({item}) {
  return (
    <>
    <Reveal>
      <div className="flex flex-col items-center mr-10 ml-16">
          <img
            width={100}
            height={100}
            className="mb-11"
            src={item.iconSrc}
            draggable="false"
            alt={item.altText}/>
          <h3 className="text-2xl font-medium mb-7 w-[326px]">{item.title}</h3>
          <p className="text-neutral-500 max-w-[358px]">{item.description}</p>
      </div>
    </Reveal>
    </>
  );
};