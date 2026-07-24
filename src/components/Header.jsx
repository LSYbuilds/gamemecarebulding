import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap } from "../styles/header.styed";

const Header = () => {
  return (
    <HeaderWrap>
      <div className="h_inner">
        <div className="top_h">
          <h1 className="logo">
            <Link to="/"></Link>
          </h1>
          <form className="search_box">
            <input type="text" />
            <button type="submit" className="search_submit"></button>
          </form>
          <div className="util">
            <div className="login">
              <Link to="#"><p>로그인</p>
              </Link>
            </div>
            <div className="joinus">
              <Link to="#"><p>회원가입</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom_h">
          <div className="gnb_box">
            <button className="lnb_call">

            </button>
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
                <Link>팸</Link>
              </li>
              <li>
                <Link>이벤트</Link>
              </li>
              <li>
                <Link>포션마켓</Link>
              </li>
              <li>
                <Link>국민트리</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
