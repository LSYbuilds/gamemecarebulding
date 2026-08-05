import styled from "@emotion/styled";

// const pathChangeHeader = ({ path }) => (path === "/news" ? "height:187px" : "height:137px");
// const scrollChangeHeader = (props) =>
//   props.scrolled ? "background-color:rgb(244, 244, 244,0.9);" : "background-color:#f4f4f4";

// const bothChangeHeader = ({path}) => (path === "/news" ? `height:187px (scrollChangeHeader)`: "height:137px");

const PUBLIC_URL = process.env.PUBLIC_URL;

export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  transition-duration: 0.3s;
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
            background-image: url(${PUBLIC_URL}/images/icon/search.png);
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
        height: auto;
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
                ? `url(${process.env.PUBLIC_URL}/images/icon/x.png)`
                : `url(${process.env.PUBLIC_URL}/images/icon/hambarger.png)`};
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
              padding: 16px;
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
              padding: 8px 0px;
              img {
                height: 16px;
              }
            }
          }
        }
      }
    }
    .lnb {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: var(--neutralWhite);
      transition-duration: 0.2s;
      .site_lnb {
        margin: 0 auto;
        max-width: 1400px;
        width: 100%;
        .lnb_menu {
          display: flex;
          gap: 24px;
          height: 48px;
          font-size: 1em;
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
      .fam_box {
        width: 100%;
        .fam_i {
          margin: 0 auto;
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
      .global_nav_list {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .list_head {
        display: flex;
        height: 27px;
        margin-bottom: 10px;
        p {
          width: 100%;
          text-align: center;
          font-weight: 600;
          svg {
            display: none;
          }
        }
      }
      .global_in {
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
          width: 100%;
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
  @media (max-width: 1400px) {
    .header_top .top_i {
      padding: 0px 16px;
    }
    .header_bottom .bottom_i {
      padding: 0px 16px;
    }
    .header_bottom > .lnb .lnb_menu {
      padding: 0px 16px;
    }
    .global_box {
      .global_close_btn {
        display: none;
        border: none;
        background: none;
      }
      .global_inner {
        margin: 0 auto;
        max-width: 1400px;
        padding: 0px 16px;
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
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
      height: auto;
    }
    .header_bottom .bottom_i {
      max-width: 736px;
    }
    .header_bottom .gnb_box {
      flex-direction: column;
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
    .header_bottom .lnb .site_lnb {
      margin: 0 auto;
      max-width: 736px;
    }
    .header_bottom .lnb .fam_box {
      height: 38px;
    }
    .global_box {
      top: 82px;
      left: 0px;
      width: 100%;
      height: auto;
      padding-top: 16px;
      overflow-y: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
      background-color: rgb(255, 255, 255, 0.9);
      .global_close_btn {
        display: block;
        border: none;
        background: none;
        cursor: pointer;
      }
      .global_inner {
        max-width: 736px;
        width: 100%;
        .global_menu {
          flex-direction: column;
          .global_nav_list {
            .list_head {
              width: 100%;
              cursor: pointer;
              &:hover {
                color: var(--primaryBold);
              }
              p {
                display: flex;
                gap: 8px;
                svg {
                  display: inline-block;
                }
              }
            }
            .global_in {
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;

              /* &.active {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
              } */
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
        width: 100%;
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
          cursor: pointer;
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
      display: flex;
      flex-direction: column;
      position: absolute;
      overflow-y: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
      z-index: 900;
      right: 0px;
      top: 0px;
      width: 80%;
      height: 100vh;
      background-color: #fff;
      padding: 16px;
      border-left: 2px solid var(--neutralGray);
      .close_nav_btn {
        width: fit-content;
        border: none;
        background: none;
        margin-left: auto;
        cursor: pointer;
      }
      .mobile_util {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80px;
        margin-bottom: 16px;
        border-bottom: 1px solid gray;
        li {
          height: 35px;
          a {
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;
            span {
              display: block;
              align-content: center;
              height: 100%;
            }
            img {
              height: 25px;
            }
          }
          &:hover {
            background-color: var(--neutralWhite);
          }
        }
      }
      .mobile_nav_box {
        display: flex;
        flex-direction: column;
        height: 100%;
        .mobile_nav_list {
          display: flex;
          flex-direction: column;
          .list_head {
            display: flex;
            padding: 16px 8px;
            box-shadow: 0px 1px 0px var(--neutralGray);
            cursor: pointer;

            p {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              gap: 8px;
            }
            &:hover {
              background-color: var(--neutralWhite);
            }
          }
          .mobile_nav_list_in {
            flex-direction: column;
            gap: 8px;
            /* background-color: var(--neutralGray); */
            &.active {
              display: flex;
            }
            li {
              padding: 8px 0px;
              padding-right: 12%;
              text-align: right;
              align-content: center;
              &:hover {
                background-color: var(--neutralGray);
              }
              a {
                align-items: center;
                font-size: 0.875em;
              }
            }
          }
        }
        .mobile_fam_list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
          margin-top: 8px;
          gap: 8px;
          padding: 0px 8px;
          width: 100%;
          height: auto;
          li {
            a {
              display: flex;
              align-items: center;
              gap: 4px;
              p {
                height: 100%;
              }
              img {
                height: 16px;
              }
            }
          }
        }
      }
    }
    .screen_black {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vh;
      height: 100vh;
      background-color: rgb(0, 0, 0, 0.5);
    }
  }
`;

export const FamMobulsStyle = styled.div`
  .fam_list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    height: 100%;
    a {
      display: flex;
      gap: 4px;
      align-items: center;
      height: 100%;
      font-size: 14px;
      padding: 8px 0px;
      img {
        height: 16px;
      }
    }
  }
`;
