import React, { useRef } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers, faGamepad, faMusic, faMicrophone, faRunning, faHeart } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../assets/styles/ExtraCurricular.scss';

function ExtraCurricular() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const cardWidth = current.children[0]?.clientWidth || 350;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    const activities = [
        {
            icon: faTrophy,
            title: "🤖 Competitions & Contests",
            duration: "Mar 2024",
            description: "Participated in various technical and non-technical competitions, showcasing problem-solving skills and competitive spirit. Proud participant of Technothon 2K24, a prestigious national-level techno-symposium hosted by PVPIT Bavdhan. I participated in the Robotzeck robotics event, showcasing my skills in robotics, innovation, and problem-solving. Grateful to the organizers and SAE India for providing a platform to engage with cutting-edge technology and like-minded enthusiasts.",
            items: [
                "🏆 Technothon 2K24 – Robotzeck Event",
                "PVPIT Bavdhan & SKNCOE Partnership",
                "SAE India Supported Event",
                "Technical Quiz Competitions",
                "Coding Contests",
                "Project Exhibitions",
                "Hackathons"
            ],
            link: "https://www.linkedin.com/in/shriram-deshmukh-40b775266/details/honors/"
        },
        {
            icon: faHeart,
            title: "🌱 Volunteer Experience",
            duration: "January 2023 – January 2024",
            description: "As part of my commitment to environmental sustainability, I volunteered for one year with Sankalp Samajik Vaa Shaikshanik Sanstha, contributing to an Afforestation Project aligned with UN Sustainable Development Goal 15 (Life on Land). My responsibilities included hands-on support in plantation drives, coordination of daily operations, and community awareness initiatives. I consistently demonstrated strong work ethics and contributed meaningfully toward increasing green cover and promoting ecological balance. This experience strengthened my passion for environmental conservation and inspired me to integrate sustainability into both my personal and professional endeavors.",
            items: [
                "Afforestation Project Intern",
                "Sankalp Samajik Vaa Shaikshanik Sanstha",
                "Plantation Drives & Daily Operations",
                "Community Awareness Initiatives",
                "UN SDG 15 (Life on Land) Alignment",
                "Environmental Conservation Advocacy"
            ],
            link: "https://www.linkedin.com/in/shriram-deshmukh-40b775266/details/volunteering-experiences/"
        },
        {
            icon: faRunning,
            title: "Sports & Athletics",
            duration: "2018 - Present",
            description: "I have a deep passion for cricket and have actively pursued it throughout my academic journey. I was a proud member of the SKNCOE College Cricket Team, participating in various inter-college tournaments. Earlier, during my school years, I competed in School Games Federation of India (SGFI) tournaments, progressing from the school level to the state level under the Under-16 category. These experiences have helped me build teamwork, leadership, focus, and resilience—qualities I continue to apply in academics and beyond.",
            items: [
                "SKNCOE College Cricket Team Member",
                "Inter-college Tournament Participation", 
                "SGFI Tournaments (School to State Level)",
                "Under-16 Category Competition",
                "Football & Other Sports",
                "Fitness Training"
            ]
        }
    ];

    return (
        <div className="container" id="extracurricular">
            <div className="extracurricular-container">
                <h1>Extra Curricular Activities</h1>
                <div className="linkedin-link-container">
                    <a href="https://www.linkedin.com/in/shriram-deshmukh-40b775266/details/volunteering-experiences/" 
                       target="_blank" 
                       rel="noreferrer"
                       className="linkedin-volunteering-link">
                        View My Volunteering Experiences on LinkedIn
                    </a>
                </div>
                <div className="activities-scroll-container">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                        <ArrowBackIosIcon />
                    </button>
                    <div className="activities-grid" ref={scrollRef}>
                        {activities.map((activity, index) => (
                            <div key={index} className="activity">
                                <div className="activity-duration">
                                    {activity.duration}
                                </div>
                                <div className="activity-header">
                                    <FontAwesomeIcon icon={activity.icon} size="2x" className="activity-icon" />
                                    <h3>{activity.title}</h3>
                                </div>
                                <p className="activity-description">{activity.description}</p>
                                <ul className="activity-list">
                                    {activity.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                                {activity.link && (
                                    <div className="activity-link">
                                        <a href={activity.link} target="_blank" rel="noreferrer" className="volunteering-detail-link">
                                            View Details on LinkedIn
                                        </a>
                                    </div>
                                )}
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

export default ExtraCurricular;
