import { quote } from "../../data/portfolioData";
import "./QuoteSection.scss";

const QuoteSection = () => {
  return (
    <div className="designQuote">
      <div className="qt" id="qyt">
        "{quote}"
      </div>
    </div>
  );
};

export default QuoteSection;
