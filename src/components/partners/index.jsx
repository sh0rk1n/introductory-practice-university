import React from 'react';

export default function Partners(){
  return (
    <section id='partners' className="partners px-20 ml-64 mb-48">
      <div className="flex items-center text-center">
        <img width={70} height={45} src="/img/logo/partners.svg" draggable="false" alt="Partners Logo"/>
        <h2 className="text-5xl font-bold ml-12 ">Партнеры - топовые бренды</h2>
      </div>
      <div className="flex flex-col items-center mt-20 mr-48 ">
        <div className="col-logo flex border-b border-neutral-700  ">
          <img className="" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
          <img className="" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
          <img className="" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
          <img className="" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
        </div>
        <div className="col-logo flex ">
          <img className="pt-7" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
          <img className="pt-7" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
          <img className="pt-7" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
          <img className="pt-7" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
        </div>
      </div>
    </section>

  );
};

