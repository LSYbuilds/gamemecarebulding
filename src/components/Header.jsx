import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap } from "../styles/header.styed";

const Header = () => {
  return (
    <HeaderWrap>
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
            <div className="lnb_call">
            </div>
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
                <img src="/images/icon/fam.png" alt="패밀리아이콘" />
                팸</Link>
              </li>
              <li>
                <Link><img src="/images/icon/event.png" alt="패밀리아이콘" />이벤트</Link>
              </li>
              <li>
                <Link>
                <img src="/images/icon/po.png" alt="패밀리아이콘" />포션마켓</Link>
              </li>
              <li>
                <Link to="https://trees.gamemeca.com/"><img src="/images/kugmin.png" alt="패밀리아이콘" />국민트리</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
