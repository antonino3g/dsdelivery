import "./styles.css";
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as Instagram } from "./instagram.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/c/devsuperior" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://linkedin.com/school/devsuperior/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig" target="_new">
          <Instagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
