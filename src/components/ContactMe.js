import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";

export default function ContactMe() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="contacts">
      <div className="contacts_btn">
        <a href="https://github.com/Molutova?tab=repositories" target="_blank">
          <GitHubIcon style={{ color: "white" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/nailya-molutova-235379212/"
          target="_blank"
        >
          <LinkedInIcon style={{ color: "white" }} />
        </a>
        <a href="https://t.me/nmolutova " target="_blank">
          <TelegramIcon style={{ color: "white" }} />
        </a>
        <a href="https://www.instagram.com/molutova/?next=%2F" target="_blank">
          <InstagramIcon style={{ color: "white" }} />
        </a>
        <a href="mailto:nmolutova@gmail.com" target="_blank">
          <MailOutlineIcon style={{ color: "white" }} />
        </a>
      </div>

      {showButton && (
        <button className="scroll_btn" onClick={scrollToTop}>
          <ArrowUpwardIcon style={{ color: "white" }} />
        </button>
      )}
    </div>
  );
}
