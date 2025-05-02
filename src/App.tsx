
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";


const App = () => {

  return (

    <>
  
      <Header/>

      <main className=" snap-y snap-mandatory relative w-full h-screen overflow-auto">
        <div id="inicio" className=" snap-center ">
      <Section/>
        </div>
        <div id="proyectos" className=" snap-center">
      <Projects/>
        </div>
        <div id="contacto" className=" snap-center">
      <Contact/>
        </div>
      <div className=" snap-end">
      <Footer/>
      </div>
  
      </main>
    </>

  );
};

export default App;