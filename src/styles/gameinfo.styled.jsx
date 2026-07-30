import styled from "@emotion/styled";

export const GameinfoWrap = styled.div`
  .inner {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    .category_section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 16px;
      width: 100%;
      box-shadow: inset 0 0 0 1px var(--neutralGray);
      border-radius: 8px;
      /* 공통 */
      .cate_title {
        flex: 120;
        display: flex;
        gap: 8px;
        padding: 8px;
        height: 100%;
        align-items: center;
      }
      .cate_list {
        flex: 1232;
        width: 100%;
        display: grid;
        gap: 8px;
        height: 100%;
        grid-template-columns: repeat(7, 1fr);
        li {
          border-radius: 5px;
          box-shadow: inset 0 0 0 1px var(--neutralGray);
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          svg path {
            fill: var(--primaryMain);
          }
        }
        li:hover {
          background-color: var(--neutralWhite);
        }
      }
      .category {
        display: flex;
        gap: 8px;
        height: 42px;
      }
      .search_box {
        display: flex;
        .search_form {
          flex: 1154;
          display: flex;
          .search_box {
            display: flex;
            justify-content: space-between;
            position: relative;
            width: 30%;
            box-shadow: inset 0 0 0 1px var(--neutralGray);
            border-radius: 8px;
            overflow: hidden;
            padding: 4px 16px;
            input {
              width: 50%;
              background: none;
              border: none;
            }
            button {
              border: none;
              background: none;
            }
          }
        }
      }
    }
    .count_bar {
      width: 100%;
      height: 40px;
      border-bottom: 4px solid var(--neutralWhite);
      p {
        color: var(--neutralDeepGray);
      }
    }
    .pop_games{
      display: flex;
      flex-direction: column;
      gap: 16px;
      .pop_title{
        display: flex;
        gap: 16px;
        height: 45px;
        span{
          height: 100%;
          align-content: center;
          font-size: 1.5em;
          font-weight: 600;
        }
      }
      .pop_slide{
        height: 175px;
      }
    }
    .gamelist_section {
      display: flex;
      gap: 16px;
      justify-content: space-between;
      .side_cate {
        flex: 220;
        display: flex;
        flex-direction: column;
        

        .cate_title {
          height: 48px;
          padding: 0px 10px;
          align-content: center;
          background-color: var(--primaryMain);
          color: var(--neutralWhite);
          font-weight: 1.125em;
          font-weight: 600;
        }
        .side_cate_list {
          display: flex;
          flex-direction: column;
          box-shadow: inset 0 0 0 1px var(--primaryMain);
          li {
            display: flex;
            height: 42px;
            padding: 0px 16px;
            gap: 8px;
            align-items: center;
            svg {
              background-color: var(--seconGreen);
              border-radius: 4px;
            }
            svg path {
              fill: var(--neutralWhite);
            }
            cursor: pointer;
            button {
              border: none;
              background: none;
              margin-left: auto;
            }
          }
          li:hover {
            background-color: var(--seconGreen);
            color: var(--neutralWhite);
          }
        }
      }
      .gamelist_warp {
        flex: 1164;
        .gamelist {
          display: flex;
          flex-direction: column;
          gap: 16px;
          .game_item {
            display: flex;
            gap: 16px;
            height: 433px;
            .card_img {
              flex: 338;
              height: 100%;
              border-radius: 16px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              }
            }
            .text {
              flex: 456;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .head {
                .title {
                  padding: 8px 10px;
                  margin-bottom: 8px;
                  a {
                    font-size: 1.5em;
                    font-weight: 600;
                  }
                }
                .script {
                  padding: 0px 10px;
                  line-height: 160%;
                }
              }
              .info {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 8px;
                border-top: 1px solid var(--neutralGray);
                .tags {
                  display: flex;
                  gap: 10px;
                  height: 19px;
                  span {
                    display: block;
                    height: 100%;
                    background-color: var(--neutralGray);
                    padding: 0px 4px;
                    font-size: 0.825em;
                  }
                }
                p > span {
                  height: 100%;
                  margin-left: 4px;
                }
              }
            }
            .list_thumbnail {
              flex: 328;
              display: flex;
              flex-direction: column;
              gap: 16px;
              .b_thumb {
                width: 100%;
                height: 320px;
                border-radius: 16px;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: center;
                }
              }
              .s_thumb {
                display: flex;
                justify-content: space-between;
                gap: 8px;
                height: 113px;
                .img_item {
                  flex: 0 0 48%;
                  border-radius: 16px;
                  overflow: hidden;
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
