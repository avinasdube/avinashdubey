import { useState } from "react";
import { Link } from "react-router-dom";
import avinas from "../../assets/images/avinash.png";
import indiagate from "../../assets/images/indiagate.JPG";
import { aboutContent } from "../../data/portfolioData";
import useHoverTranslate from "../../hooks/useHoverTranslate";
import Skills from "../Skills/Skills.jsx";
import "./AboutMe.scss";

const AboutMe = () => {
  const { transform, handleMouseMove, handleMouseLeave } = useHoverTranslate(5);
  const [activeTab, setActiveTab] = useState("focus");
  const tabIds = aboutContent.tabs.map((tab) => tab.id);

  const handleTabKeyDown = (event, currentTab) => {
    const currentIndex = tabIds.indexOf(currentTab);

    if (currentIndex === -1) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % tabIds.length;
      setActiveTab(tabIds[nextIndex]);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + tabIds.length) % tabIds.length;
      setActiveTab(tabIds[prevIndex]);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveTab(tabIds[0]);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveTab(tabIds[tabIds.length - 1]);
    }
  };

  return (
    <div className="aboutMeContainer">
      <div className="aboutMeSubContainer">
        <div className="profileSection">
          <div
            className="midImg"
            style={{ transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={avinas} alt="Avinash Dubey"></img>
          </div>
          <div
            className="rightImg"
            style={{ transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={indiagate} alt="Avinash Dubey"></img>
          </div>
        </div>
        <div className="detailSection">
          <h1>{aboutContent.heading}</h1>
          <p>
            {aboutContent.paragraphs[0]}
            <br></br>
            <br></br>
            {aboutContent.paragraphs[1]}{" "}
            <a
              href={aboutContent.educationLink}
              id="lnk"
              target="_blank"
              rel="noreferrer"
            >
              galgotias university, greater noida
            </a>
            .<br></br>
            <br></br>
            {aboutContent.paragraphs[2]}
          </p>

          <div className="aboutStats">
            {aboutContent.stats.map((stat) => (
              <article className="aboutStatCard" key={stat.id}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>

          <div
            className="aboutTabs"
            role="tablist"
            aria-label="about content tabs"
          >
            {aboutContent.tabs.map((tab) => (
              <button
                className={`tabBtn ${activeTab === tab.id ? "active" : ""}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, tab.id)}
                type="button"
                role="tab"
                id={`about-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`about-panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "focus" && (
            <div
              className="tabPanel focusArea"
              role="tabpanel"
              id="about-panel-focus"
              aria-labelledby="about-tab-focus"
              key="focus"
            >
              <h2>current focus</h2>
              <div className="focusCards">
                {aboutContent.focusAreas.map((area) => (
                  <article className="focusCard" key={area}>
                    <p>{area}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "timeline" && (
            <div
              className="tabPanel timelineSection"
              role="tabpanel"
              id="about-panel-timeline"
              aria-labelledby="about-tab-timeline"
              key="timeline"
            >
              <h2>journey timeline</h2>
              <div className="timelineList">
                {aboutContent.timeline.map((item) => (
                  <article className="timelineCard" key={item.id}>
                    <div className="yearTag">{item.year}</div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "wins" && (
            <div
              className="tabPanel achievementSection"
              role="tabpanel"
              id="about-panel-wins"
              aria-labelledby="about-tab-wins"
              key="wins"
            >
              <h2>selected wins</h2>
              <div className="achievementGrid">
                {aboutContent.achievements.map((item) => (
                  <article className="achievementCard" key={item.id}>
                    <div className="metric">{item.metric}</div>
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          <div className="aboutCta">
            <h2>{aboutContent.cta.title}</h2>
            <p>{aboutContent.cta.subtitle}</p>
            <div className="availabilityBadge">
              {aboutContent.cta.availability}
            </div>
            <div className="ctaActions">
              <Link className="ctaBtn primary" to="/">
                view projects
              </Link>
              <a className="ctaBtn" href={aboutContent.cta.mail}>
                contact me
              </a>
              <a
                className="ctaBtn"
                href={aboutContent.cta.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                view resume
              </a>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
