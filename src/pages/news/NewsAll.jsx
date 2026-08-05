import React from "react";
import { NewsAllWarp } from "../../styles/news.styled";
import monthNewsData from "../../data/monthNewData.json";
import newsData from "../../data/newslistData.json";
import { TopnewsSwiper } from "../../styles/swiper.styled";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import MiniBoard from "../../components/common/MiniBoard";
import AdComponents from "../../components/common/AdComponents";

const NewsAll = ({ path, changeWidth }) => {
  const monthNews = monthNewsData.monthNews;
  const newDataList = newsData.newsList;
  const newDatalistCount = newDataList.length;
  console.log(newDataList);
  console.log(newDatalistCount);
  console.log("NewsAll에서 불러옴", path);
  return (
    <NewsAllWarp>
      <div className="topnews">
        <div className="top_title">
          <img
            src={process.env.PUBLIC_URL + "/images/icon/subicon.png"}
            alt="아이콘"
          />
          <span>이달의 이슈</span>
        </div>
        <ul className="topnews_slide">
          <TopnewsSwiper
            modules={[Navigation]}
            navigation
            speed={1000}
            loop
            slidesPerView={changeWidth <= 1024 ? 1 : 3}
            spaceBetween={16}
          >
            {monthNews.map((item) => (
              <SwiperSlide>
                <li key={item.id} className="topitem">
                  <Link to="#">
                    <div className="item_img">
                      <img
                        src={
                          item.src.startsWith("http")
                            ? item.src
                            : process.env.PUBLIC_URL + item.src
                        }
                        alt="뉴스이미지"
                      />
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
      <div className="count_bar">
        <p>총 {newDatalistCount}개의 기사가 있습니다.</p>
      </div>
      <div className="news_list_section">
        <div className="new_slice">
          <ul className="news_list">
            {newDataList.slice(1, 6).map((item) => (
              <li key={item.id} className="news_item">
                <Link to="#">
                  <div className="thumb_img">
                    <img
                      src={
                        item.url.startsWith("http")
                          ? item.url
                          : process.env.PUBLIC_URL + item.url
                      }
                      alt="썸네일이미지"
                    />
                    <div className="tag">{item.category}</div>
                  </div>
                  <div className="news_thumb_info">
                    <p className="info_tag">
                      {item.tags.map((iitems) => (
                        <span key={iitems}>{iitems}</span>
                      ))}
                    </p>
                    <div className="text_box">
                      <p className="title">{item.title}</p>
                      <p className="text">{item.summary}</p>
                    </div>
                    <div className="nametime">
                      <p>
                        <span>{item.writer.name}</span>
                        <span>{item.writer.position}</span>
                        <span>{item.publishedAt}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="asiad_box">
          <MiniBoard path={path}></MiniBoard>
        </div>
      </div>
      <div className="ad_box">
        <AdComponents></AdComponents>
      </div>
      <div className="news_list_section">
        <ul className="news_list">
          {newDataList.slice(7, 12).map((item) => (
            <li key={item.id} className="news_item">
              <Link to="#">
                <div className="thumb_img">
                  <img
                    src={
                      item.url.startsWith("http")
                        ? item.url
                        : process.env.PUBLIC_URL + item.url
                    }
                    alt="썸네일이미지"
                  />
                  <div className="tag">{item.category}</div>
                </div>
                <div className="news_thumb_info">
                  <p className="info_tag">
                    {item.tags.map((iitems) => (
                      <span key={iitems}>{iitems}</span>
                    ))}
                  </p>
                  <div className="text_box">
                    <p className="title">{item.title}</p>
                    <p className="text">{item.summary}</p>
                  </div>
                  <div className="nametime">
                    <p>
                      <span>{item.writer.name}</span>
                      <span>{item.writer.position}</span>
                      <span>{item.publishedAt}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </NewsAllWarp>
  );
};

export default NewsAll;
