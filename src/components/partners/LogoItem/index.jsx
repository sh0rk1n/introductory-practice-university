import React from 'react';
export default function LogoItem() {
  return (
    <div className="flex flex-col items-center mt-20 mr-48 ">
      <div className="col-logo flex border-b border-neutral-700">
        {[...Array(4)].map((_, index) => (
          <img key={index} className="" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
        ))}
      </div>
      <div className="col-logo flex">
        {[...Array(4)].map((_, index) => (
          <img key={index} className="pt-7" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
        ))}
      </div>
    </div>
  );
};
