import React, { useState, useEffect } from "react";
import MiniBoard from "../components/common/MiniBoard";
import { NewsWrap } from "../styles/news.styled";
import { Route, Router , Routes } from "react-router-dom";
import NewsAll from "./news/NewsAll";

const News = ({path}) => {
  return (
    <NewsWrap path={path}>
      <div className="inner">
        <Routes>
            <Route path="/" element={<NewsAll/>}></Route>
        </Routes>

      </div>
    </NewsWrap>
  );
};

export default News;

{
  /* <MiniBoard Path={Path}/> */
}
