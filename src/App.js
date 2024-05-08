function App() {
  return (
    <div className="root px-20">
      <div>
        <header className="flex items-center justify-between  max-w-1760 pt-2.5 pb-48">

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
          <button className="">Зайти в кабинет</button>
        </header>
        <div>
          <h1>Первый курс по компьютерной сборке</h1>
          <div>
            <span>18 дней</span>
            <span>18 часов</span>
            <span>18 минут</span>
            <span>18 секунд</span>
          </div>
        </div>
        <div>
          <button>Заказать курс</button>
          <div>
            <p>Учеников всего: 200</p>
            <p>Успешно закончили курс: 190</p>
          </div>
          <div>
            <p>Заработано учениками: 400 000&#8381;</p>
            <div></div>
            <div>
              <p>0</p>
              <p>1 000 000&#8381;</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
