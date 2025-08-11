import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Favicon from "react-favicon";

export default function App() {
    return (
        <div className="font-sans">
            <Favicon url="https://img.icons8.com/ios-filled/50/000000/source-code.png" />
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}
