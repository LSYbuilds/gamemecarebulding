import React, { useState } from "react";
import MiniBoard from "../components/common/MiniBoard";
import { MainContainer } from "../styles/main.styled";
import sideSlideData from "../data/sideSlideData.json";
import mainSlideData from "../data/slideData.json";
import newsListData from "../data/newsData.json";
import cataListData from "../data/catanewsData.json";
import dashBoardData from "../data/dashBoardData.json";
import gameInfoData from "../data/gameInfoData.json";
import { StyledSwiper, ThumbSwiper } from "../styles/swiper.styled";
import { MiniBoard_wrap } from "../styles/miniboard.styled";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Main = () => {
  const mainSlide = mainSlideData.mainSlide;
  const sideContents = sideSlideData.sideSlide;
  const newsList = newsListData.newsList;
  const cateList = cataListData.cateNews;
  const boardList = dashBoardData.gameDashboard;
  const gameInfo = gameInfoData.gameinfo;
  const [isNews, setIsNews] = useState(true);
  const [isLeftNews, setIsLeftNews] = useState(true);
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
                <Link to="#" className="more_news"></Link>
              </div>
              <ul className="news_list">
                {isNews
                  ? newsList
                      .find((item) => item.type === "popnews")
                      .list.map((item) => (
                        <li key={item.id}>
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
                        <li li key={item.id}>
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
                        <li key={item.id}>
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
                        <li key={item.id}>
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
        {/* 미니보드 컴포넌트 */}
        <MiniBoard />
        {/* 미니보드 컴포넌트 */}
        <section className="game_section">
          <div className="game_small game_list">
            <div className="section_title">
              <p>게임정보</p>
              <p>인기순</p>
            </div>
            <ul className="list_box">
              {gameInfo.map((item) => (
                <li key={item.id}>
                  <Link to="#">
                    <div className="thumb_img">
                      <img src={item.simg} alt="이미지" />
                    </div>
                    <div className="info_box">
                      <div className="info">
                        <p className="name">{item.title}</p>
                        <p className="text">{item.text}</p>
                      </div>
                      <p className="tags">
                        {item.tags.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="game_large game_list">
            <div className="section_title">
              <p>게임메카 추천</p>
            </div>
            <ul className="list_box">
              {gameInfo.slice(8, 12).map((item) => (
                <li key={item.id}>
                  <Link to="#">
                    <div className="thumb_large">
                      <img src={item.bimg} alt="이미지" />
                    </div>
                    <div className="info_box">
                      <div className="info">
                        <p className="name">{item.title}</p>
                        <p className="text">{item.text}</p>
                      </div>
                      <p className="tags">
                        {item.tags.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </MainContainer>
  );
};

export default Main;
