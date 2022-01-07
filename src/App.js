import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="w-screen h-screen bg-gray-700">
      <Navbar />
      <div className="pt-12 w-full h-full flex items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}

export default App;
