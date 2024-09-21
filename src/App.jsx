import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css";
import './index.css';
const App = () => {
  return (
    <div className="bg-primarys text-slate-50 font-inter py-3">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Navbar />
    </div>
  );
};

export default App;
