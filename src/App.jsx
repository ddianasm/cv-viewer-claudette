import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import ExperienceItem from "@/components/ExperienceItem/ExperienceItem";

function App() {
  return (
    <div className="cv-container">
      <Header />
      <Section title="Relevant Experience">
        <ExperienceItem
          date="10.24 - 02.25"
          company="CyberFort Solutions"
          position="Project Coordinator"
          location="Barcelona, Spain"
          description={[
            "Oversaw scheduling, documentation, and progress tracking for internal IT infrastructure upgrades.",
            "Worked alongside security analysts to identify workflow bottlenecks and recommend process improvements.",
            "Assisted in communication between vendors and reviewed contracts for third-party software providers.",
          ]}
        />

        <ExperienceItem
          date="05.24 - 08.24"
          company="BrightWave Digital"
          position="Summer Project Management Intern"
          location="Barcelona, Spain"
          description={[
            "Coordinated deadlines and deliverables for a cross-functional team handling client advertising campaigns.",
            "Curated internal status reports summarizing campaign metrics, budget usage, and upcoming project milestones.",
            "Developed foundational practices in agile project management tools and team collaboration platforms.",
          ]}
        />

        <ExperienceItem
          date="06.23 - 08.23"
          company="DeltaNova Technologies"
          position="Summer Business Operations Intern"
          location="Madrid, Spain"
          description={[
            "Streamlined project documentation and meeting records to support efficient product launch execution.",
            "Engaged in client update calls, providing project status recaps and next-step outlines.",
            "Prepared post-project reviews that uncovered a 15% increase in team efficiency opportunities and documented best practices.",
          ]}
        />
      </Section>
      <Section title="Education">
        <ExperienceItem
          date="09.23 - 05.24"
          company="CareerOS Academy"
          position="MSc in Project Management"
          location="Barcelona, Spain"
          description={[
            "Engaged in comprehensive coursework on Agile methodologies, risk management, and stakeholder analysis; led a capstone project simulating a cross-functional product launch.",
          ]}
        />
        <ExperienceItem
          date="09.19 - 05.22"
          company="CareerOS Academy"
          position="BA in Business Administration"
          location="Barcelona, Spain"
          description={[
            "Completed coursework in corporate finance, marketing strategy, and organizational behavior; collaborated on a consulting project for a local startup to optimize operations.",
          ]}
        />
      </Section>
      <Section title="Extracurricular & Awards">
        <div className="exp-item">
          <div className="exp-item__main-row">
            <div className="exp-item__left-col">
              <span className="exp-item__date">09.21 - 05.21</span>
            </div>
            <div className="exp-item__right-col">
              <span className="exp-item__date">
                President of the Data Analytics Club at CareerOS Academy
              </span>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Additional Information & Skills">
        <div className="skills-row">
          <span className="skills-label">Languages:</span>
          <span className="skills-value">
            Spanish (Native), English (Fluent), Italian (Intermediate)
          </span>
        </div>
        <div className="skills-row">
          <span className="skills-label">Additional Skills:</span>
          <span className="skills-value">
            NIST Cybersecurity Framework, Microsoft Office, Kali Linux, Incident
            Response Planning, Firewall Configuration, AWS Security, AES
            Encryption
          </span>
        </div>
      </Section>
    </div>
  );
}

export default App;
