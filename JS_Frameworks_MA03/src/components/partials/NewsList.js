import React from "react";

const NewsList = props => {
  return (
    <ul>
      {props.content.map((text, index) => (
        <li style={{ margin: "20px", listStyleType: "none" }} key={index}>
          {text}
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
