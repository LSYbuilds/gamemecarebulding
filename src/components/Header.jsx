import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderWrap } from "../styles/header.styed";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lnbcall, setLabCall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrap scrolled={scrolled} lnbcall={lnbcall}>
      {/* 헤더 탑 */}
      <div className="header_top">
        <div className="top_i">
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
        </div>
      </div>
      {/* 헤더 바텀 */}
      <div className="header_bottom">
        <div className="bottom_i">
          <div className="gnb_box">
            <Link
              to="#"
              className="lnb_call"
              onClick={() => setLabCall(prev => !prev)}
            ></Link>
            <ul className="gnb">
              <li>
                <Link>뉴스</Link>
              </li>
              <li>
                <Link>프리뷰.뉴스</Link>
              </li>
              <li>
                <Link>특집기사</Link>
              </li>
              <li>
                <Link>게임정보</Link>
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
      {lnbcall ? (      <div className="lnb_box">
        <div className="lnb_inner">
          <ul className="lnb_menu">
            <li>
              <strong>뉴스</strong>
              <ul className="lnb_in">
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
            </li>

            <li>
              <strong>프리뷰·리뷰</strong>
              <ul className="lnb_in">
                <li>
                  <Link to="#">전체</Link>
                </li>
                <li>
                  <Link to="#">리뷰</Link>
                </li>
                <li>
                  <Link to="#">프리뷰</Link>
                </li>
              </ul>
            </li>

            <li>
              <strong>특집</strong>
              <ul className="lnb_in">
                <li>
                  <Link to="#">전체</Link>
                </li>
              </ul>
            </li>

            <li>
              <strong>게임정보</strong>
              <ul className="lnb_in">
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
                  <Link to="#">스크린샷</Link>
                </li>
                <li>
                  <Link to="#">동영상</Link>
                </li>
                <li>
                  <Link to="#">게임소</Link>
                </li>
                <li>
                  <Link to="#">게임순위</Link>
                </li>
              </ul>
            </li>

            <li>
              <strong>하드웨어</strong>
              <ul className="lnb_in">
                <li>
                  <Link to="#">뉴스</Link>
                </li>
                <li>
                  <Link to="#">기획기사</Link>
                </li>
              </ul>
            </li>

            <li>
              <strong>모바일</strong>
              <ul className="lnb_in">
                <li>
                  <Link to="#">전체</Link>
                </li>
                <li>
                  <Link to="#">뉴스</Link>
                </li>
                <li>
                  <Link to="#">커뮤니티</Link>
                </li>
              </ul>
            </li>

            <li>
              <strong>웹게임</strong>
              <ul className="lnb_in">
                <li>
                  <Link to="#">웹게임 홈</Link>
                </li>
                <li>
                  <Link to="#">뉴스</Link>
                </li>
                <li>
                  <Link to="#">프리뷰</Link>
                </li>
                <li>
                  <Link to="#">웹게임정보</Link>
                </li>
              </ul>
            </li>

            <li>
              <strong>게임공략</strong>
              <ul className="lnb_in">
                <li>
                  <Link to="#">하프라이프</Link>
                </li>
                <li>
                  <Link to="#">레드 데드 리뎀션</Link>
                </li>
                <li>
                  <Link to="#">메이플스토리</Link>
                </li>
                <li>
                  <Link to="#">리그 오브 레전드</Link>
                </li>
                <li>
                  <Link to="#">붉은사막</Link>
                </li>
                <li>
                  <Link to="#">이터널리턴</Link>
                </li>
                <li>
                  <Link to="#">오버워치</Link>
                </li>
                <li>
                  <Link to="#">리니지</Link>
                </li>
              </ul>
            </li>

            <li>
              <strong>팸</strong>
              <ul className="lnb_in">
                <li>
                  <Link to="#">이벤트</Link>
                </li>
                <li>
                  <Link to="#">포인트넷</Link>
                </li>
                <li>
                  <Link to="#">회사소개</Link>
                </li>
                <li>
                  <Link to="#">제휴문의</Link>
                </li>
                <li>
                  <Link to="#">광고안내</Link>
                </li>
                <li>
                  <Link to="#">고객센터</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>): null}
    </HeaderWrap>
  );
};

export default Header;
