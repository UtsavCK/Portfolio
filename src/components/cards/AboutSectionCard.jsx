import React from "react";
import AboutCard from "./AboutCard";

const AboutSectionCard = (props) => {
  return (
    <section className="card">
      <h2>{props.title}</h2>
      <div className="details">
        <div>
          {props.details.map((details, index) => (
            <AboutCard
              key={index}
              title={details.title}
              description={details.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionCard;
