import { motion } from "framer-motion";

export default function About() {
    const skills = [
        "React.js",
        "Node.js",
        "JavaScript",
        "Tailwind CSS",
        "Adobe Target",
        "SPFx",
        "CI/CD",
        "Redux",
        "Next.js",
    ];

    return (
        <section id="about" className="p-10 bg-primary text-white">
            <motion.h2
                className="text-4xl font-bold mb-6 text-center text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                👨‍💻 About Me
            </motion.h2>

            <motion.div
                className="flex flex-col md:flex-row items-center max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Profile Image */}
                <div className="mb-6 md:mb-0 md:mr-10 flex justify-center">
                    <img
                        src={process.env.PUBLIC_URL + "/Milind_pawar.png"}
                        alt="Milind Pawar"
                        className="w-40 h-40 rounded-full shadow-lg object-cover"
                    />
                </div>

                {/* Bio */}
                <div className="text-center md:text-left">
                    <p className="text-lg mb-4 text-white">
                        Hi, I’m{" "}
                        <span className="font-semibold text-accent">Milind Pawar</span> — a
                        full-stack developer with 4+ years of experience building scalable,
                        accessible, and performance-driven web apps using React, Node.js,
                        and Adobe Target.
                    </p>

                    <p className="mb-4 text-muted">
                        I’m passionate about creating smooth UI/UX, optimizing frontend
                        performance, and integrating experimentation/personalization
                        platforms into enterprise apps.
                    </p>

                    <h4 className="font-semibold text-xl mb-2 text-accent">
                        🛠 Tech I Work With:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="bg-secondary px-3 py-1 text-sm rounded-full text-white shadow"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
                className="flex justify-center mt-8 gap-8 text-center text-accent font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div>
                    <p className="text-2xl">25+</p>
                    <p className="text-sm text-muted">Projects</p>
                </div>
                <div>
                    <p className="text-2xl">4 yrs</p>
                    <p className="text-sm text-muted">Experience</p>
                </div>
                <div>
                    <p className="text-2xl">5,000+</p>
                    <p className="text-sm text-muted">LeetCode Points</p>
                </div>
            </motion.div>
        </section>
    );
}
