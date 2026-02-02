import "@/components/Header/Header.scss";

const Header = () => {
  return (
    <header className="cv-header">
      <h1 className="cv-header__name">Claudette Lening</h1>

      <div className="cv-header__contacts">
        <span>CareerOS Academy - Barcelona, Spain</span>
        <span className="cv-header__separator">|</span>
        <a
          href="mailto:claudette.lening@cosacademy.edu"
          className="cv-header__link"
        >
          claudette.lening@cosacademy.edu
        </a>
        <span className="cv-header__separator">|</span>
        <a href="tel:+34612345678" className="cv-header__link">
          +34 612 345 678
        </a>
        <span className="cv-header__separator">|</span>
        <a
          href="https://linkedin.com/in/claudette-lening"
          target="_blank"
          rel="noreferrer"
          className="cv-header__link"
        >
          linkedin.com/in/claudette-lening
        </a>
      </div>
    </header>
  );
};

export default Header;
