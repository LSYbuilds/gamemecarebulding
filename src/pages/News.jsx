import React, { useState, useEffect } from "react";
import MiniBoard from "../components/MiniBoard";
import { NewsWrap } from "../styles/news.styled";
import { useLocation } from "react-router-dom";

const News = () => {
  const location = useLocation();
  const [Path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <NewsWrap>
      <div className="inner">
        <section className="topnews_section">
          {/* 일단 이거 슬라이드로 하자 */}
        </section>
        <div className="count_bar">

        </div>
        <section className="new_list_section">
          <div className="slice_news">
            <div className="news_left"></div>
            <div className="news_right"></div>
          </div>
          <div className="ad_box">

          </div>
          <div className="full_width_news">

          </div>
        </section>
      </div>
    </NewsWrap>
  );
};

export default News;

{
  /* <MiniBoard Path={Path}/> */
}
