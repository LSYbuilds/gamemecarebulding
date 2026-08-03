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
      gap: 16px;
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
    .sns_list {
      display: flex;
      gap: 16px;
      li {
        height: 60px;
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
    .site_map {
      display: flex;
      flex-direction: column;
      gap: 16px;
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
      .site_info {
        display: grid;
        grid-template-columns: repeat(5, auto);
        justify-content: start;
        gap: 8px 24px; /* 행 간격, 열 간격 */
        font-size: 0.875em;
      }
      .note {
        line-height: 160%;
        font-size: 0.775em;
      }
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
    .f_inner{
      padding: 0px 16px;
    }
  }
  @media (max-width: 1024px) {
    .f_inner {
      max-width: 736px;
      .site_map {
        .site_map_list {
          flex-wrap: wrap;
          gap: 16px;
        }
        .site_info {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
  @media (max-width: 736px) {
    .f_inner {
      max-width: 328px;
      height: auto;
      .partner_list {
        height: auto;
        p {
          text-align: center;
        }
        .partner_top {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          height: auto;
          li {
            display: flex;
            justify-content: center;
          }
        }
      }
      .sns_list {
        justify-content: space-between;
        li {
          a {
            span {
              display: none;
            }
          }
        }
      }
      .site_map {
        .site_map_list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0px;
          li {
            padding: 0;
            a {
              display: block;
              text-align: center;
              padding: 0;
            }
          }
        }
        .site_info {
          grid-template-columns: repeat(1, 1fr);
          gap: 2px;
          li {
            text-align: center;
          }
        }
        .note {
          text-align: center;
        }
      }
      .bis_site {
        display: flex;
        justify-content: center;
      }
      .f_logo {
        text-align: center;
      }
    }
  }
`;
