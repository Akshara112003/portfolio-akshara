"use client"

import React from 'react';
import { motion, useInView } from 'framer-motion'

const metrics = [
    {
        id: 1,
        value:'Full Stack Web Development: June 2024 - June 2024',
        label: 'Accent Techno Soft',
        description: 'Intro to web technologies: HTML, CSS, Bootstrap. Structuring web pages with semantic HTML Styling using Css and and Bootstrap components. Understanding design handoffs from designers.Simulate a real-world workflow by implementing a simple design and functionality requirement. Backend tech used : PHP.Setting up a local development environment (e.g., XAMPP or WAMP).Basics of PHP: Syntax, server-side scripting, and handling HTTP requests.Introduction to databases: SQL fundamentals and relational database design.Connecting PHP to a database (MySQL) using PDO or MySQLi.Performing CRUD operations (Create, Read, Update, Delete).'
    },
    {
        id: 2,
        value:'Front-end Development 2024: May 2023 - June 2023',
        label: 'SNS SQUARE',
        description: 'Intro to web technologies: HTML, CSS, Bootstrap. Structuring web pages wu=ith semantic HTML Styling using Css and and Bootstrap components.Understanding design handoffs from designers.Simulate a real-world workflow by implementing a simple design and functionality requirement.Media queries, Bootstrap grid system, and mobile-first design principles.Enhance the application to be fully responsive and compatible across devices.Conduct a group code review on a sample project, identify improvements, and refactor.Build a complete, responsive web application that demonstrates collaboration, responsive design, and code quality principles.'
    },
    {
        id: 3,
        value:'Digital Marketing: June 2022 - July 2022',
        label: 'DotCom Infoway',
        description: 'As a Digital Marketing Intern, I developed and executed strategies across social media, email, and content, mastering SEO, analytics, and audience engagement.On-page, off-page, and technical SEO.Keyword research and content optimization.Conduct keyword research and draft a blog post optimized for SEO.Leveraging platforms like Facebook, Instagram, LinkedIn, and Twitter for brand building.Content planning and creating engaging posts.Building email lists and crafting effective email campaigns.',
    },
    {
        id: 4,
        value:'UX/UI Projects for portfolio: Oct 2024 - Oct 2024',
        label: 'Udemy',
        description: 'Overview of Figma and Adobe XD.Familiarize participants with the interfaces of both tools.Basics of UI/UX design and their importance in digital products.Understanding wireframes, prototypes, and mockups.Recreating a real-world project website from Frontend Mentor using Figma.Using Figma features like auto layout, components, and libraries.Figma: Final design layout and components.Adobe XD: Interactive prototype with transitions and animations.',
    },
]



export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);

    const isInView = useInView(ref, { once: false});
    return (
        <motion.section
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={isInView ? {opacity:1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{duration: 0.8}}
            className=' px-4 py-32 text-white glass'
            id='about'>
                <div className='container mx-auto'>
                    <motion.h2 
                    initial={{opacity: 0, y:20 }}
                    animate={isInView ? { opacity: 1, y: 0} : {opacity: 0,y: 20}}
                    transition={{delay: 0.2, duration: 0.6}}
                    className='text-6xlfont-bold mb-12'>
                        Internship & Workshop
                    </motion.h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.id}
                                initial={{opacity:0, y:20}}               animate={isInView ? {opacity: 1,y: 0} : { opacity: 0, y:20}}
                                transition={{delay: 0.4 + index * 0.1, duration: 0.6}}
                                className='flex flex-col'
                                >
                                    <motion.h3
                                        initial={{scale: 0.5}}
                                        animate={isInView ? {scale: 1} : { scale: 0.5}}
                                        transition={{delay: 0.6 + index * 0.1, duration: 0.4, type: 'spring'}}
                                        className='text-5xl font-bold text-purple-300 mb-2'>
                                            {metric.value}
                                        </motion.h3>
                                        <motion.p
                                            initial={{opacity:0}}
                                            animate={isInView ? {opacity: 1} : {opacity: 0 }}
                                            transition= {{delay: 0.8 + index * 0.1, duration: 0.4}}
                                            className='text-xl font-semibold mb-2'>
                                                {metric.label}
                                            </motion.p>
                                            <motion.p
                                            initial={{opacity:0}}
                                            animate={isInView ? {opacity: 1} : {opacity: 0 }}
                                            transition={{delay: 1 + index * 0.1, duration: 0.4}}
                                            className='text-gray-400'>
                                                {metric.description}
                                            </motion.p>
                                </motion.div>
                        ))}
                    </div>
            </div>
            </motion.section>

    )
}