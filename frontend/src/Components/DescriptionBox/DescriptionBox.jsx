import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ea vitae
          eos commodi quas animi magnam aut, optio voluptates voluptate sint!
          Nisi enim nesciunt in eius veritatis saepe laborum quo!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dolores
          cumque similique ullam odit laudantium consequatur quod aliquam.
          Similique, saepe consectetur optio ad vel soluta iusto molestias
          necessitatibus architecto velit.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
