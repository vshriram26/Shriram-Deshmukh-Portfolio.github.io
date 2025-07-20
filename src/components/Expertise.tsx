import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMicrochip, faWifi } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import './../assets/styles/Expertise.scss';

const labelsFirst = [
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Data Analysis",
    "AI/ML (IIT Guwahati)",
    "Problem-Solving",
    "Technical Project Management"
];

const labelsSecond = [
    "Microcontroller Programming",
    "Arduino",
    "Raspberry Pi",
    "Circuit Design",
    "PCB Design",
    "Hardware Prototyping",
    "Embedded Systems"
];

const labelsThird = [
    "IoT",
    "Signal Processing",
    "System Integration",
    "Quality Assurance",
    "Telecommunication Systems",
    "Wireless Communication",
    "Robotics"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill card glass">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Artificial Intelligence & Machine Learning</h3>
                        <p>Currently pursuing an AI/ML course from IIT Guwahati, I develop intelligent solutions using Python and machine learning frameworks. My projects include AI-driven optimizations and data analysis for real-world applications.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill card glass">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>Electronics & Embedded Systems</h3>
                        <p>Skilled in designing and prototyping embedded systems using Arduino and Raspberry Pi. My projects, like the Arduino OLED Eyes Animation, showcase expertise in microcontroller programming and hardware integration.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill card glass">
                        <FontAwesomeIcon icon={faWifi} size="3x" />
                        <h3>Telecommunication & IoT</h3>
                        <p>Experienced in system integration and quality assurance for telecommunication systems, with hands-on internship experience at Perfect House Pvt. Ltd. I specialize in IoT solutions and wireless communication technologies.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;