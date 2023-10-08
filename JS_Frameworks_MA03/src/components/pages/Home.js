import React from "react";
import Heading from "../partials/Heading";
import HomeContent from "../partials/HomeContent";

const Home = () => {
  return (
    <div>
      <Heading content={"This is the home page content"} />
      <HomeContent
        content={[
          "This is an array of text",
          "This has index of 1",
          "Random text",
          "Bush did 9/11"
        ]}
      />
    </div>
  );
};

export default Home;
