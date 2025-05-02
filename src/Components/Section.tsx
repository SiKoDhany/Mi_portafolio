import Particles from "./Particles";
import { SiTypescript, SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import foto from "../photo/foto.jpeg";

const Section = () => {
  return (
    <>
      <section id="inicio" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#F9F4F4] pt-24 md:pt-20">
        {/* Partículas de fondo */}
        <div className="absolute inset-0 z-10">
          <Particles
            particleColors={['#D4A5A5', '#B99A9A', '#A88FAC']}
            particleCount={200}
            particleSpread={12}
            speed={0.5}
            particleBaseSize={80}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        {/* Contenido centrado */}
        <img
          src={foto}
          alt="Foto de perfil"
          className="w-52 h-52 rounded-full object-cover mb-8 mt-4 border-4 border-[#D4A5A5] z-30"
        />
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#C94C4C]">Daniel Felipe Cantor Sequeda</h1>
          <h2 className="text-[#A65A4A] md:font-medium text-lg mb-6">Desarrollador Frontend Junior</h2>
          <p className="text-base md:text-lg leading-relaxed p-2 text-[#2E2E2E]">
            Estudiante de Ingeniería de Software con sólida formación técnica como Técnico en Programación.
            Apasionado por el desarrollo frontend y la creación de interfaces web intuitivas, accesibles y responsivas.
            Me especializo en tecnologías modernas como React, TypeScript y Tailwind CSS. Me destaco por mi aprendizaje
            autónomo, capacidad de adaptación y compromiso con soluciones que mejoren la experiencia del usuario.
          </p>
        </div>
        <div className="p-4 container mx-auto flex justify-center items-center space-x-6 md:space-x-10 text-4xl mt-8 text-[#A65A4A]">
          <div className="group">
            <SiReact 
              title="React" 
              className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#C94C4C] cursor-pointer"
            />
          </div>
          <div className="group">
            <SiTailwindcss 
              title="Tailwind CSS" 
              className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#C94C4C] cursor-pointer"
            />
          </div>
          <div className="group">
            <SiTypescript 
              title="TypeScript" 
              className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#C94C4C] cursor-pointer"
            />
          </div>
          <div className="group">
            <SiHtml5 
              title="HTML5" 
              className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#C94C4C] cursor-pointer"
            />
          </div>
          <div className="group">
            <SiCss3 
              title="CSS3" 
              className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#C94C4C] cursor-pointer"
            />
          </div>
          <div className="group">
            <SiJavascript 
              title="JavaScript" 
              className="transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#C94C4C] cursor-pointer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;