export default function Header() {
  return (
    <header className="flex items-center justify-between pt-7 pb-48 px-20">
      <img width={40} height={40} src="/img/logo.svg" draggable="false" alt="Logo"/>
      <nav>
        <ul className="flex ml-52 ">
          <li>Главная</li>
          <li>Курсы</li>
          <li>Расписание</li>
          <li>Преподаватели</li>
          <li>Рассылка</li>
          <li>Контакты</li>
        </ul>
      </nav>
      <button className=" px-5 py-2.5 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full	">Зайти в кабинет
      </button>
    </header>
  )
}