import React from "react";

const HomeContent = props => {
  return (
    <div>
      {props.content.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </div>
  );
};

export default HomeContent;
