import React from 'react';
import Reveal from "../utils/Reveal";

export default function About(){
  return (
    <section id='about' className="about flex items-center px-20 ml-64 mb-48">
      <Reveal>
        <img src="/img/pc-block.svg" draggable="false" alt="PC Block"/>
      </Reveal>
        <div className="ml-36 mb-36 content-center">
      <Reveal>
        <h2 className="text-5xl font-bold mb-11">Чем мы занимаемся?</h2>
      </Reveal>
      <Reveal>
        <p className="max-w-screen-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim
          et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum,
          morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet
          fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus,
          cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.
        </p>
      </Reveal>
      </div>
    </section>
  );
};
