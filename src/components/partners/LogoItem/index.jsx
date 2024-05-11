import React from 'react';

export default function LogoItem() {
  // const renderLogo = (className = "") => (
  //   <img className={`pt-7 ${className}`} src="/img/msi.svg" draggable="false" alt="Logo MSI"/>
  // );

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





// Надо как-то придумать сделать так, не было в каждом img див
// <>
//   {[...Array(8)].map((_, index) => (
//     <div key={index} className={`col-logo flex ${index < 4 ? 'border-b border-neutral-700' : ''}`}>
//       {renderLogo(index < 4 ? '' : 'pt-7')}
//     </div>
//   ))}
// </>
// Если index < 4, то создай <div className="col-logo flex border-b border-neutral-700">, где будут //       <img key={index} className="" src="/img/msi.svg" draggable="false" alt="Logo MSI"/>