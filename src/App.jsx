import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";

function App() {
  return (
    <div className="cv-container">
      <Header />
      <Section title="Relevant experience"></Section>
      <Section title="Education"></Section>
      <Section title="Extracurricular & Awards"></Section>
      <Section title="Additional Information & Skills"></Section>
    </div>
  );
}

export default App;
