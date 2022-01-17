import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Layout/Navbar";
import Skills from "./components/Skills";
import Footer from './components/Layout/Footer'

function App() {

  document.title = 'Barnabas Varga - Porfolio'

  return (
    <div className="w-full h-full bg-slate-50 scrollbar-hide">
      <Navbar />
      <div className="pt-12 w-full h-full">
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
