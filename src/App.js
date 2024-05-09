 // ToDoo: 1. Сделать адаптив
 //         3. Подправить косяк в teachers
 //         4. Прописать атрибут в img, чтобы нельзя было копировать изображение
 //         5. Сделать везде cursor: pointer
 //         6. Оптимизировать код: удалить лишние стили / подумать
 //         7. Разделить блоки на компоненты + укоротить через .map() (что повторяется)
 //         8. Сделать плавный скролл
 //         9. Сделать, что когда нажимаешь на кнопку, то вылазило уведомление

 import Header from "./components/header";
 import CountTimer from "./components/count-time";

 function App() {
  return (
    <div className="wrapper my-0 mx-auto text-base text-white ">
      <div className="hero mb-48">
        <Header/>

        <div className="px-20 ml-64">
          <h1 className="text-6xl	font-bold  leading-[6rem] ">Первый курс <br/> по компьютерной сборке</h1>
          <div className='timer flex items-center text-center mt-12'>
            <CountTimer/>
          </div>
        </div>
        <div className="hero-bottom flex bg-[#121212] max-w-full h-32 mt-60  content-center items-center ">
          <button
            className="ml-[22rem] bg-gradient-to-br from-red-500 to-purple-900 py-2.5 px-8 rounded-full mr-20">Заказать
            курс
          </button>
          <div className="mr-20">
            <p className="text-neutral-500 mb-2">
              Учеников всего:
              <span className="text-white ml-28">200</span>
            </p>
            <p className="text-neutral-500">
              Успешно закончили курс:
              <span className="text-white ml-10">190</span>
            </p>
          </div>

          <div className="flex text-neutral-500 flex-col ">
            <p className="mb-1">
              Заработано учениками:
              <span className="text-white ml-10">
              400 000&#8381;
              </span>
            </p>
            <div className="progress mb-1">
              <div style={{width: '70%'}} className="progress__inner"></div>
            </div>

            <div className="flex justify-between">
              <p>0</p>
              <p>1 000 000&#8381;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about flex items-center px-20  ml-64 mb-48 ">
        <img src="/img/pc-block.svg" alt=""/>
        <div className=" ml-36 mb-36 content-center ">
          <h2 className="text-5xl font-bold mb-11">Чем мы занимаемся?</h2>
          <p className="max-w-screen-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim
            et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum,
            morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet
            fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus,
            cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
        </div>
      </div>

      <div className="start px-20 ml-64 mb-48">
        <div className="flex items-center text-center">
          <img width={70} height={45} src="/img/logo/start.svg" alt=""/>
          <h2 className="text-5xl font-bold ml-12 ">Быстрый старт</h2>
        </div>
        <p className="max-w-md text-neutral-500 mt-10 ml-1 mb-20 ">Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
        <div className="text-4xl font-bold">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>Итог</span>
          <div className="flex items-center mt-5">
            <div className="w-80 h-20 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
            <div className="w-80 h-14 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
            <div className="w-80 h-8 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
            <div className="w-80 h-2.5 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
          </div>
          <div className="flex font-normal mt-5 items-center">
            <p className="text-sm text-neutral-500 max-w-72 mr-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
              velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
              dui.</p>
            <p className="text-sm text-neutral-500 max-w-72 mr-9 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
              velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
              dui.</p>
            <p className="text-sm text-neutral-500 max-w-72 mr-9 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
              velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
              dui.</p>
            <p className="text-sm text-neutral-500 max-w-72 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
              velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
              dui.</p>
          </div>

        </div>
      </div>

      <div className="advantages flex flex-col items-center px-20 ml-20 mb-48 ">
        <h2 className="text-5xl font-bold mb-28 text-center">Получите профессию прямо сейчас</h2>
        <div className="flex text-center items-center ">
          <div className="flex flex-col items-center mr-20">
            <img width={100} height={100} className="mb-11" src="/img/icons/pc.svg" alt=""/>
            <h3 className="text-2xl font-medium mb-7">Только практические <br/> навыки в работе</h3>
            <p className="text-neutral-500 max-w-[358px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
              dui.</p>

          </div>

          <div className="flex flex-col items-center mr-20">
            <img width={100} height={100} className="mb-11" src="/img/icons/flash.svg" alt=""/>
            <h3 className="text-2xl font-medium mb-7">Работа на самом <br/>современном оборудовании</h3>
            <p className="text-neutral-500 max-w-[358px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat
              dui.</p>

          </div>

          <div className="flex flex-col items-center">
            <img width={100} height={100} className="mb-11" src="/img/icons/usb.svg" alt=""/>
            <h3 className="text-2xl font-medium mb-7">Сертификация <br/> по окончании обучения</h3>
            <p className="text-neutral-500 max-w-[358px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
          </div>
        </div>
      </div>

      <div className="partners px-20 ml-64 mb-48">

        <div className="flex items-center text-center">
          <img width={70} height={45} src="/img/logo/partners.svg" alt=""/>
          <h2 className="text-5xl font-bold ml-12 ">Партнеры - топовые бренды</h2>
        </div>

        <div className="flex flex-col items-center mt-20 mr-48 ">
          <div className="col-logo flex border-b border-neutral-700  ">
            <img className="" src="/img/msi.svg" alt="Logo-1"/>
            <img className="" src="/img/msi.svg" alt="Logo-2"/>
            <img className="" src="/img/msi.svg" alt="Logo-3"/>
            <img className="" src="/img/msi.svg" alt="Logo-4"/>
          </div>
          <div className="col-logo flex ">
            <img className="pt-7" src="/img/msi.svg" alt="Logo-5"/>
            <img className="pt-7" src="/img/msi.svg" alt="Logo-6"/>
            <img className="pt-7" src="/img/msi.svg" alt="Logo-7"/>
            <img className="pt-7" src="/img/msi.svg" alt="Logo-8"/>
          </div>

        </div>

      </div>

      <div className="program px-20 ml-20 mb-48 ">
        <div className="flex flex-col items-center text-center">
          <img className="mb-8" width={70} height={45} src="/img/logo/program.svg" alt=""/>
          <h2 className="text-5xl font-bold">Программа обучения</h2>
          <p className=" text-neutral-500 mt-8 mb-20 ">Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
        </div>

        <div className="my-1 mx-auto max-w-xl">
          <div className="week">
            <div>
              <p>Неделя №1</p>
              <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
            </div>
          </div>
          <div className="week">
            <div>
            <p>Неделя №2</p>
              <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
            </div>
          </div>
          <div className="week">
            <div>
              <p>Неделя №3</p>
              <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
            </div>
          </div>
          <div className="week">
            <div>
              <p>Неделя №4</p>
              <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
            </div>
          </div>
          <div className="week">
            <div>
              <p>Неделя №5</p>
              <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
            </div>
          </div>
          <div className="week">
            <div>
              <p>Неделя №6</p>
              <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
            </div>
          </div>
          <div className="week">
            <div>
              <p>Неделя №7</p>
              <h4>Красивая часть курса, <br/> которая помогает в успехе</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="teachers px-20 ml-64 mb-48">
        <div className="flex items-center">
          <img src="/img/logo/teachers.svg" alt=""/>
          <h2 className="text-5xl font-bold ml-12 ">Ваши преподаватели</h2>
        </div>
        <div className="flex justify-between mt-28 ml-20 max-w-screen-xl">
          <div className="flex flex-col items-center ml-8">
            <img className="rounded-[100%] h-48	w-48 mb-8" src="/img/teachers/teacher-1.jpg" alt=""/>
            <h4 className="text-2xl font-medium mb-3 ">Михаил Белкин</h4>
            <p className="text-neutral-500 mb-5">Специалист по видеокартам</p>
            <button className="border rounded-full py-2.5 px-7 ">Биография</button>
          </div>
          <div className="flex flex-col items-center ml-8">
            <img className="rounded-[100%] h-48	w-48 mb-8" src="/img/teachers/teacher-2.jpg" alt=""/>
            <h4 className="text-2xl font-medium mb-3 ">Константин Иванов</h4>
            <p className="text-neutral-500 mb-5">Специалист по процессорам</p>
            <button className="border rounded-full py-2.5 px-7 ">Биография</button>
          </div>
          <div className="flex flex-col items-center mr-32">
            <img className="rounded-[100%] h-48	w-48 mb-8" src="/img/teachers/teacher-3.png" alt=""/>
            <h4 className="text-2xl font-medium mb-3 ">Иван Нитроксенус</h4>
            <p className="text-neutral-500 mb-5">Специалист по блокам питания</p>
            <button className="border rounded-full py-2.5 px-7 ">Биография</button>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center text-center ml-32">
        <h2 className="text-5xl font-bold ">Статьи каждую неделю</h2>
        <p className=" text-neutral-500 mt-8 mb-16 ">Больше 90% учеников прошли полный курс и смогли <br/> собрать свой
          первый компьютер</p>
        <div className="flex relative h-11">
          <input className="w-96 bg-white bg-opacity-25 border-none rounded-l-full pl-4 mr-20 outline-none" type="text" placeholder="E-mail"/>
          <button className="bg-gradient-to-br from-red-500 to-purple-900  left-80 absolute rounded-full py-2.5 px-8 w-40  " >Подписаться</button>
        </div>
        <div className="flex mt-10 mb-11">
          <img className="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-600 p-3.5 rounded-[100%]" src="/img/icons/vk.svg" alt=""/>
          <img className="w-12 h-12 ml-8 bg-gradient-to-br from-purple-300 to-indigo-600 p-3.5 rounded-full" src="/img/icons/youtube.svg" alt=""/>
        </div>
        <p className="text-neutral-500 mb-4">Сайт создал Ткачев Данил</p>
      </footer>
    </div>
  );
}

export default App;

