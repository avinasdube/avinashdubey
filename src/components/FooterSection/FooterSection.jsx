import "./FooterSection.scss";

import github from "../../assets/icons/github.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import { socials } from "../../data/portfolioData";

const socialIcons = {
  linkedin,
  instagram,
  twitter,
  github,
};

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footerCta">
        <h3>let's build your next digital product</h3>
        <p>
          open for internships, freelance projects, and creative collaborations.
        </p>
        <a href="mailto:hello.avinasdube@gmail.com">start a conversation</a>
      </div>

      <div className="copyright" id="cprt">
        <div className="connectLogo" id="contlgo">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.id}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              <img
                src={socialIcons[social.name]}
                alt={`${social.name} icon`}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div>&copy; {year} avinash dubey . all rights reserved</div>
        <div id="cprtdsc">सर्वं सम्भाव्यते त्वयि।</div>
      </div>
    </footer>
  );
};

export default FooterSection;
