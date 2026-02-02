import "@/components/ExperienceItem/ExperienceItem.scss";

const ExperienceItem = ({ company, position, location, date, description }) => {
  return (
    <div className="exp-item">
      <div className="exp-item__main-row">
        <div className="exp-item__left-col">
          <span className="exp-item__date">{date}</span>
        </div>
        <div className="exp-item__right-col">
          <div className="exp-item__header-top">
            <span className="exp-item__company">{company}</span>
            <span className="exp-item__location">{location}</span>
          </div>
          <div className="exp-item__position">{position}</div>

          {description && (
            <ul className="exp-item__description">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
