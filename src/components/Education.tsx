import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faUniversity, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../assets/styles/Education.scss';

function Education() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const cardWidth = current.children[0]?.clientWidth || 350;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const education = [
        {
            icon: faUniversity,
            degree: "Bachelor of Engineering",
            field: "Electronics and Telecommunications Engineering",
            institution: "Smt. Kashibai Navale College of Engineering",
            location: "Pune, Maharashtra",
            duration: "2022 - Present",
            grade: "First Division",
            description: "Pursuing Electronics and Telecommunications Engineering with focus on software development, Embedded systems, Electronics,and emerging technologies.",
            highlights: [
                "Active member of college cricket team",
                "Participated in technical competitions",
                "Strong academic performance",
                "Involved in project development"
            ]
        },
        {
            icon: faSchool,
            degree: "Higher Secondary Certificate (HSC)",
            field: "Science Stream",
            institution: "Junior College",
            location: "Maharashtra",
            duration: "2020 - 2022",
            grade: "First Division",
            description: "Completed higher secondary education with Science stream, building strong foundation in Physics, Chemistry, and Mathematics.",
            highlights: [
                "Science stream specialization",
                "Strong mathematical foundation",
                "Preparation for engineering entrance",
                "Academic excellence"
            ]
        },
        {
            icon: faGraduationCap,
            degree: "Secondary School Certificate (SSC)",
            field: "General Education",
            institution: "High School",
            location: "Maharashtra",
            duration: "2018 - 2020",
            grade: "First Division with distinction",
            description: "Completed secondary education with excellent academic performance and active participation in sports.",
            highlights: [
                "Outstanding academic performance",
                "Active in sports (Cricket - SGFI)",
                "Leadership qualities development",
                "Foundation for higher studies"
            ]
        }
    ];

    return (
        <div className="container" id="education">
            <div className="education-container">
                <h1>Education</h1>
                <div className="education-scroll-container">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                        <ArrowBackIosIcon />
                    </button>
                    <div className="education-grid" ref={scrollRef}>
                        {education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <div className="education-duration">
                                    <FontAwesomeIcon icon={faCalendar} className="duration-icon" />
                                    {edu.duration}
                                </div>
                                <div className="education-header">
                                    <FontAwesomeIcon icon={edu.icon} size="2x" className="education-icon" />
                                    <div className="education-title">
                                        <h3>{edu.degree}</h3>
                                        <h4>{edu.field}</h4>
                                    </div>
                                </div>
                                <div className="education-institution">
                                    <h4>{edu.institution}</h4>
                                    <div className="education-location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        {edu.location}
                                    </div>
                                </div>
                                <div className="education-grade">
                                    {edu.grade}
                                </div>
                                <p className="education-description">{edu.description}</p>
                                <ul className="education-highlights">
                                    {edu.highlights.map((highlight, highlightIndex) => (
                                        <li key={highlightIndex}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => scroll('right')}>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Education;
