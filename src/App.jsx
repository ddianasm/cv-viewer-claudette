import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import ExperienceItem from "@/components/ExperienceItem/ExperienceItem";
import { cvData } from "@/data/cvData";

function App() {
  return (
    <div className="cv-container">
      <Header />
      <Section title="Relevant Experience">
        {cvData.experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </Section>

      <Section title="Education">
        {cvData.education.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </Section>

      <Section title="Additional Information & Skills">
        {cvData.skills.map((skill, index) => (
          <div key={index} className="skills-row">
            <span className="skills-label">{skill.label}:</span>
            <span className="skills-value">{skill.value}</span>
          </div>
        ))}
      </Section>
    </div>
  );
}

export default App;
