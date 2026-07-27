import React, { useState } from "react";
import { MainContainer } from "../styles/main.styled";
import sideSlideData from "../data/sideSlideData.json";
import mainSlideData from "../data/slideData.json";
import newsListData from "../data/newsData.json";
import { StyledSwiper } from "../styles/swiper.styled";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Main = () => {
  const [mainSlide] = useState(mainSlideData.mainSlide);
  const [sideContents] = useState(sideSlideData.sideSlide);
  const [newsList] = useState(newsListData.newsList);
  const [isNews, setIsNews] = useState(true);
  const [isLeftNews, setIsLeftNews] = useState(true);
  console.log(newsList);
  return (
    <MainContainer>
      <div className="inner">
        <section className="hero_section">
          <div className="slide_area">
            <div className="main_slide">
              <StyledSwiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 3000,
                }}
                navigation
                speed={1000}
                loop
              >
                {mainSlide.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link to="#" className="slide_item_box">
                      <div className="imgbox">
                        <img src={item.img} alt="슬라이드이미지" />
                      </div>
                      <div className="slide_title">
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </StyledSwiper>
            </div>
            <div className="top_contents">
              {sideContents.map((item) => (
                <Link className="contents_item" key={item.id}>
                  <div className="contents_title">
                    <p className="title">{item.title}</p>
                    <p className="time">
                      {item.time}
                      {item.timeset}
                      <span>전</span>
                      <span>|</span>
                      {item.name}
                    </p>
                  </div>
                  <div className="contents_img">
                    <img src={item.src} alt="이미지" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="news_area">
            <div className="news_l news_box">
              <div className="news_tab">
                <div className="tab_btns">
                  <button
                    className={isNews ? "active_btn" : " "}
                    onClick={() => setIsNews(true)}
                  >
                    인기뉴스
                  </button>
                  <button
                    className={isNews ? "" : "active_btn"}
                    onClick={() => setIsNews(false)}
                  >
                    최신뉴스
                  </button>
                </div>
                <a href="#" className="more_news"></a>
              </div>
              <ul className="news_list">
                { isNews ? newsList.find(item => item.type === "popnews").list.map(item =>(<div>기본은 참이니까</div>)) : newsList.find(item => item.type === "view").list.map(item =>(<div>참이 아니니까</div>))}
              </ul>
            </div>
            <div className="news_r news_box">
              <div className="news_tab">
                <div className="tab_btns">
                  <button
                    className={isLeftNews ? "active_btn" : ""}
                    onClick={() => setIsLeftNews(true)}
                  >
                    많이 본 뉴스
                  </button>
                  <button
                    className={isLeftNews ? "" : "active_btn"}
                    onClick={() => setIsLeftNews(false)}
                  >
                    SNS 화제
                  </button>
                </div>
              </div>
              <ul className="news_list">
                { isLeftNews ? newsList.find(item => item.type === "sns").list.map(item =>(<div>기본은 참이니까</div>)) : newsList.find(item => item.type === "view").list.map(item =>(<div>참이 아니니까</div>))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </MainContainer>
  );
};

export default Main;
