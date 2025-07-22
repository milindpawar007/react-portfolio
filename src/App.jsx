import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div className="font-sans">

            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}
