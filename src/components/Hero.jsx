import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Hero() {
    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        // Generate random floating circles
        const generatedShapes = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            size: 20 + Math.random() * 40,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: 4 + Math.random() * 6,
        }));
        setShapes(generatedShapes);
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center text-white overflow-hidden px-4"
        >
            {/* Floating animated shapes */}
            {shapes.map((shape) => (
                <div
                    key={shape.id}
                    className="absolute rounded-full bg-blue-500 opacity-10 blur-xl animate-float"
                    style={{
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        top: `${shape.top}%`,
                        left: `${shape.left}%`,
                        animationDuration: `${shape.duration}s`,
                    }}
                ></div>
            ))}

            {/* Main content container with glass effect */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 md:p-14 text-center z-10 shadow-2xl max-w-xl">
                <motion.img
                    src={process.env.PUBLIC_URL + "/Milind_pawar.png"}
                    alt="Milind Pawar"
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-gray-700 shadow-md object-cover mx-auto mb-6"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />

                <motion.h1
                    className="text-3xl md:text-4xl font-semibold tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I'm Milind Pawar
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl mt-4 text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typewriter
                        words={["React Developer", "Frontend Engineer", "UI/UX Enthusiast"]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1200}
                    />
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={600}
                        offset={-60}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md cursor-pointer transition-all"
                    >
                        🚀 View My Work
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
