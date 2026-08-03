import React from "react";
import { NewsWrap } from "../styles/news.styled";
import { Route, Routes } from "react-router-dom";
import NewsAll from "./news/NewsAll";

const News = ({ path, changeWidth }) => {
  console.log("News에서 불러옴", path);
  return (
    <NewsWrap path={path}>
      <div className="inner">
        <Routes>
          <Route
            path="/"
            element={<NewsAll path={path} changeWidth={changeWidth} />}
          ></Route>
        </Routes>
      </div>
    </NewsWrap>
  );
};

export default News;

{
  /* <MiniBoard Path={Path}/> */
}
