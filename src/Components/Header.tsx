import { useState, useEffect } from "react";
import { TiThMenuOutline,TiThMenu } from "react-icons/ti";
import { BsGithub, BsLinkedin,BsTwitterX } from "react-icons/bs";

const menu =<TiThMenuOutline />
const close =<TiThMenu />

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="py-4 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-[#111827] bg-white/80 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex grow basis-0">
          <span className="font-bold text-2xl splash-font text-[#C94C4C]">
            Daniel<span>Cantor</span>
          </span>
        </div>

        {/* Navegación para pantallas grandes */}
        <nav className="hidden md:flex text-1xl text-[#C94C4C]">
          <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4">
            <li>
              <a 
                href="#inicio" 
                className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-110 inline-block"
              >Inicio</a>
            </li>
            <li>
              <a 
                href="#proyectos" 
                className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-110 inline-block"
              >Proyectos</a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-110 inline-block"
              >Contacto</a>
            </li>
          </ul>
        </nav>
        <nav className="hidden md:flex grow justify-end basis-0 text-2xl text-[#C94C4C]">
          <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4">
            <li>
              <a 
                href="https://github.com/SiKoDhany" 
                target="_blank" 
                className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-125 inline-block"
              ><BsGithub/></a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/daniel-f-cantor/" 
                target="_blank" 
                className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-125 inline-block"
              ><BsLinkedin/></a>
            </li>
            <li>
              <a 
                href="https://x.com/SiKoDhany" 
                target="_blank" 
                className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-125 inline-block"
              ><BsTwitterX/></a>
            </li>
          </ul>
        </nav>

        {/* Botón para pantallas pequeñas */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-[#C94C4C] text-white px-4 py-2 rounded"
        >
          {isMenuOpen ? close : menu}
        </button>

        {/* Menú desplegable para pantallas pequeñas */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } fixed top-16 right-0 w-screen bg-[#F9F4F4] shadow-lg z-50 rounded-lg`}
        >
          <ul className="grid grid-cols-3 gap-4 justify-items-center text-[#A65A4A]">
            <li className="py-2"><a href="#inicio">Inicio</a></li>
            <li className="py-2"><a href="#proyectos">Proyectos</a></li>
            <li className="py-2"><a href="#contacto">Contacto</a></li>
            <li className="py-2 text-2xl"><a href="https://www.linkedin.com/in/daniel-f-cantor/" target="_blank"><BsLinkedin/></a></li>
            <li className="py-2 text-2xl"><a href="https://github.com/SiKoDhany" target="_blank"><BsGithub/></a></li>
            <li className="py-2 text-2xl"><a href="https://x.com/SiKoDhany" target="_blank"><BsTwitterX/></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;