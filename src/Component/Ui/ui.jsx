import React from "react";
import "./ui.css"; // Import the CSS file

const Ui = () => {
  return (
    <div className="wrapper">
      <div className="scroll-cards">
        <h1>Some Sticky-Stacked Cards</h1>
        <Card
          title="Nice little headline"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet rem repudiandae quam illo, odio velit eius sunt architecto ratione iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?"
        />
        <Card
          title="Another Headline here"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet rem repudiandae quam illo, odio velit eius sunt architecto ratione iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?"
        />
        <Card
          title="Third Card follows"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet rem repudiandae quam illo, odio velit eius sunt architecto ratione iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?"
        />
        <Card
          title="Will there be another?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet rem repudiandae quam illo, odio velit eius sunt architecto ratione iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?"
        />
        <Card
          title="Last one"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet rem repudiandae quam illo, odio velit eius sunt architecto ratione iure deserunt magnam aut tenetur sint incidunt, ipsam id. Ab?"
        />
      </div>
    </div>
  );
};

const Card = ({ title, content }) => {
  return (
    <article className="scroll-cards__item">
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Ui;
