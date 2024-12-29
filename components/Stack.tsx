import React from "react";
import { FaReact } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiFigma } from "react-icons/si";

const stackItems = [
    { id: 1, name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { id: 2, name: "CSS", icon: SiCss3, color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { id: 4, name: "Python", icon: SiPython, color: "#3776AB" },
    { id: 5, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 6, name: "Figma", icon: SiFigma, color: "#FC46AA" },
    { id: 7, name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { id: 8, name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
];

export const Stack = () => {
    return (
        <section className="py-16 glass" id="stack">
            <div className="max-w-[1200px] mx-auto px-4 text-center" id="stack">
                <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {stackItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-center flex-col rounded-xl p-4">
                            <div className="mb-4 bg-white/10 p-6 rounded-xl">
                                {/* Directly use the icon component */}
                                <item.icon
                                    className="w-32 h-32"
                                    style={{ color: item.color }}
                                />
                            </div>
                            <p className="text-gray-400 font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
