import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
// import ComputerALL from "./components/ComputerALL.jsx";

const App = () => {
  
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div style={{ width: "100%" }} className="h-lvh absolute top-0 z-[-2] h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>  
      </div>
        <div className="container mx-auto px-8">
          <Navbar />
       
          <Hero />
        <About />
        {/* <ComputerALL/> */}
          <Technologies />
          <Experience />
          <Projects />
          <Contact/>
        </div>
    </div>
  );
}
export default App;