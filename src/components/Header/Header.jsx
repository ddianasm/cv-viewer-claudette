import "@/components/Header/Header.scss";
import { cvData } from "@/data/cvData";

const Header = () => {
  const { personal } = cvData;

  return (
    <header className="cv-header">
      <h1 className="cv-header__name">{personal.name}</h1>
      <div className="cv-header__contacts">
        <span>{personal.location}</span>
        <span className="cv-header__separator">|</span>
        <a href={`mailto:${personal.email}`} className="cv-header__link">
          {personal.email}
        </a>
        <span className="cv-header__separator">|</span>
        <a
          href={`tel:${personal.phone.replace(/\s/g, "")}`}
          className="cv-header__link"
        >
          {personal.phone}
        </a>
        <span className="cv-header__separator">|</span>
        <a
          href={personal.linkedin.url}
          target="_blank"
          rel="noreferrer"
          className="cv-header__link"
        >
          {personal.linkedin.label}
        </a>
      </div>
    </header>
  );
};

export default Header;
