import React from "react";
import { FooterWrap } from "../styles/footer.styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="f_inner">
        <div className="partner_list">
          <p>뉴스콘텐츠 공유 파트너사</p>
          <ul className="partner_top">
            <li>
              <Link to="#">
                <img src="/images/icon/naver_logo.png" alt="파트너이미지" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/icon/google.png" alt="파트너이미지" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/icon/daum.png" alt="파트너이미지" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/icon/zum.png" alt="파트너이미지" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/icon/imbc.png" alt="파트너이미지" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/icon/nate.png" alt="파트너이미지" />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="sns_list">
          <li>
            <Link to="#">
              <img src="/images/icon/youtube.png" alt="아이콘이미지" />
              <span>유튜브</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="/images/icon/tx.png" alt="아이콘이미지" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="/images/icon/facebook.png" alt="아이콘이미지" />
              <span>페이스북</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="/images/icon/naver.png" alt="아이콘이미지" />
              <span>네이버뉴스</span>
            </Link>
          </li>
        </ul>
        <div className="site_map">
          <ul className="site_map_list">
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
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">개인정보취급방침</Link>
            </li>
            <li>
              <Link to="#">독자권익보호</Link>
            </li>
            <li>
              <Link to="#">자율심의규정</Link>
            </li>
            <li>
              <Link to="#">고객센터</Link>
            </li>
            <li>
              <Link to="#">회원정보</Link>
            </li>
            <li>
              <Link to="#">기자소개</Link>
            </li>
          </ul>
          <ul className="site_info">
            <li>(주)제우미디어</li>
            <li>등록번호:서울아000666</li>
            <li>등록일자:2009.02.20</li>
            <li>제호:게임메카</li>
            <li>발행인:서인석</li>
            <li>편집인:남장우</li>
            <li>청소년보호책임자:류종화</li>
            <li>발생호:서울 마포구 독말고 76-1 한주빌딜 5층</li>
            <li>발행일자:2000,04.22</li>
            <li>전화번호:02-3142-6841</li>
          </ul>
          <div className="note">
            <p>
              『열린보도원칙』 당 매체는 독자와 취재원 등 뉴스 이용자의 권리
              보장을 위해 반론이나 정정보도, 추후보도를 요청할 수 있는 창구를
              열어두고 있음을 알려드립니다.
              <br />
              고충처리인 류종화 02-3142-6846 mecadesk@gamemeca.com
            </p>
          </div>
        </div>
        <div className="bis_site">
          <Link to="#">
          <img src="/images/icon/gamescom.png" alt="게임스컴" /></Link>
          <Link to="#">
          <img src="/images/icon/inernet.png" alt="게임스컴" /></Link>
        </div>
        <h1 className="f_logo">
          <Link to='#'><img src="/images/icon/f_logo.png" alt="푸터로고" /></Link>
        </h1>
      </div>
    </FooterWrap>
  );
};

export default Footer;
