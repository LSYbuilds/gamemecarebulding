import React, { useState } from "react";
import gameinfo from "../data/gameInfoData.json";
import { GameinfoWrap } from "../styles/gameinfo.styled";
import Icon from "../components/common/SvgComponents";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SideCate from "../components/common/SIieCateComponents";
import { TopGameSwiper } from "../styles/swiper.styled";
import { Link } from "react-router-dom";

const GameInfo = ({ changeWidth }) => {
  const gameInfoData = gameinfo.gameinfo;
  const gameInfoCount = gameInfoData.length;
  const [cateActive, setcateActive] = useState(false);
  console.log(gameInfoData);
  const buttonMenu = [
    { id: "all", name: "전체" },
    { id: "online", name: "온라인", svg: Icon.internet },
    { id: "pc", name: "PC", svg: Icon.pc },
    { id: "mobile", name: "모바일", svg: Icon.mobile },
    { id: "video", name: "비디오", svg: Icon.video },
    { id: "web", name: "웹게임", svg: Icon.web },
    { id: "vr", name: "VR", svg: Icon.vr },
  ];
  const statusMenu = [
    { id: "develop", name: "개발중" },
    { id: "closebata", name: "클로즈베타" },
    { id: "openbata", name: "오픈베타" },
    { id: "ptp", name: "부분유효화" },
    { id: "subs", name: "정액제" },
    { id: "free", name: "무료" },
    { id: "close", name: "서비스종료" },
  ];
  const sideCateMenu = [
    { id: "RPG", svg: Icon.rpg, btn: "/images/icon/chevron-down.png" },
    { id: "MMORPG" },
    { id: "MORPG" },
    { id: "액션RPG" },
    { id: "SRPG" },
    { id: "롤플레잉" },
    { id: "액션", svg: Icon.action, btn: "/images/icon/chevron-down.png" },
    { id: "대전액션" },
    { id: "FPS" },
    { id: "TPS" },
    { id: "슈팅" },
    { id: "비행액션" },
    { id: "전략", svg: Icon.rts, btn: "/images/icon/chevron-down.png" },
    { id: "RTS" },
    { id: "AOS" },
    { id: "TCG" },
    { id: "시뮬레이션", svg: Icon.simul, btn: "/images/icon/chevron-down.png" },
    { id: "육성시뮬" },
    { id: "경영시뮬" },
    { id: "연애시뮬" },
    { id: "스포츠", svg: Icon.sport, btn: "/images/icon/chevron-down.png" },
    { id: "레이싱" },
    { id: "스포츠" },
    { id: "리듬", svg: Icon.music, btn: "/images/icon/chevron-down.png" },
    { id: "리듬액션" },
    { id: "어드벤쳐", svg: Icon.adven, btn: "/images/icon/chevron-down.png" },
    { id: "어드벤쳐" },
    { id: "비주얼노벨" },
    { id: "기타", svg: Icon.other, btn: "/images/icon/chevron-down.png" },
    { id: "소셜게임" },
    { id: "기능성게임" },
  ];
  return (
    <GameinfoWrap>
      <div className="inner">
        <section className="category_section">
          <div className="category platform">
            <div className="cate_title">
              <Icon.flatform />
              플랫폼
            </div>
            <ul className="cate_list">
              {buttonMenu.map((itme) => {
                const SvgIcon = itme.svg;
                return (
                  <li key={itme.id}>
                    {SvgIcon && <SvgIcon />}
                    {itme.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="category status">
            <div className="cate_title">
              <Icon.status />
              상태
            </div>
            <ul className="cate_list">
              {statusMenu.map((itme) => (
                <li key={itme.id}>{itme.name}</li>
              ))}
            </ul>
          </div>
          <div className="search_box">
            <div className="cate_title">
              <Icon.search />
              게임검색
            </div>
            <form action="#" className="search_form">
              <div className="search_box">
                <input type="text" placeholder="검색" />
                <button type="submit">
                  <Icon.search />
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="pop_games">
          <div className="pop_title">
            <Icon.gamemeca />
            <span>인기게임</span>
          </div>
          <div className="pop_slide">
            <TopGameSwiper
              modules={[Navigation]}
              navigation
              speed={1000}
              loop
              slidesPerView={
                changeWidth >= 1024 ? 5 : changeWidth >= 737 ? 3 : 1
              }
              spaceBetween={10}
              changeWidth={changeWidth}
            >
              {gameInfoData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to="#" className="top_item_box">
                    <div className="imgbox">
                      <img src={item.simg} alt="슬라이드이미지" />
                    </div>
                    <div className="slide_title">
                      <p>{item.title}</p>
                      <p>
                        {item.tags.slice(1, 3).map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </TopGameSwiper>
          </div>
        </section>
        <div className="count_bar">
          <p>총 {gameInfoCount}개의 게임이 있습니다.</p>
        </div>
        <section className="gamelist_section">
          {/* {cateActive && changeWidth <= 1024 ? <SideCate /> : null} */}
          <div className="side_call_btn_box">
            <button
              className="side_call_btn"
              onClick={() => {
                setcateActive((prev) => !prev);
              }}
            >
              <Icon.filter />
              카테고리
            </button>
          </div>
          {changeWidth >= 1024 ? (
            <SideCate />
          ) : (
            <>{cateActive && changeWidth <= 1024 ? <SideCate /> : null}</>
          )}
          <div className="gamelist_warp">
            <ul className="gamelist">
              {gameInfoData.map((item) => (
                <li key={item.id} className="game_item">
                  <div className="card_img">
                    <img
                      src={changeWidth >= 737 ? item.bimg : item.simg}
                      alt="큰이미지"
                    />
                  </div>
                  <div className="text">
                    <div className="head">
                      <p className="title">
                        <Link to="#">{item.title}</Link>
                      </p>
                      <p className="script">{item.text}</p>
                    </div>
                    <div className="info">
                      <p className="tags">
                        {item.tags.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </p>
                      <p className="relese">
                        <span>출시일</span>
                        <span>{item.open}</span>
                      </p>
                      <p>
                        <span>개발사</span>
                        <span>{item.debelop}</span>
                      </p>
                      <p>
                        <span>유통사</span>
                        <span>{item.pub}</span>
                      </p>
                      <p className="flat">
                        <Icon.windows />
                      </p>
                    </div>
                  </div>
                  <div className="list_thumbnail">
                    <div className="b_thumb">
                      <img src={item.simgB} alt="큰이미지" />
                    </div>
                    <div className="s_thumb">
                      <div className="img_item">
                        <img src={item.simg1} alt="작은이미지" />
                      </div>
                      <div className="img_item">
                        <img src={item.simg2} alt="작은이미지" />
                      </div>
                    </div>
                    <ul className="mobile_thumb">
                      <li>
                        <img src={item.simg1} alt="작은이미지" />
                      </li>
                      <li>
                        <img src={item.simg2} alt="작은이미지" />
                      </li>
                      <li>
                        <img src={item.simgB} alt="큰이미지" />
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </GameinfoWrap>
  );
};

export default GameInfo;
