"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import project1 from "@/assets/proj1.jpg"
import project2 from "@/assets/proj2.jpg"
import project3 from "@/assets/proj3.jpg"
import project4 from "@/assets/proj4.jpg"
import project5 from "@/assets/proj5.png"
import project6 from "@/assets/proj6.jpg"
import project7 from "@/assets/proj7.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"

const projects = [
    {id: 1, year: 2024, title: 'Admission Query Chatbot', description: 'The Admission Query Chatbot assists prospective students at SNS Arts College, offering a user-friendly interface built with HTML, CSS, Bootstrap, and JavaScript to address questions about applications and deadlines - Html | CSS | Javascript', image:project1, link: "https://akshara112003.github.io/chatbot/",
    git: "https://github.com/Akshara112003/chatbot"},

    {id: 2, year: 2024, title: 'Netflix Clone(Login page)', description: 'A cloned Netflix login page with a sleek, dark-themed design. It features input fields for email and password, along with links for help and signup. The responsive layout mirrors the authentic Netflix login page design. - Html | CSS & Bootstrap | Javascript', image:project2,  link: "#",
    git: "https://github.com/Akshara112003/Netflix-clone-login-"},

    {id: 3, year: 2024, title: 'Apple Airpod page', description: 'Designed an Apple Airpod Pro site using Figma, creating wireframes and prototypes to simulate the platforms user interface and experience. - Figma | Prototype | Wireframe', image:project4,  link: "https://www.figma.com/proto/boskjT7A7a32ZREMsE9ywk/iphone-airpod?node-id=63-1198&t=3hIW7Wg1dWIx064s-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A1198&show-proto-sidebar=1",
    git: ""},

    {id: 4, year: 2024, title: 'Netflix Clone(Sign-in page)', description: 'A cloned Netflix Sign-in page with a sleek, dark-themed design. It features input fields for email and password, along with links for help and signup. The responsive layout mirrors the authentic Netflix Sign-in page design. - Html | CSS & Bootstrap | Javascript', image:project5,  link: "https://akshara112003.github.io/Netflix-clone-Signin-/",
    git: "https://github.com/Akshara112003/Netflix-clone-Signin-"},

    {id: 5, year: 2024, title: 'LinkedIn Clone(Home & Profile page)', description: 'The LinkedIn Clone, built with HTML, CSS, and JavaScript, replicates LinkedIns core interface, allowing users to view a profile page and a home feed layout. The project includes interactive navigation and responsive design to simulate a professional networking platform. - Html | CSS | Javascript', image:project6, link: "https://akshara112003.github.io/LinkedIn-clone/",
    git: "https://github.com/Akshara112003/LinkedIn-clone"},

    {id: 6, year: 2024, title: 'Netflix Clone(Landing page)', description: 'The Netflix Clone, built with HTML, CSS, Bootstrap, and JavaScript, lets users explore movies and simulate signing up with an email - Html | CSS & Bootstrap | Javascript', image:project7,  link: "#",
    git: "https://github.com/Akshara112003/Netflix-Clone-Landing-Page-"},

    {id: 7, year: 2024, title: 'Disney+ hotstar Clone', description: 'Designed a Disney+ Hotstar clone using Figma, creating wireframes and prototypes to simulate the platforms user interface and experience. - Figma | Prototype | Wireframe', image:project3, link: "https://www.figma.com/proto/wFPCpwz5xwIZEPVkaKpsVv/movie-disney?node-id=128-1038&t=UV6ZTMxEMJ6zuDfF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"},

];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const color = useMotionValue(COLORS_TOP[0]);
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);
    const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className="py-32 text-white" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10">Personal<span className="text-purple-400">Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors ${selectedProject.id === project.id ? 'text-purple-200' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <>
                                    <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                        {project.description}
                                    </p>
                                    <div className="mt-4">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-400 mr-4 hover:underline"
                                            >
                                                Live Project
                                            </a>
                                        )}
                                        {project.git && (
                                            <a
                                                href={project.git}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-400 hover:underline"
                                            >
                                                GitHub Repository
                                            </a>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />
            </div>
        </motion.section>
    );
};