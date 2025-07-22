import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className="bg-primary text-white py-4 px-6 shadow-md sticky top-0 z-50 border-b border-gray-800">
            <ul className="flex justify-center gap-8 text-base md:text-lg font-medium">
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer hover:text-accent transition relative group"
                    >
                        Home
                        <span className="block h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer hover:text-accent transition relative group"
                    >
                        Projects
                        <span className="block h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer hover:text-accent transition relative group"
                    >
                        About
                        <span className="block h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer hover:text-accent transition relative group"
                    >
                        Contact
                        <span className="block h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
