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
  background-color: ${(props) =>
    props.scrolled ? "rgb(244, 244, 244,0.9);" : "#f4f4f4"};
  /* background-color: rgb(244, 244, 244,0.5); */
  .header_top {
    display: flex;
    justify-content: center;
    width: 100%;
          height: ${(props) =>
    props.scrolled ? "65px" : "74px"};
    transition-duration: 0.2s;
    .top_i {
      display: flex;
      justify-content: space-between;
      max-width: 1400px;
      width: 100%;
      height: 100%;
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
              height: ${(props) =>
    props.scrolled ? "35px" : "55px"};
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
            font-size: 1.125em;
            height: 100%;
            li {
              position: relative;
              height: 100%;
              padding: 0px 16px;
              a {
                align-content: center;
                display: block;
                height: 100%;
                font-size: 1.125em;
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
      height: ${(props) =>
    props.scrolled ? "32px" : "48px"};
      background-color: var(--neutralWhite);
      transition-duration: 0.2s;
      .lnb_menu {
        display: flex;
        margin: 0 auto;
        max-width: 1400px;
        gap: 24px;
        font-size: 1.125em;
        height: 100%;
        li {
          position: relative;
          height: 100%;
          a {
            align-content: center;
            display: block;
            height: 100%;
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
      strong {
        display: block;
        width: 100%;
        height: 27px;
        text-align: center;
        margin-bottom: 10px;
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
`;
