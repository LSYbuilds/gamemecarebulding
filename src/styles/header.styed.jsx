import styled from "@emotion/styled";

// const pathChangeHeader = ({ path }) => (path === "/news" ? "height:187px" : "height:137px");
// const scrollChangeHeader = (props) =>
//   props.scrolled ? "background-color:rgb(244, 244, 244,0.9);" : "background-color:#f4f4f4";

// const bothChangeHeader = ({path}) => (path === "/news" ? `height:187px (scrollChangeHeader)`: "height:137px");

export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  width: 100%;
  transition-duration: 0.3s;
  ${({ path }) => (path === "/news" ? "height:187px" : "height:137px")}
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  font-family: "sans-serif";
  background-color: ${(props) =>
    props.scrolled ? "rgb(244, 244, 244,0.9);" : "#f4f4f4"};
  /* background-color: rgb(244, 244, 244,0.5); */
  .header_top {
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${(props) => (props.scrolled ? "65px" : "74px")};
    transition-duration: 0.2s;
    .top_i {
      display: flex;
      justify-content: space-between;
      max-width: 1400px;
      width: 100%;
      height: 100%;
      .mobile_call_btn {
        display: none;
      }
      .site_head_title {
        display: flex;
        align-items: center;
        gap: 16px;
        height: 100%;
        .logo {
          width: fit-content;
          height: 100%;
          .logo_link {
            display: block;
            height: 100%;
            padding-top: 8px;
            img {
              height: 36px;
            }
          }
        }
        .search_box {
          position: relative;
          max-width: 574px;
          width: 574px;
          height: 48px;
          input {
            width: 100%;
            height: 100%;
            border-radius: 100px;
            border: 1px solid #dedede;
            background-color: #fff;
            padding: 0px 16px;
          }
          .search_submit {
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translate(0%, -50%);
            z-index: 0;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background-color: #818cf8;
            background-image: url(/images/icon/search.png);
            background-repeat: no-repeat;
            background-position: center;
            border: none;
            cursor: pointer;
          }
        }
      }
      .util {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 16px;
        align-items: center;
        height: 100%;
        img {
          height: 25px;
        }
        a {
          display: flex;
          gap: 4px;
        }
      }
      .respon_util {
        display: none;
        align-content: center;
        height: 100%;
        .util_icon {
          text-align: center;
          align-content: center;
          width: 48px;
          height: 48px;
          background-color: var(--primaryReG);
          border-radius: 100%;
          a > svg {
            width: 50%;
            height: 50%;
          }
        }
      }
    }
  }
  .header_bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #fff;
    border: 1px solid #dedede;
    .bottom_i {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1400px;
      width: 100%;
    }
    .gnb {
      .gnb_box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: ${(props) => (props.scrolled ? "35px" : "55px")};
        transition-duration: 0.2s;
        .gnb_list {
          height: 100%;
          display: flex;
          gap: 10px;
          align-items: center;
          .lnb_call {
            width: 25px;
            height: 25px;
            background-image: ${(props) =>
              props.lnbcall
                ? "url(/images/icon/x.png)"
                : "url(/images/icon/hambarger.png)"};
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
          }
          .gnb_menu {
            display: flex;
            font-size: 1em;
            height: 100%;
            li {
              position: relative;
              height: 100%;
              padding: 0px 16px;
              a {
                align-content: center;
                display: block;
                height: 100%;
                font-size: 1em;
                font-weight: 400;
              }
            }
            li:hover::after {
              content: "";
              position: absolute;
              bottom: 0px;
              left: 0px;
              width: 100%;
              height: 5px;
              background-color: var(--seconGreen);
            }
          }
        }
        .fam_site_box {
          height: 100%;
          .fam_list {
            display: flex;
            align-items: center;
            gap: 10px;
            height: 100%;
            a {
              display: flex;
              gap: 4px;
              align-items: center;
              height: 100%;
              font-size: 14px;
              img {
                height: 16px;
              }
            }
          }
        }
      }
    }
    .lnb {
      width: 100%;
      height: ${(props) => (props.scrolled ? "32px" : "48px")};
      background-color: var(--neutralWhite);
      transition-duration: 0.2s;
      .lnb_menu {
        display: flex;
        margin: 0 auto;
        max-width: 1400px;
        gap: 24px;
        font-size: 1em;
        height: 100%;
        li {
          position: relative;
          height: 100%;
          a {
            align-content: center;
            display: block;
            height: 100%;
            font-weight: 300;
          }
        }
        li:hover::after {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 5px;
          background-color: var(--seconGreen);
        }
      }
    }
  }
  .global_box {
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.9);
    border: 1px solid var(--neutralGray);
    padding: 8px 16px;
    .global_close_btn {
      display: none;
      border: none;
      background: none;
    }
    .global_inner {
      margin: 0 auto;
      max-width: 1400px;
      width: 100%;
    }
    .global_menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 10px;
      gap: 10px;
      li {
        width: 100%;
      }
      p {
        display: block;
        width: 100%;
        height: 27px;
        text-align: center;
        margin-bottom: 10px;
        font-weight: 600;
      }
      .global_in {
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
          width: 100%;
          border-radius: 4px;
          a {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 6px 0px;
          }
          a:hover {
            color: var(--primaryBold);
          }
        }
      }
    }
  }
  .mobile_nav {
    display: none;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 100%;
    height: auto;
  }
  @media (max-width: 1024px) {
    /* height: ${({ path }) => (path === "/news" ? "187px" : "137px")}; */
    .header_top .top_i {
      max-width: 736px;
      .site_head_title {
        width: 100%;
      }
      .site_head_title > .search_box {
        width: 60%;
      }
      .util {
        display: none;
      }
      .respon_util {
        display: block;
      }
    }
    .header_bottom {
      height: 96px;
    }
    .header_bottom .bottom_i {
      max-width: 736px;
    }
    .header_bottom .gnb_box {
      height: ${(props) => (props.scrolled ? "35px" : "55px")};
      flex-direction: column;
      gap: 16px;
      .gnb_menu {
        justify-content: space-between;
        width: 100%;
      }
      .fam_site_box {
        .fam_list {
          justify-content: flex-end;
        }
      }
    }
    .global_box {
      top: 82px;
      left: 0px;
      width: 100%;
      height: 80vh;
      padding-top: 16px;
      overflow-y: scroll;
      background-color: var(--neutralWhite);
      .global_close_btn {
        display: block;
        border: none;
        background: none;
      }
      .global_inner {
        max-width: 736px;
        width: 100%;
        .global_menu {
          flex-direction: column;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
              display: block;
              width: 100%;
              height: 100%;
              text-align: left;
            }
            .global_in {
              width: 100%;
              height: 100%;
              flex-wrap: wrap;
              flex-direction: row;
              gap: 16px;
              li {
                flex: 0 0 auto;
                width: auto;
                height: 100%;
                a {
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 736px) {
    height: 156px;
    .header_top {
      height: 124px;
      .top_i {
        position: relative;
        max-width: 328px;
        height: 100%;
        .mobile_call_btn {
          position: absolute;
          display: block;
          right: 0px;
          top: 15%;
          width: 25px;
          height: 25px;
          border: none;
          background: none;
          align-items: center;
          align-content: center;
        }
      }
      .top_i > .site_head_title {
        flex-direction: column;
        width: 100%;
        height: 100%;
        .logo {
          .logo_link {
            padding: 0px;
            img {
              height: 25px;
            }
          }
        }
        .search_box {
          width: 100%;
          height: 100%;
        }
      }
      .top_i > .respon_util {
        display: none;
      }
    }
    .header_bottom {
      display: none;
    }
    .mobile_nav {
      display: block;
      position: absolute;
      overflow-y: scroll;
      right: 0px;
      top: 0px;
      width: 80%;
      height: 100vh;
      background-color: #fff;
    }
  }
`;
