import React, { useContext, useEffect, useState } from "react";
import LoadingEllipsis from "../LoadingEllipsis";
import GameContext from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

export function GameList(props) {
  const context = useContext(GameContext);
  const history = useNavigate();

  const [games, setGames] = useState(props.games);
  const [showDetails, setShowDetails] = useState(false);
  const [current, setCurrent] = useState(null);
  const [favourites, setFavourites] = useState(null);

  // Used to hide the list when loading the images
  let imageCount = 0;

  useEffect(() => {
    // If the property has changed, rerender the list
    if (props.games !== games) {
      setGames(props.games);
    }
    setFavourites(getFavourites());
    // eslint-disable-next-line
  }, [props.games]);

  const checkLoad = () => {
    imageCount++;
    if (imageCount === context.filters.page_size || !props.usePageSize) {
      context.setLoadingImages(false);
    }
  };

  const checkError = (e) => {
    // If this function is ever called just display the content that is being loaded regardless of loading state
    if (e) {
      console.log("error: ", e);
    }
    context.setLoadingImages(false);
  };

  const handleClick = (e, to) => {
    e.preventDefault();
    context.setPageFade(true);
    setTimeout(() => {
      // If clicked manually send the user to the URL instead of using the Link element
      history.push(to);
    }, 1000);
  };

  const handleHover = (id) => {
    setCurrent(id);
    setShowDetails(true);
  };

  const handleLeave = () => {
    setCurrent(null);
    setShowDetails(false);
  };

  const handleFavourites = (e, game) => {
    e.stopPropagation();
    let oldFav = localStorage.getItem("favourites");
    if (oldFav !== null) {
      oldFav = JSON.parse(oldFav);
      if (oldFav.filter((item) => item.id === game.id).length) {
        // Remove if existing
        oldFav = oldFav.filter((item) => item.id !== game.id);
        // Remove it from the state
        setFavourites(favourites.filter((item) => item.id !== game.id));
      } else {
        // Add if does not exist
        oldFav.push({
          id: game.id,
          background_image: game.background_image,
          released: game.released,
          name: game.name,
          rating: game.rating,
          rating_top: game.rating_top,
        });
      }
      localStorage.setItem("favourites", JSON.stringify(oldFav));
      setFavourites(getFavourites());
      if ("updateFavourites" in props) {
        props.updateFavourites();
      }
    } else {
      // Create the new array if array is nonexistent
      let newFav = [];
      newFav.push({
        id: game.id,
        background_image: game.background_image,
        released: game.released,
        name: game.name,
        rating: game.rating,
        rating_top: game.rating_top,
      });
      localStorage.setItem("favourites", JSON.stringify(newFav));
      setFavourites(getFavourites());
    }
  };

  const getFavourites = () => {
    let oldFav = localStorage.getItem("favourites");
    if (oldFav !== null) {
      oldFav = JSON.parse(oldFav);
      if (oldFav.length > 0) {
        let favs = [];
        for (let i = 0; i < oldFav.length; i++) {
          favs.push(oldFav[i].id);
        }
        return favs;
      }
    } else {
      return null;
    }
  };

  const checkIfFavourite = (id) => {
    if (favourites !== null && favourites !== undefined) {
      if (favourites.length > 0) {
        return !!favourites.includes(id);
      }
    } else {
      return false;
    }
  };

  return (
    <div className={"library__main"}>
      <div
        className={
          "library__container" +
          (context.loadingImages ? " library__loadingImages" : "")
        }
      >
        {games.map((value, index) => {
          return (
            <div
              onClick={(e) =>
                handleClick(e, {
                  pathname: "/game",
                  search: `?id=${value.id}&page=${context.filters.page}&sortby=${context.filters.ordering}`,
                })
              }
              onMouseEnter={() => handleHover(value.id)}
              onMouseLeave={handleLeave}
              key={index}
              className={
                "library__card" +
                (value.id === current ? " library__openCard" : "")
              }
            >
              <svg
                onClick={(e) => handleFavourites(e, value)}
                className={
                  "library__star" +
                  (checkIfFavourite(value.id) ? " library__fav" : "")
                }
                height="21px"
                version="1.1"
                viewBox="0 0 20 21"
                width="20px"
              >
                <title>Click to add to favourites!</title>
                <path
                  d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z"
                  id="Shape"
                />
              </svg>
              <img
                onLoad={checkLoad}
                onError={checkError}
                className={"library__cardImg"}
                src={
                  value.background_image !== null
                    ? value.background_image
                    : require("../../images/image_not_found.jpg")
                }
                alt=""
              />
              <div
                className={
                  "library__detailContainer" +
                  (value.id === current && showDetails
                    ? " library__showDetails"
                    : "")
                }
              >
                <h2 className={"library__cardTitle"}>{value.name}</h2>
                <h3 className={"library__cardRating"}>
                  <p className={"library__released"}>
                    {value.released !== null
                      ? "Release Date: " + value.released
                      : "Not Released"}
                  </p>
                  <p className={"library__rating"}>
                    Rating: {Math.round(value.rating * 10) / 10} /{" "}
                    {value.rating_top}
                  </p>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      {context.loadingImages && (
        // From loading.io
        <LoadingEllipsis />
      )}
    </div>
  );
}

export default GameList;
