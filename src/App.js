 // ToDoo:
 //         1.Сделать плавный скролл
 //         2. Оптимизировать код: удалить лишние стили / подумать
 //         3. Сделать анимацию исчезновения для уведомления


 import React from "react";
 import {motion} from "framer-motion";

 /* components */
 import Header from "./components/header";
 import Hero from "./components/hero";
 import About from "./components/about";
 import Start from "./components/start";
 import Program from "./components/program";
 import Advantages from "./components/advantages";
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

