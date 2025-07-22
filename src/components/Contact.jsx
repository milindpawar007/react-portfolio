import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("milindpawar5555@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className="p-10 bg-primary text-white border-t border-gray-700"
        >
            <h2 className="text-4xl font-bold text-center mb-4 text-accent">
                📬 Let’s Connect
            </h2>
            <p className="text-center mb-6 text-lg text-muted">
                Have a project or job opportunity? Reach out directly or find me online.
            </p>

            {/* Email Button */}
            <div className="text-center mb-4">
                <button
                    onClick={handleCopy}
                    className="bg-accent text-white px-6 py-2 rounded-lg shadow hover:bg-blue-500 transition-all"
                >
                    📧 {copied ? "Email Copied!" : "milindpawar5555@gmail.com"}
                </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-3xl text-accent mt-6">
                <a
                    href="https://linkedin.com/in/mpawar1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/milindpawar007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://leetcode.com/u/milindpawar5555/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition"
                >
                    <SiLeetcode />
                </a>
            </div>

            {/* Resume Actions */}
            <div className="text-center mt-6 flex justify-center gap-4 flex-wrap">
                <a
                    href="/Milind_Pawar_Resume.pdf"
                    download
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
                >
                    📄 Download Resume
                </a>
                <a
                    href="/Milind_Pawar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-green-600 text-green-400 px-6 py-2 rounded-lg hover:bg-green-800 hover:text-white transition-all"
                >
                    🔍 View Online
                </a>
            </div>
        </section>
    );
}
