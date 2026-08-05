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
    .pop_games {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .pop_title {
        display: flex;
        gap: 16px;
        height: 45px;
        span {
          height: 100%;
          align-content: center;
          font-size: 1.5em;
          font-weight: 600;
        }
      }
      .pop_slide {
        height: 175px;
        overflow: hidden;
      }
    }
    .gamelist_section {
      display: flex;
      gap: 16px;
      justify-content: space-between;
      .side_call_btn_box {
        display: none;
        width: 100%;
        height: 50px;
        padding: 8px 0px;
        align-content: center;
        .side_call_btn {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
          width: 121px;
          height: 34px;
          border: none;
          background: var(--seconGreen);
          border-radius: 5px;
          font-size: 1.125em;
          color: var(--neutralWhite);
          cursor: pointer;
        }
      }
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
            flex-direction: column;
            .tags_name {
              display: flex;
              justify-content: space-between;
              height: 42px;
              padding: 0px 8px;
              cursor: pointer;
              p {
                display: flex;
                gap: 4px;
                height: auto;
                align-content: center;
                align-items: center;
                span {
                  height: 100%;
                  align-content: center;
                }
                svg {
                  background-color: var(--primaryMain);
                  border-radius: 4px;
                }
                svg path {
                  fill: var(--neutralWhite);
                }
              }
              .drop {
                border: none;
                background: none;
              }
            }
            .detail_tags {
              display: flex;
              flex-direction: column;
              li {
                height: 42px;
                padding: 0px 8px;
                cursor: pointer;
                span {
                  height: 100%;
                  align-content: center;
                }
              }
              li:hover {
                background-color: var(--seconGreen);
                color: var(--neutralWhite);
              }
            }
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
              width: 338px;
              /* flex: 338;  */
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
              .mobile_thumb {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1400px) {
    .inner {
      padding: 0px 16px;
    }
  }
  @media (max-width: 1024px) {
    .inner {
      max-width: 736px;
      .category_section {
        .cate_title {
          flex: none;
        }
        .cate_list {
          flex: none;
          height: 42px;
        }
        .category {
          flex-direction: column;
          height: auto;
        }
        .search_box {
          .search_form {
            width: 100%;
            .search_box {
              width: 100%;
            }
          }
        }
      }
      .gamelist_section {
        flex-direction: column;
        .side_call_btn_box {
          display: block;
          width: 100%;
          height: 50px;
          padding: 8px 0px;
          align-content: center;
          .side_call_btn {
            width: 121px;
            height: 34px;
          }
        }
        .side_cate {
          flex: none;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px var(--primaryMain);
          .side_cate_list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            box-shadow: none;
            li {
              .detail_tags {
                width: 100%;
              }
            }
          }
        }
        .gamelist_warp {
          flex: none;
          width: 100%;
          .gamelist {
            gap: 32px;
            .game_item {
              display: grid;
              gap: 16px;
              height: auto;
              border-bottom: 1px solid var(--neutralGray);
              padding-bottom: 16px;
              grid-template-columns: repeat(2, 2fr);
              grid-template-rows: 1fr auto;
              .card_img {
                height: 443px;
              }
              .text {
                height: 443px;
              }
              .list_thumbnail {
                grid-column: 1 / 3;
                flex-direction: row;
                height: 125px;
                .b_thumb {
                  display: none;
                }
                .s_thumb {
                  display: none;
                }
                .mobile_thumb {
                  display: flex;
                  grid-template-columns: repeat(3, 1fr);
                  width: 100%;
                  height: 100%;
                  gap: 16px;
                  li {
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    overflow: hidden;
                    border-radius: 16px;
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
  }
  @media (max-width: 736px) {
    .inner {
      min-width: 328px;
      max-width: 736px;
      .category_section {
        gap: 16px;
        .cate_title {
          flex: none;
        }
        .cate_list {
          flex: none;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          height: auto;
          li {
            height: 42px;
            gap: 0px;
            svg {
              height: 16px;
            }
          }
        }
        .category {
          flex-direction: column;
          height: auto;
        }
        .search_box {
          .cate_title {
            display: none;
          }
          .search_form {
            width: 100%;
            height: 48px;
            .search_box {
              width: 100%;
            }
          }
        }
      }
      .pop_games {
        .pop_slide {
          height: 48vw;
          /* overflow: hidden; */
        }
      }
      .gamelist_section {
        flex-direction: column;
        .side_call_btn_box {
          display: block;
          width: 100%;
          height: 50px;
          padding: 8px 0px;
          align-content: center;
          .side_call_btn {
            width: 121px;
            height: 34px;
          }
        }
        .side_cate {
          position: fixed;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 60vh;
          /* overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none; */
          background-color: rgba(25, 25, 25, 0.8);
          display: flex;
          flex-direction: column;
          box-shadow: none;
          border-top: 1px solid gray;
          .cate_title {
            width: 100%;
            width: 100%;
            height: 48px;
            padding: 0px 10px;
            align-content: center;
            background-color: var(--primaryMain);
            color: var(--neutralWhite);
            font-weight: 1.125em;
            font-weight: 600;
          }
          .side_cate_list {
            width: 100%;
            overflow-y: scroll;
            scrollbar-width: none;
            -ms-overflow-style: none;
            display: flex;
            flex-direction: column;
            background-color: var(--neutralWhite);
            box-shadow: inset 0 0 0 1px var(--primaryMain);
            li {
              display: flex;
              flex-direction: column;
              .tags_name {
                display: flex;
                justify-content: space-between;
                height: 42px;
                padding: 0px 8px;
                cursor: pointer;
                p {
                  display: flex;
                  gap: 4px;
                  height: auto;
                  align-content: center;
                  align-items: center;
                  span {
                    height: 100%;
                    align-content: center;
                  }
                  svg {
                    background-color: var(--primaryMain);
                    border-radius: 4px;
                  }
                  svg path {
                    fill: var(--neutralWhite);
                  }
                }
                .drop {
                  border: none;
                  background: none;
                }
              }
              .detail_tags {
                display: flex;
                flex-direction: column;
                li {
                  height: 42px;
                  padding: 0px 8px;
                  cursor: pointer;
                  span {
                    height: 100%;
                    align-content: center;
                  }
                }
                li:hover {
                  background-color: var(--seconGreen);
                  color: var(--neutralWhite);
                }
              }
            }
          }
        }
        /* .side_cate {
          flex: none;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          .side_cate_list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            li {
              .detail_tags {
                width: 100%;
              }
            }
          }
        } */
        .gamelist_warp {
          flex: none;
          width: 100%;
          .gamelist {
            gap: 16px;
            .game_item {
              display: flex;
              flex-direction: column;
              gap: 16px;
              height: auto;
              .card_img {
                width: 100%;
                flex: none;
                height: fit-content;
                img {
                  width: 100%;
                  object-fit: cover;
                }
              }
              .text {
                flex: none;
                height: auto;
                /* height: 206px; */
                .head {
                  height: auto;
                  .title {
                    margin-bottom: 0px;
                    a {
                      font-size: 1.25em;
                    }
                  }
                  .script {
                    display: none;
                  }
                }
                .info {
                  border: none;
                  .tags {
                    span {
                      font-size: 0.8em;
                    }
                  }
                }
              }
              .list_thumbnail {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;
