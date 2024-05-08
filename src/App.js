function App() {
  return (
    <div className="wrapper max-2xl my-0 mx-auto text-base text-white">
      <div className="hero ">
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
    </div>
  );
}

export default App;
