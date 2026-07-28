import React, { useState } from "react";
import { MainContainer } from "../styles/main.styled";
import sideSlideData from "../data/sideSlideData.json";
import mainSlideData from "../data/slideData.json";
import newsListData from "../data/newsData.json";
import cataListData from "../data/catanewsData.json";
import dashBoardDate from "../data/dashBoardData.json";
import { StyledSwiper, ThumbSwiper } from "../styles/swiper.styled";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Main = () => {
  const [mainSlide] = useState(mainSlideData.mainSlide);
  const [sideContents] = useState(sideSlideData.sideSlide);
  const [newsList] = useState(newsListData.newsList);
  const [cateList] = useState(cataListData.cateNews);
  const [boardList] = useState(dashBoardDate.gameDashboard);
  const [isNews, setIsNews] = useState(true);
  const [isLeftNews, setIsLeftNews] = useState(true);
  console.log(boardList);
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
                {isNews
                  ? newsList
                      .find((item) => item.type === "popnews")
                      .list.map((item) => (
                        <li>
                          <Link to="#">
                            {item.hot === "1" ? (
                              <div>
                                <img
                                  src="/images/icon/hot.jpg"
                                  alt="핫이미지"
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            <p>{item.title}</p>
                            <p>{item.name}</p>
                          </Link>
                        </li>
                      ))
                  : newsList
                      .find((item) => item.type === "recent")
                      .list.map((item) => (
                        <li>
                          <Link>
                            {item.hot === "1" ? (
                              <div>
                                <img
                                  src="/images/icon/hot.jpg"
                                  alt="핫이미지"
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            <p>{item.title}</p>
                            <p>{item.name}</p>
                          </Link>
                        </li>
                      ))}
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
                {isLeftNews
                  ? newsList
                      .find((item) => item.type === "sns")
                      .list.map((item) => (
                        <li>
                          <Link>
                            {item.hot === "1" ? (
                              <div>
                                <img
                                  src="/images/icon/hot.jpg"
                                  alt="핫이미지"
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            <p>{item.title}</p>
                            <p>{item.name}</p>
                          </Link>
                        </li>
                      ))
                  : newsList
                      .find((item) => item.type === "view")
                      .list.map((item) => (
                        <li>
                          <Link>
                            {item.hot === "1" ? (
                              <div>
                                <img
                                  src="/images/icon/hot.jpg"
                                  alt="핫이미지"
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            <p>{item.title}</p>
                            <p>{item.name}</p>
                          </Link>
                        </li>
                      ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="thumb_seciton">
          <div className="preview thumb_box">
            <div className="cate_title">
              <p>프리뷰 리뷰</p>
            </div>
            <div className="cate_list">
              <ThumbSwiper
                modules={[Navigation]}
                navigation
                speed={1000}
                loop
                slidesPerView={3}
                spaceBetween={16}
              >
                {cateList
                  .find((item) => item.type === "preview")
                  .list.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link to="#" className="cate_item">
                        <div className="cate_img">
                          <img src={item.src} alt="이미지" />
                        </div>
                        <div className="cate_text">
                          <p>{item.title}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </ThumbSwiper>
            </div>
          </div>
          <div className="special thumb_box">
            <div className="cate_title">
              <p>특집/연재</p>
            </div>
            <div className="cate_list">
              <ThumbSwiper
                modules={[Navigation]}
                navigation
                speed={1000}
                loop
                slidesPerView={3}
                spaceBetween={16}
              >
                {cateList
                  .find((item) => item.type === "preview")
                  .list.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link to="#" className="cate_item">
                        <div className="cate_img">
                          <img src={item.src} alt="이미지" />
                        </div>
                        <div className="cate_text">
                          <p>{item.title}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </ThumbSwiper>
            </div>
          </div>
          <div className="mobile thumb_box">
            <div className="cate_title">
              <p>모바일</p>
            </div>
            <div className="cate_list">
              <ThumbSwiper
                modules={[Navigation]}
                navigation
                speed={1000}
                loop
                slidesPerView={3}
                spaceBetween={16}
              >
                {cateList
                  .find((item) => item.type === "preview")
                  .list.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Link to="#" className="cate_item">
                        <div className="cate_img">
                          <img src={item.src} alt="이미지" />
                        </div>
                        <div className="cate_text">
                          <p>{item.title}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </ThumbSwiper>
            </div>
          </div>
        </section>
        <section className="board_section">
          <div className="pop board_list">
            <div className="board_title">
              <p>인기게임순위</p>
            </div>
            <ul className="list">
              {boardList
                .find((item) => item.type === "popularGames")
                .list.map((item) => (
                  <li key={item.id}>
                    <Link to="#">
                      <span className="number">{item.id}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="rank board_list">
            <div className="board_title">
              <p>순위분석</p>
            </div>
            <ul className="list">
              {boardList
                .find((item) => item.type === "gameAnalysis")
                .list.map((item) => (
                  <li key={item.id}>
                    <Link to="#">
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="game board_list">
            <div className="board_title">
              <p>게임공략</p>
            </div>
            <ul className="list">
              {boardList
                .find((item) => item.type === "strategyGuides")
                .list.map((item) => (
                  <li key={item.id}>
                    <Link to="#">
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <section className="game_section">
          <div className="game_small"></div>
          <div className="gmae_large"></div>
        </section>
      </div>
    </MainContainer>
  );
};

export default Main;
