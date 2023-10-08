import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import GameContext from "../context/GameContext";
import Pagination from "../components/Pagination";
import GameList from "./games/GameList";
import "../css/Library.scss";
import axios from "axios";

const Library = props => {
  const { page } = useParams();
  const context = useContext(GameContext);
  const params = new URLSearchParams(useLocation().search);

  // State
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    if (params.get("sortby")) {
      let sorting = params.get("sortby").startsWith("-")
        ? params.get("sortby").substr(1)
        : params.get("sortby");
      context.setNewFilter(
        "ordering",
        params.get("direction") === "ascending" ? sorting : "-" + sorting
      );
    }

    if (page) {
      // Set the correct page before you fetch the data
      context.setNewFilter("page", page);
      fetchPage();
    } else {
      context.setNewFilter("page", 1);
      fetchPage();
    }
    context.setPageFade(false);
    // eslint-disable-next-line
  }, []);

  const fetchPage = query => {
    // The default page is 1, if it is not set by the library component.
    // This can be called from any component.
    // This url query can be expanded upon with plenty of features like ordering,
    // dynamic page size etc.
    context.setLoadingImages(true);
    let url = query
      ? query
      : `https://api.rawg.io/api/games?page=${
          context.filters.page === null ? 1 : context.filters.page
        }&ordering=${context.filters.ordering}&page_size=${
          context.filters.page_size
        }`;
    axios.get(url).then(response => {
      setGameData(response.data);
    });
  };

  return (
    <div className={"library"}>
      <Pagination page={page} gameData={gameData} fetchPage={fetchPage} />
      {gameData !== null && <GameList games={gameData.results} />}
    </div>
  );
};

export default Library;
