import React, { useContext, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import GameContext from "../../context/GameContext";
import Platforms from "./Platforms";
import Genres from "./Genres";
import "../../css/Game.scss";
import axios from "axios";

const Game = ({ location }) => {
  const context = useContext(GameContext);
  const params = new URLSearchParams(useLocation().search);
  const history = useHistory();

  // State
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGame(params.get("id"));
    context.setPageFade(false);
    // setGame(context.gameData.results.find(game => game.id === id));
    // eslint-disable-next-line
  }, []);

  const fetchGame = id => {
    let url = `https://api.rawg.io/api/games/${id}`;
    axios.get(url).then(response => {
      setGame(response.data);
    });
  };

  const goBack = () => {
    context.setPageFade(true);
    setTimeout(() => {
      history.push(`/${parseInt(params.get("page"))}`);
    }, 1000);
  };

  const gameData = () => {
    return (
      <div className={"game"}>
        <img
          className={"game__backgroundImage"}
          src={
            game.background_image !== null
              ? game.background_image
              : require("../../images/image_not_found.jpg")
          }
          alt=""
        />
        <div className={"game__container"}>
          <img
            onClick={goBack}
            className={"game__cross"}
            src={require("../../images/cross.png")}
            alt=""
          />
          <h1>{game.name}</h1>
          <hr />
          <p className={"game__rating"}>
            Rating: {Math.round(game.rating * 10) / 10} / {game.rating_top}
          </p>
          <hr />
          <p className={"game__released"}>
            {game.released !== null
              ? "Release Date: " + game.released
              : "Not Released"}
          </p>
          <hr />
          <div className={"game__description"}>
            {game.description.replace(/(<([^>]+)>)/gi, "")}
          </div>
          <hr />
          <Platforms platforms={game.platforms} />
          <hr />
          <Genres genres={game.genres} />
          <a
            className={"game__website-link"}
            target="_blank"
            rel="noopener noreferrer"
            href={game.website}
          >
            Go to Website
          </a>
        </div>
      </div>
    );
  };

  return <div>{game !== null && <div>{gameData()}</div>}</div>;
};

export default Game;
