function App() {
  return (
    <div className="wrapper max-2xl my-0 mx-auto text-base text-white ">
      <div className="hero">
        <header className="flex items-center justify-between  max-w-1760 pt-7 pb-48 px-20">
          <img width={40} height={40} src="/img/logo.svg" alt="Logo"/>
          <nav>
            <ul className="flex">
              <li>Главная</li>
              <li>Курсы</li>
              <li>Расписание</li>
              <li>Преподаватели</li>
              <li>Рассылка</li>
              <li>Контакты</li>
            </ul>
          </nav>
          <button className="ml-20 px-7 py-2.5 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full	">Зайти в кабинет</button>
        </header>
        <div className="px-20">
          <h1 className="text-6xl	font-bold">Первый курс <br/> по компьютерной сборке</h1>
          <div className='timer flex items-center text-center mt-12'>
            <div className="py-5 px-8 bg-[#121212]">
              <h5 className="text-4xl font-bold">18</h5>
              <p className="text-neutral-500">Дней</p>
            </div>
            <div className="py-5 px-8 bg-[#121212]" >
              <h5 className="text-4xl font-bold">18</h5>
              <p className="text-neutral-500">Часов</p>
            </div>
            <div  className="py-5 px-8 bg-[#121212]">
              <h5 className="text-4xl font-bold">18</h5>
              <p className="text-neutral-500">Минут</p>
            </div>
            <div  className="py-5 px-8 bg-[#121212] ">
              <h5 className="text-4xl font-bold">18</h5>
              <p className="text-neutral-500">Секунд</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="hero-bottom flex bg-[#121212] max-w-full h-32 mt-32  content-center items-center px-20">
            <button className="bg-gradient-to-br from-red-500 to-purple-900 py-2.5 px-8 rounded-full mr-20">Заказать курс</button>
            <div className="mr-20">
              <p className="text-neutral-500">
                Учеников всего:
                <span className="text-white ml-28">200</span>
              </p>
              <p className="text-neutral-500">
                Успешно закончили курс:
                <span className="text-white ml-10">190</span>
              </p>
            </div>

            <div className="flex text-neutral-500 flex-col ">
              <p>
                Заработано учениками:
                <span className="text-white ml-10">
              400 000&#8381;
              </span>
              </p>
              <div className="progress">
                <div style={{width: '50%'}} className="progress__inner"></div>
              </div>

              <div className="flex justify-between">

                <p>0</p>
                <p>1 000 000&#8381;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about flex px-20 mb-48 ">
        <img src="/img/pc.svg" alt=""/>
        <div className="max-w-screen-sm ml-36 content-center">
          <h2 className="text-5xl font-bold mb-11">Чем мы занимаемся?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. <br/> Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
        </div>
      </div>
      <div className="start px-20 mb-48">
        <div className="flex items-center text-center">
          <img width={70} height={45} src="/img/logo-start.svg" alt=""/>
          <h2 className="text-5xl font-bold ml-5 ">Быстрый старт</h2>
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
      <div className="advantages  px-20 ">
        <h2 className="text-5xl font-bold mb-28 text-center">Получите профессию прямо сейчас</h2>
        <div className="flex text-center items-center">
          <div className="flex flex-col items-center mr-20">
            <img width={100} height={100} className="mb-11" src="/img/icon-1.svg" alt=""/>
            <h3 className="text-2xl font-medium mb-7">Только практические <br/> навыки в работе</h3>
            <p className="text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
              quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.</p>
          </div>

          <div className="flex flex-col items-center mr-20">
            <img width={100} height={100} className="mb-11" src="/img/icon-2.svg" alt=""/>
            <h3 className="text-2xl font-medium mb-7">Работа на самом <br/>современном оборудовании</h3>
            <p className="text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
              quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.</p>
          </div>

          <div className="flex flex-col items-center">
            <img width={100} height={100} className="mb-11" src="/img/icon-3.svg" alt=""/>
            <h3 className="text-2xl font-medium mb-7">Сертификация <br/> по окончании обучения</h3>
            <p className="text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit
              quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.</p>
          </div>
        </div>
      </div>
      <div className="partners"></div>
    </div>
  );
}

export default App;
