import React from "react";
import Heading from "../partials/Heading";
import NewsList from "../partials/NewsList";
import { LoremIpsum } from "lorem-ipsum";

const News = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  let news = [];
  for (let i = 0; i < 10; i++) {
    news.push(
      lorem.generateParagraphs(Math.floor(Math.random() * Math.floor(4)) + 1)
    );
  }

  return (
    <div>
      <Heading content={"News"} />
      <NewsList content={news} />
    </div>
  );
};

export default News;
