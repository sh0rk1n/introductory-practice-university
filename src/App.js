 // ToDoo:
 //
 //         1. Обернуть заголовки и описания под заг в компонент
 //         6. Оптимизировать код: удалить лишние стили / подумать
 //         7. Разделить блоки на компоненты + укоротить через .map() (что повторяется)
 //         8. Сделать плавный скролл
 //         9. Сделать, что когда нажимаешь на кнопку, то вылазило уведомление
 //         10. Всю data перенести в json

 import React from "react";
 import {motion} from "framer-motion";

 /* components */
 import Header from "./components/header";
 import Hero from "./components/hero";
 import About from "./components/about";
 import Start from "./components/start";
 import Advantages from "./components/advantages";
 import Program from "./components/program";
 import Teachers from "./components/teachers";
 import Partners from "./components/partners";
 import Footer from "./components/footer";

 function App() {

   return (
     <div className="wrapper my-0 mx-auto text-base text-white ">
       <motion.div
         initial={{opacity: 0, y: -100}}
         animate={{opacity: 1, y: 0}}
         exit={{opacity: 0}}
         transition={{duration: 0.8}}
       >
         <Header/>
       </motion.div>
       <motion.div
         initial={{opacity: 0, y: -20}}
         animate={{opacity: 1, y: 190}}
         exit={{opacity: 0}}
         transition={{duration: 0.8}}
       >
         <Hero/>
       </motion.div>
         <About/>
         <Start/>
         <Program/>
         <Advantages/>
         <Teachers/>
         <Partners/>
         <Footer/>

     </div>
 );
 }

 export default App;

