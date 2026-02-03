import { useState, useEffect } from "react";
import { cvData } from "@/data/cvData";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import ExperienceItem from "@/components/ExperienceItem/ExperienceItem";
import CommentsSidebar from "@/components/CommentsSidebar/CommentsSidebar";
import ReviewModal from "@/components/ReviewModal/ReviewModal";

function App() {
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("cv_comments")) || [];
    setComments(savedComments);
  }, []);

  const addComment = text => {
    const newComments = [
      ...comments,
      { id: Date.now(), text, date: new Date().toLocaleString() },
    ];
    setComments(newComments);
    localStorage.setItem("cv_comments", JSON.stringify(newComments));
  };

  return (
    <div className="app-wrapper">
      <main className="app-content">
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
      </main>
      <CommentsSidebar
        comments={comments}
        onReviewClick={() => setIsModalOpen(true)}
      />
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addComment}
      />
    </div>
  );
}

export default App;
