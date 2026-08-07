import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  padding: 26px 0px;
  font-family: "sans-serif";
  background-color: var(--neutralWhite);
  .f_inner {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    gap: 16px;
    .partner_list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .partner_top {
        display: flex;
        gap: 16px;
        height: 32px;
        li > a {
          display: block;
          width: fit-content;
          height: 100%;
          img {
            height: 16px;
          }
        }
      }
    }
    .sns_box {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .sns_list {
        display: flex;
        gap: 16px;
        li {
          height: 24px;
        }
        li > a {
          display: flex;
          align-items: center;
          height: 100%;
          gap: 10px;
          img {
            height: 26px;
          }
        }
      }
    }
    .site_map_list {
      display: flex;
      gap: 16px;
      li > a {
        font-weight: 400;
        font-size: 1em;
      }
      li:nth-child(4) > a {
        color: blue;
      }
    }
    .note {
      line-height: 160%;
      font-size: 0.775em;
    }
    .site_info {
      display: grid;
      grid-template-columns: repeat(5, auto);
      justify-content: start;
      gap: 8px 16px; /* 행 간격, 열 간격 */
      font-size: 0.875em;
    }
    .site_map {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .bis_site {
      display: flex;
      gap: 16px;
      height: 62px;
      a {
        display: block;
        width: fit-content;
        align-items: center;
        height: 100%;
        img {
          height: 30px;
        }
      }
    }
    .f_logo {
      a {
        img {
          height: 36px;
        }
      }
    }
  }
  @media (max-width: 1400px) {
    .f_inner {
      padding: 0px 16px;
    }
  }
  @media (max-width: 1024px) {
    .f_inner {
      max-width: 736px;
      .site_map_list {
        flex-wrap: wrap;
        gap: 16px;
      }
      .site_info {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  @media (max-width: 736px) {
    .f_inner {
      margin: 0 auto;
      min-width: 328px;
      max-width: 736px;
      height: auto;
      .partner_list {
        .partner_top {
          display: flex;
          flex-wrap: wrap;
          height: auto;
        }
      }
      .sns_box {
        .sns_list {
          li {
            height: auto;
          }
          li > a > span {
            display: none;
          }
        }
      }
      .site_map_list {
        gap: 8px;
        li {
          padding: 0;
          a {
            display: block;
            text-align: center;
            padding: 0;
          }
        }
      }
      .f_logo {
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
        }
      }
    }
  }
`;
