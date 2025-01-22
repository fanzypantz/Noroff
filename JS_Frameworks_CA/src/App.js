/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// Components
import { GameProvider } from "./context/GameContext";
import Library from "./components/Library";
import Game from "./components/games/Game";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Favourites from "./components/Favourites";

function App() {
  const [pageFade, setPageFade] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [filters, setFilters] = useState({
    page: null,
    page_size: 25,
    ordering: "-rating",
  });

  useEffect(() => {
    // console.log("history: ", history.action);
  }, []);

  const setNewFilter = (key, value) => {
    let newFilters = filters;
    newFilters[key] = value;
    setFilters(newFilters);
  };

  return (
    <GameProvider
      value={{
        setPageFade: setPageFade,
        loadingImages: loadingImages,
        setLoadingImages: setLoadingImages,
        filters: filters,
        setNewFilter: setNewFilter,
      }}
    >
      <div className={"pageFade" + (pageFade ? " pageFade__anim" : "")} />
      <Router>
        <Menu />
        <Routes>
          <Route path={"/favourites"} element={<Favourites />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/game"} element={<Game />} />
          <Route path={"/:page"} element={<Library />} />
          <Route exact path={"/"} element={<Library />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
