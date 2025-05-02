
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#F9F4F4] text-center py-8 px-4 border-t border-[#D4A5A5]">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de Copyright */}
          <div className="text-sm text-[#A65A4A] mb-4 md:mb-0">
            <p> 2025 Daniel Cantor. Todos los derechos reservados.</p>
          </div>

          {/* Redes Sociales */}
          <div className="flex space-x-6 text-2xl text-[#C94C4C]">
            <a 
              href="https://github.com/SiKoDhany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-125 inline-block"
            >
              <BsGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-f-cantor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-125 inline-block"
            >
              <BsLinkedin />
            </a>
            <a 
              href="https://x.com/SiKoDhany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:text-[#A65A4A] hover:scale-125 inline-block"
            >
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;