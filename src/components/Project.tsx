import React, { useRef } from "react";
import expenseTracker from '../assets/images/project 1.png';
import employeeTurnover from '../assets/images/project 2.png';
import radarSystem from '../assets/images/project3.png';
import smartGloves from '../assets/images/final image.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../assets/styles/Project.scss';

function Project() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const cardWidth = current.children[0]?.clientWidth || 350;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const projects = [
        {
            image: expenseTracker,
            title: "Expense Tracker",
            timeline: "Dec 2024 - Jan 2025",
            description: "Developed a comprehensive expense tracking application that helps users manage and analyze their personal finances with detailed analytics and visualization features.",
            link: "https://github.com/vshriram26/expense-tracker-"
        },
        {
            image: employeeTurnover,
            title: "Employee Turnover Analytics",
            timeline: "Oct 2024 - Nov 2024",
            description: "Created an advanced analytics system for analyzing and predicting employee turnover patterns using machine learning and data visualization techniques.",
            link: "https://github.com/vshriram26/Employee-Turnover-Analytics"
        },
        {
            image: radarSystem,
            title: "Radar Using Ultrasonic Sensor",
            timeline: "Aug 2024 - Sep 2024",
            description: "Engineered a radar system using ultrasonic sensors and microcontroller programming, demonstrating practical applications of electronics and system integration.",
            link: "https://github.com/vshriram26/RADAR-USING-ULTRASONIC-SENSOR"
        },
        {
            image: smartGloves,
            title: "Smart Gloves for Communication & Safety",
            timeline: "Jun 2024 - Jul 2024",
            description: "Developed innovative smart gloves enabling communication for hearing-impaired individuals and incorporating safety features for women, using gesture recognition and IoT technology.",
            link: "https://github.com/vshriram26/Smart-Gloves-for-Dumb-People-and-Women-Safety"
        }
    ];

    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-scroll-container">
            <button className="scroll-button left" onClick={() => scroll('left')}>
                <ArrowBackIosIcon />
            </button>
            <div className="projects-grid" ref={scrollRef}>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <div className="project-image-container">
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.image} className="zoom" alt={project.title}/>
                            </a>
                        </div>
                        <div className="project-timeline">
                            {project.timeline}
                        </div>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scroll('right')}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    </div>
    );
}

export default Project;