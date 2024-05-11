import React from 'react';
import LogoItem from "./LogoItem";
import Reveal from "../utils/Reveal";

export default function Partners(){
  return (
    <section id='partners' className="partners px-20 ml-64 mb-48">
      <div className="flex items-center text-center">
        <Reveal>
          <img width={70} height={45} src="/img/logo/partners.svg" draggable="false" alt="Partners Logo"/>
        </Reveal>
        <Reveal>
          <h2 className="text-5xl font-bold ml-12 ">Партнеры - топовые бренды</h2>
        </Reveal>
      </div>
      <Reveal>
        <LogoItem/>
      </Reveal>
    </section>

  );
};

