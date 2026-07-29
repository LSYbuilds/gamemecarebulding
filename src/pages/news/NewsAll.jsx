import React, { useState } from "react";
import { NewsAllWarp } from "../../styles/news.styled";
import monthNewsData from "../../data/monthNewData.json";
import { TopnewsSwiper } from "../../styles/swiper.styled";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const NewsAll = ({ path }) => {
  const monthNews = monthNewsData.monthNews;
  console.log(monthNews);
  return (
    <NewsAllWarp>
      <div className="topnews">
        <div className="top_title">
          <img src="#" alt="아이콘" />
          <span>이달의 이슈</span>
        </div>
        <ul className="topnews_slide">
          <TopnewsSwiper
            modules={[Navigation]}
            navigation
            speed={1000}
            loop
            slidesPerView={3}
            spaceBetween={16}
          >
            {monthNews.map((item) => (
              <SwiperSlide>
                <li key={item.id} className="topitem">
                  <Link to="#">
                    <div className="item_img">
                      <img src={item.src} alt="뉴스이미지" />
                    </div>
                    <div className="text_box">
                      <p className="type">{item.theme}</p>
                      <div className="text">
                        <span>{item.title}</span>
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </SwiperSlide>
            ))}
          </TopnewsSwiper>
        </ul>
      </div>
      <div className="count_bar"></div>
      <div className="news_list_section">
        <div className="new_slice">
          <div className="slice_news_list"></div>
          <div className="asiad_box"></div>
        </div>
        <div className="ad_box"></div>
        <div className="full_width_news"></div>
      </div>
    </NewsAllWarp>
  );
};

export default NewsAll;
