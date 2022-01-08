import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {

  document.title = 'Barnabas Varga - Porfolio'

  return (
    <div className="w-full h-full bg-gray-700">
      <Navbar />
      <div className="pt-12 w-full h-full flex items-center justify-center">
        <Projects />
      </div>
    </div>
  );
}

export default App;
