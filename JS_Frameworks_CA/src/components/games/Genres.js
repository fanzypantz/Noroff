import React from "react";

const Genres = props => {
  return (
    <div className={"game__cardGenres"}>
      <p>Genres: </p>
      {props.genres.map((genre, index) => {
        return (
          <p key={index} className={"game__cardGenre"}>
            {genre.name}
          </p>
        );
      })}
    </div>
  );
};

export default Genres;
