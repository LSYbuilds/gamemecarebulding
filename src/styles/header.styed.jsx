import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 137px;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  background-color: #f4f4f4;
  .header_top {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 74px;

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
            background-image: url(/images/search.png);
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
    justify-content: center;
    width: 100%;
    height: 55px;
    background-color: #fff;
    border: 1px solid #dedede;
    .bottom_i {
      display: flex;
      justify-content: space-between;
      max-width: 1400px;
      width: 100%;
      height: 100%;
      .gnb_box{
        height: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        .lnb_call{
          width: 25px;
          height: 25px;
          background-image: url(/images/hambarger.png);
          background-position: center;
          background-repeat: no-repeat;
          border: none;
        }
        .gnb{
          display: flex;
          font-size: 1.125em;
          height: 100%;
          li{
            position: relative;
            height: 100%;
            padding: 0px 16px;
            a{
              align-content: center;
              display: block;
              height: 100%;
            }
          }
          li:hover::after{
            content: '';
            position: absolute;
            bottom: 0px;
            left:0px;
            width: 100%;
            height: 5px;
            background-color: var(--seconGreen);
          }
        }
      }
      .fam_site_box{
        height: 100%;
        .fam_list{
          display: flex;
          align-items: center;
          gap: 10px;
          height: 100%;
          a{
            display: flex;
            gap: 4px;
            align-items: center;
            height: 100%;
            font-size: 14px;
            img{
              height: 16px;
            }
          }
        }
      }
    }
  }
`;
