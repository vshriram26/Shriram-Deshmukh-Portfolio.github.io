import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work card glass"
            contentStyle={{ background: 'transparent', color: '#ffffff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
            date="Jan 2025 - Mar 2025"
            iconStyle={{ background: '#3182ce', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Perfect House Private Limited, Satara, India</h4>
            <p>
              Worked on electrical systems, generator testing, and panel installations. Also contributed to marketing tasks including client interaction, market research, and promotional strategies, enhancing both technical proficiency and communication skills.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work card glass"
            contentStyle={{ background: 'transparent', color: '#ffffff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
            date="Jul 2024 - Dec 2024"
            iconStyle={{ background: '#3182ce', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern - Dev and QA</h3>
            <h4 className="vertical-timeline-element-subtitle">The Kiran Academy, Pune, India</h4>
            <p>
              Collaborated on software development and quality assurance projects, enhancing technical skills focusing on core Java, advanced Java, and software testing. Gained hands-on experience through live projects, debugging exercises, and test case development, while improving teamwork, logical thinking, and software development practices.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

