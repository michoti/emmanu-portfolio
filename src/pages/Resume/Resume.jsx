import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Fullstack developer | Startappzke"
            date="May,2024 — present"
            description="Developed a travel insurance platform for AAR using Laravel, enhancing services for domestic clients. 
                 Utilized GitHub for version control and Docker for consistent local development environments. 
                 Collaborated with a team of four developers using Microsoft Teams or Slack, and tracked tasks with Jira."
          />
          <TimelineItem
            title="Freelancer | Upwork"
            date="December,2022 — May, 2024"
            description="Developed web applications using Laravel and React, focusing on eCommerce and business platforms. 
            Managed version control with GitHub and implemented CI/CD pipelines with GitHub Actions. 
            Utilized Jira for project management and RabbitMQ for message brokering. Gained expertise in state management, GraphQL, client relations, and time management."
          />
          <TimelineItem
            title="Web developer | Clifford technologies"
            date="June, 2022 — November, 2022"
            description="Applied Agile and Scrum principles to assess project requirements for high-volume online services. Gathered and validated requirements, collaborating on high-profile external web projects to enhance UI/UX. 
            Recommended solutions for a streamlined, user-friendly interface in collaboration with the design team. Implemented a mobile-first approach and developed stable, maintainable codebases using React and Laravel."
          />
          <TimelineItem
            title="Junior developer | Grafame tech"
            date="May, 2021 — September, 2021"
            description="Developed and enhanced features, functionality, and capabilities on the company website while performing bug fixes and code reviews. Ensured thorough documentation and reporting throughout all stages of the product lifecycle."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Bsc. Computer Science [ Africa Nazarene University ]"
            date="2018 — 2022"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML/CSS" value={80} />
          <SkillItem title="JavaScript/React" value={70} />
          <SkillItem title="PHP/Laravel" value={90} />
          <SkillItem title="Database design" value={80} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
