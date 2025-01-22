import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../context/GameContext";

const Pagination = (props) => {
  const context = useContext(GameContext);
  const history = useNavigate();

  const getDescendingName = () => {
    const switchContext = context.filters.ordering.startsWith("-")
      ? context.filters.ordering.substr(1)
      : context.filters.ordering;
    switch (switchContext) {
      case "name":
        return "Starting at A";
      case "rating":
        return "Highest Score First";
      default:
        return "Newest First";
    }
  };

  const getAcendingName = () => {
    const switchContext = context.filters.ordering.startsWith("-")
      ? context.filters.ordering.substr(1)
      : context.filters.ordering;
    switch (switchContext) {
      case "name":
        return "Starting at Z";
      case "rating":
        return "Lowest Score First";
      default:
        return "Newest First";
    }
  };

  const previousPage = () => {
    if (
      !context.loadingImages &&
      props.gameData.previous !== null &&
      parseInt(props.page) - 1 > 0
    ) {
      history.push(`/${parseInt(props.page) - 1}`);
      context.setNewFilter("page", parseInt(props.page) - 1);
      props.fetchPage(props.gameData.previous);
    }
  };

  const nextPage = () => {
    if (!context.loadingImages && props.gameData.next !== null) {
      if (props.page === undefined) {
        history.push(`/${context.filters.page + 1}`);
        context.setNewFilter("page", context.filters.page + 1);
      } else {
        history.push(`/${parseInt(props.page) + 1}`);
        context.setNewFilter("page", parseInt(props.page) + 1);
      }
      props.fetchPage(props.gameData.next);
    }
  };

  const handleSorting = (e) => {
    context.setNewFilter(
      "ordering",
      context.filters.ordering.startsWith("-")
        ? "-" + e.target.value
        : e.target.value,
    );
    context.setNewFilter("page", 1);
    history.push(`/1?sortby=${context.filters.ordering}`);
    props.fetchPage();
  };

  const handleDirection = (e) => {
    const newOrder = context.filters.ordering.startsWith("-")
      ? context.filters.ordering.substr(1)
      : `-${context.filters.ordering}`;
    context.setNewFilter("ordering", newOrder);
    context.setNewFilter("page", 1);
    history.push(`/1?sortby=${context.filters.ordering}`);
    props.fetchPage();
  };

  return (
    <div className={"library__controlContainer"}>
      <select
        onChange={handleSorting}
        className={"select sorting"}
        value={
          context.filters.ordering.startsWith("-")
            ? context.filters.ordering.substr(1)
            : context.filters.ordering
        }
      >
        <option value="name">Name</option>
        <option value="released">Released</option>
        <option value="added">Added</option>
        <option value="created">Created</option>
        <option value="rating">Rating</option>
      </select>
      <select
        onChange={handleDirection}
        className={"select direction"}
        value={
          context.filters.ordering.startsWith("-") ? "descending" : "ascending"
        }
      >
        <option value="ascending">{getAcendingName()}</option>
        <option value="descending">{getDescendingName()}</option>
      </select>
      <div className={"library__paginationControl"}>
        <button
          onClick={previousPage}
          className={"library__paginationControl__button"}
        >
          Previous Page
        </button>
        <button
          onClick={nextPage}
          className={"library__paginationControl__button"}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
