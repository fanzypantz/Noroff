import React from "react";

const Platforms = props => {
  return (
    <div className={"game__platforms"}>
      <p>Platforms: </p>
      {props.platforms.map((platform, index) => {
        return (
          <img
            key={index}
            className={"game__platformIcon"}
            src={require(`../../images/${platform.platform.name}.png`)}
            alt={platform}
          />
        );
      })}
    </div>
  );
};

export default Platforms;
