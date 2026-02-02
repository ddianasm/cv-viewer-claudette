import "@/components/Section/Section.scss";

const Section = ({ title, children }) => {
  return (
    <section className="cv-section">
      <h2 className="cv-section__title">{title}</h2>
      <div className="cv-section__content">{children}</div>
    </section>
  );
};

export default Section;
