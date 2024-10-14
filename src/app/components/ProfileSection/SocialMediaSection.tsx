import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaSection() {
  return (
    <div className="flex space-x-4 z-auto">
      <a
        href="https://www.linkedin.com/in/sevimli-abdulsamet-191a06305/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="h-8" />
      </a>
      <a
        href="https://www.instagram.com/_samy_03_07/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="h-8" />
      </a>
      <a
        href="https://twitter.com/samet_sevimli03"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} className="h-8" />
      </a>
      <a
        href="https://wa.me/4369911036322"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-8" />
      </a>
    </div>
  );
}
