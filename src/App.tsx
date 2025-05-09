import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Header/>
      <main className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory">
        <div id="inicio" className="h-screen snap-start">
          <Section/>
        </div>
        <div id="proyectos" className="h-screen snap-start">
          <Projects/>
        </div>
        <div id="contacto" className="h-screen snap-start">
          <Contact/>
        </div>
        <div className="snap-start">
          <Footer/>
        </div>
      </main>
    </>
  );
};

export default App;