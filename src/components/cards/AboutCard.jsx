import React from "react";

const AboutCard = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </>
  );
};

export default AboutCard;
