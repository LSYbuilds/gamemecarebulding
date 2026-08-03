import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderWrap } from "../../styles/header.styed";
import Icon from "../../components/common/SvgComponents";

const Header = ({ path }) => {
  const [scrolled, setScrolled] = useState(false);
  const [lnbcall, setLabCall] = useState(false);
  const [gnbDropDown, setGnbDropDown] = useState(null);
  const [mobilenavState, setMobilenav] = useState(false);
  const [mobileDropDown, setMobileDrapDown] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const mobilenav = [
    {
      id: 1,
      title: "뉴스",
      svg: Icon.down,
      list: [
        ["전체", "/news"],
        ["산업", "/news/industry"],
        ["온라인", "/news/online"],
        ["PC", "/news/pc"],
        ["비디오", "/news/video"],
        ["웹게임", "/news/webgame"],
        ["모바일", "/news/mobile"],
        ["VR", "/news/vr"],
        ["하드웨어", "/news/hardware"],
        ["테마", "/news/theme"],
      ],
    },
    {
      id: 2,
      title: "프리뷰·리뷰",
      svg: Icon.down,
      list: [
        ["전체", "/review"],
        ["리뷰", "/review"],
        ["프리뷰", "/preview"],
      ],
    },
    {
      id: 3,
      title: "특집",
      svg: Icon.down,
      link: "/special",
      list: [["전체", "/special"]],
    },
    {
      id: 4,
      title: "게임정보",
      svg: Icon.down,
      list: [
        ["전체", "/gameinfo"],
        ["게임DB", "/game/db"],
        ["업체정보", "/game/company"],
        ["공략", "/game/tip"],
        ["게임일정", "/game/schedule"],
        ["스크린샷", "/game/screenshot"],
        ["동영상", "/game/video"],
        ["게임소개", "/game/info"],
        ["게임순위", "/game/rank"],
      ],
    },
    {
      id: 5,
      title: "하드웨어",
      svg: Icon.down,
      list: [
        ["뉴스", "/hardware/news"],
        ["기획기사", "/hardware/plan"],
      ],
    },
    {
      id: 6,
      title: "모바일",
      svg: Icon.down,
      list: [
        ["전체", "/mobile"],
        ["뉴스", "/mobile/news"],
        ["커뮤니티", "/mobile/community"],
      ],
    },
    {
      id: 7,
      title: "웹게임",
      svg: Icon.down,
      list: [
        ["웹게임 홈", "/webgame"],
        ["뉴스", "/webgame/news"],
        ["프리뷰", "/webgame/preview"],
        ["웹게임정보", "/webgame/info"],
      ],
    },
    {
      id: 8,
      title: "게임공략",
      svg: Icon.down,
      list: [
        ["하드라이프", "/tip/hardlife"],
        ["레드 데드 리뎀션", "/tip/rdr"],
        ["머머스클럽", "/tip/momosclub"],
        ["리그 오브 레전드", "/tip/lol"],
        ["몬스터헌터", "/tip/mh"],
        ["이터널리턴", "/tip/er"],
        ["오버워치", "/tip/overwatch"],
        ["리니지", "/tip/lineage"],
      ],
    },
    {
      id: 9,
      title: "안내사항",
      svg: Icon.down,
      list: [
        ["회사소개", "/company"],
        ["제휴문의", "/contact"],
        ["광고안내", "/advertise"],
        ["고객센터", "/customer"],
      ],
    },
    {
      id: 10,
      title: "팸",
      list: [
        {
          id: "1",
          icon: "/images/icon/fam.png",
          title: "팸",
          link: "/fam",
        },
        {
          id: "2",
          icon: "/images/icon/event.png",
          title: "이벤트",
          link: "/event",
        },
        {
          id: "3",
          icon: "/images/icon/po.png",
          title: "포션마켓",
          link: "/potion",
        },
        {
          id: "4",
          icon: "/images/icon/kugmin.png",
          title: "국민트리",
          link: "/kugmin",
        },
      ],
    },
  ];

  return (
    <HeaderWrap
      scrolled={scrolled}
      lnbcall={lnbcall}
      mobileDropDown={mobileDropDown}
    >
      {/* 헤더 탑 */}
      <div className="header_top">
        <div className="top_i">
          <button
            className="mobile_call_btn"
            onClick={() => setMobilenav((prev) => !prev)}
          >
            <Icon.hamberger />
          </button>
          <div className="site_head_title">
            <h1 className="logo">
              <Link to="/" className="logo_link">
                <img src="/images/icon/h_logo.png" alt="Logo" />
              </Link>
            </h1>
            <form className="search_box">
              <input type="text" placeholder="게임검색" />
              <button type="submit" className="search_submit"></button>
            </form>
          </div>
          <div className="util">
            <div className="login">
              <Link to="#">
                <img src="/images/icon/lock.png" alt="로그인이미지" />
                <p>로그인</p>
              </Link>
            </div>
            <div className="joinus">
              <Link to="#">
                <img src="/images/icon/user.png" alt="회원가입" />
                <p>회원가입</p>
              </Link>
            </div>
          </div>
          <div className="respon_util">
            <div className="util_icon">
              <Link to="#">
                <Icon.man />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 헤더 바텀 */}
      <div className="header_bottom">
        <div className="bottom_i gnb">
          <div className="gnb_box">
            <div className="gnb_list">
              <Link
                to="#"
                className="lnb_call"
                onClick={() => setLabCall((prev) => !prev)}
              ></Link>
              <ul className="gnb_menu">
                <li>
                  <Link to="/news">뉴스</Link>
                </li>
                <li>
                  <Link>프리뷰.뉴스</Link>
                </li>
                <li>
                  <Link>특집기사</Link>
                </li>
                <li>
                  <Link to="/gameinfo">게임정보</Link>
                </li>
                <li>
                  <Link>하드웨어</Link>
                </li>
                <li>
                  <Link>모바일</Link>
                </li>
                <li>
                  <Link>웹게임</Link>
                </li>
              </ul>
            </div>
            <div className="fam_site_box">
              <ul className="fam_list">
                <li>
                  <Link>
                    <img src="/images/icon/fam.png" alt="패밀리아이콘" />팸
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/images/icon/event.png" alt="패밀리아이콘" />
                    이벤트
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src="/images/icon/fam.png" alt="패밀리아이콘" />
                    포션마켓
                  </Link>
                </li>
                <li>
                  <Link to="https://trees.gamemeca.com/">
                    <img src="/images/icon/kugmin.png" alt="패밀리아이콘" />
                    국민트리
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {path === "/news" ? (
          <div className="lnb_i lnb">
            <ul className="lnb_menu">
              <li>
                <Link to="#">전체</Link>
              </li>
              <li>
                <Link to="#">산업</Link>
              </li>
              <li>
                <Link to="#">온라인</Link>
              </li>
              <li>
                <Link to="#">PC</Link>
              </li>
              <li>
                <Link to="#">비디오</Link>
              </li>
              <li>
                <Link to="#">웹게임</Link>
              </li>
              <li>
                <Link to="#">모바일</Link>
              </li>
              <li>
                <Link to="#">VR</Link>
              </li>
              <li>
                <Link to="#">하드웨어</Link>
              </li>
              <li>
                <Link to="#">테마</Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {path === "/gameinfo" ? (
          <div className="lnb_i lnb">
            <ul className="lnb_menu">
              <li>
                <Link to="#">게임DB</Link>
              </li>
              <li>
                <Link to="#">업체정보</Link>
              </li>
              <li>
                <Link to="#">공략</Link>
              </li>
              <li>
                <Link to="#">게임일정</Link>
              </li>
              <li>
                <Link to="#">스크린샤</Link>
              </li>
              <li>
                <Link to="#">동영상</Link>
              </li>
              <li>
                <Link to="#">게임쇼</Link>
              </li>
              <li>
                <Link to="#">게임순위</Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      {lnbcall ? (
        <div className="global_box">
          <div className="global_inner">
            <button
              className="global_close_btn"
              onClick={() => setLabCall((prev) => !prev)}
            >
              <Icon.deactive />
            </button>
            <ul className="global_menu">
              {mobilenav.slice(0, 9).map((item, index) => {
                const SvgIcon = item.svg;
                return (
                  <li key={item.id} className="global_nav_list">
                    <div
                      className="list_head"
                      onClick={() => {
                        setGnbDropDown(
                          gnbDropDown === index ? null : index,
                        );
                      }}
                    >
                      <p>
                        <span>{item.title}</span>
                        {SvgIcon && <SvgIcon />}
                      </p>
                    </div>
                    <ul
                      className={`global_in ${gnbDropDown === index ? "active" : ""
                        }`}
                    >
                      {item.list.map(([name, link]) => (
                        <li key={link}>
                          <Link to={link}>{name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
      {mobilenavState ? (
        <div className="mobile_nav">
          <button
            className="close_nav_btn"
            onClick={() => setMobilenav((prev) => !prev)}
          >
            <Icon.deactive />
          </button>
          <ul className="mobile_util">
            <li>
              <Link>
                <span>로그인</span>
                <img src="/images/icon/lock.png" alt="아이콘" />
              </Link>
            </li>
            <li>
              <Link>
                <span>회원가입</span>
                <img src="/images/icon/user.png" alt="아이콘" />
              </Link>
            </li>
          </ul>
          <div className="mobile_nav_box">
            {mobilenav.slice(0, 9).map((item, index) => {
              const SvgIcon = item.svg;
              return (
                <div key={item.id} className="mobile_nav_list">
                  <div
                    className="list_head"
                    onClick={() => {
                      setMobileDrapDown(
                        mobileDropDown === index ? null : index,
                      );
                    }}
                  >
                    <p>
                      <span>{item.title}</span>
                      {SvgIcon && <SvgIcon />}
                    </p>
                  </div>
                  <ul
                    className={`mobile_nav_list_in ${mobileDropDown === index ? "active" : ""
                      }`}
                  >
                    {item.list.map(([name, link]) => (
                      <Link to={link}>
                        <li key={link}>{name}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              );
            })}
            <ul className="mobile_fam_list">
              {mobilenav[9].list.map((item) => (
                <li key={item.id}>
                  <Link to="#">
                    <img src={item.icon} alt="아이콘" />
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {mobilenavState ? (
        <div
          className="screen_black"
          onClick={() => setMobilenav((prev) => !prev)}
        ></div>
      ) : null}
    </HeaderWrap>
  );
};

export default Header;
