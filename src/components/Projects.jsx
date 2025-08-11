const projects = [
    {
        title: "Taj Palace – Luxury Hotel Booking Platform",
        description: "A modern hotel booking web application for Taj Palace, featuring dynamic room availability, real-time pricing, and a responsive UI with an immersive user experience.",
        github: "https://github.com/milindpawar007/the-taj-palace",
        demo: "https://milind-taj-palace.netlify.app",
        tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "MongoDB", "REST API"],
    }, ,
    {
        title: "Fast React Pizza – Online Ordering Platform",
        description: "A fully responsive pizza ordering application with real-time cart updates, customizable pizzas, and location-based delivery time estimates. Built as part of an advanced React course, optimized for performance and scalability.",
        github: "https://github.com/milindpawar007/Udemy-React-2024/tree/main/fast-react-pizza",
        demo: "https://fast-react-pizza-store.netlify.app", // Replace with your actual deployed link
        tech: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "Vite", "JavaScript", "API Integration"],
    },
    ,
];

export default function Projects() {
    return (
        <section id="projects" className="p-10 bg-primary text-white">
            <h2 className="text-4xl font-bold mb-10 text-center text-accent">🚀 Projects</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((proj, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-accent transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-accent">{proj.title}</h3>
                        <p className="text-muted mb-4">{proj.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {proj.tech.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm bg-gray-700 text-white rounded-full shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-2">
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-muted text-white rounded-lg hover:bg-gray-600 transition"
                            >
                                GitHub
                            </a>
                            <a
                                href={proj.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-400 transition"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
