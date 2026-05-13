import locat from "../../assets/icons/locat.png";
import { welcomeContent } from "../../data/portfolioData";
import useHoverTranslate from "../../hooks/useHoverTranslate";
import "./WelcomeSection.scss";

const WelcomeSection = () => {
  const { transform, handleMouseMove, handleMouseLeave } = useHoverTranslate(5);

  return (
    <section
      className="welcomeSection"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="greet" id="grt" style={{ transform }}>
        {welcomeContent.greeting}
      </div>
      <div className="basedIn">
        <img src={locat} alt="Location icon" />
        <div className="place">{welcomeContent.location}</div>
      </div>
      <div className="intro">
        <p>{welcomeContent.intro}</p>
      </div>
      <div className="welcomeStats">
        {welcomeContent.highlightStats.map((stat) => (
          <div className="statChip" key={stat.id}>
            <span>{stat.value}</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomeSection;
