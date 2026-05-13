import { highlights } from "../../data/portfolioData";
import "./HighlightsSection.scss";

const HighlightsSection = () => {
  return (
    <section className="highlightsSection">
      <div className="highlightsHead">more about my journey</div>
      <div className="highlightsGrid">
        {highlights.map((item) => (
          <article className="highlightCard" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
