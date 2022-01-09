import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {

  document.title = 'Barnabas Varga - Porfolio'

  return (
    <div className="w-full h-full bg-slate-50 scrollbar-hide">
      <Navbar />
      <div className="pt-12 w-full h-full">
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
