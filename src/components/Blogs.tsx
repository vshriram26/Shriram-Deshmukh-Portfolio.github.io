import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../assets/styles/Blogs.scss';

function Blogs() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const blogs = [
        {
            title: "Getting Started with AI/ML",
            description: "Exploring the fundamentals of Artificial Intelligence and Machine Learning, sharing insights from my learning journey at IIT Guwahati.",
            image: "../assets/images/blog1.png",
            link: "#",
            date: "2025-07-20"
        },
        {
            title: "Electronics Project Guide",
            description: "A comprehensive guide to building your first electronics project, featuring tips and tricks from my experience with microcontrollers.",
            image: "../assets/images/blog2.png",
            link: "#",
            date: "2025-07-18"
        },
        {
            title: "System Integration Best Practices",
            description: "Insights into effective system integration techniques learned during my internship experiences and personal projects.",
            image: "../assets/images/blog3.png",
            link: "#",
            date: "2025-07-17"
        },
        {
            title: "Advanced Python for Data Analysis",
            description: "Deep dive into Python libraries and techniques for efficient data analysis and visualization in AI/ML projects.",
            image: "../assets/images/blog4.png",
            link: "#",
            date: "2025-07-16"
        },
        {
            title: "IoT Solutions Architecture",
            description: "Exploring the architecture and implementation of IoT solutions, based on real-world project experiences.",
            image: "../assets/images/blog5.png",
            link: "#",
            date: "2025-07-15"
        },
        {
            title: "Circuit Design Fundamentals",
            description: "Essential concepts and practical tips for effective circuit design in electronics projects.",
            image: "../assets/images/blog6.png",
            link: "#",
            date: "2025-07-14"
        },
        {
            title: "Quality Assurance in Electronics",
            description: "Best practices for ensuring quality in electronics and embedded systems development.",
            image: "../assets/images/blog7.png",
            link: "#",
            date: "2025-07-13"
        },
        {
            title: "Machine Learning Applications",
            description: "Real-world applications of machine learning in electronics and telecommunications.",
            image: "../assets/images/blog8.png",
            link: "#",
            date: "2025-07-10"
        },
        {
            title: "Future of Telecommunications",
            description: "Exploring emerging trends and technologies in the telecommunications industry.",
            image: "../assets/images/blog9.png",
            link: "#",
            date: "2025-07-05"
        }
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="container" id="blogs">
            <div className="blogs-container">
                <h1>Technical Blogs</h1>
                <div className="blogs-scroll-container">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                        <ArrowBackIosIcon />
                    </button>
                    <div className="blogs-grid" ref={scrollRef}>
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog card glass">
                                <img src={blog.image} alt={blog.title} className="blog-image"/>
                                <div className="blog-date">
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </div>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <a href={blog.link} className="read-more">Read More →</a>
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

export default Blogs;