
import NavBar from "./NavBar";

export default function Header(){
  /*
   const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
     const handleScroll = () => window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
     window.addEventListener("scroll", handleScroll)
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
   */
  return (
    <header
      className="flex items-center justify-between pt-7 px-20">
      <img width={40} height={40} className="cursor-pointer" src="/img/logo.svg" draggable="false" alt="Logo"/>
      <NavBar/>
      <button className=" px-5 py-2.5 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full transition duration-700 hover:opacity-80">Зайти в кабинет</button>
    </header>
  );
};
