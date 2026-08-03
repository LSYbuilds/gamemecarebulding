import styled from "@emotion/styled";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  .inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 80px;
    max-width: 1400px;
    width: 100%;
    .hero_section {
      width: 100%;
      height: 834px;
      gap: 16px;
      display: flex;
      flex-direction: column;
      .slide_area {
        display: flex;
        width: 100%;
        height: 500px;
        gap: 16px;
        .main_slide {
          flex: 810;
        }

        .top_contents {
          flex: 574;
          display: flex;
          flex-direction: column;
          gap: 16px;
          .contents_item {
            display: flex;
            width: 100%;
            height: 100%;
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
            overflow: hidden;
            .contents_title {
              flex: 338;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 8px 16px;
              font-size: 18px;
              gap: 16px;
              .time {
                font-size: 14px;
                text-align: right;
              }
            }
            .contents_img {
              flex: 236;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
          .contents_item:hover {
            background-color: var(--neutralWhite);
            transition-duration: 0.2s;
          }
        }
      }
      .news_area {
        display: flex;
        width: 100%;
        height: 318px;
        gap: 16px;
        /* 공통으로 들어가는 버튼/ 뉴스리스트 */
        .news_tab {
          display: flex;
          width: 100%;
          height: 48px;
          background-color: var(--neutralWhite);
          .tab_btns {
            height: 100%;
            button {
              border: none;
              background-color: var(--neutralWhite);
              color: var(--neutralBlack);
              font-weight: 700;
              font-size: 1.125em;
              width: 150px;
              height: 100%;
              text-align: center;
              cursor: pointer;
            }
            .active_btn {
              background-color: var(--primaryMain);
              color: var(--neutralWhite);
            }
          }
        }

        .news_box {
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
        }
        /* 공통으로 들어가는 버튼/ 뉴스리스트 */
        .news_list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          height: 270px;
          padding: 16px;
          li {
            width: 100%;
            height: 40px;
            a {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;
              width: 100%;
              height: 100%;
              p:nth-child(3) {
                margin-left: auto;
              }
            }
            a:hover {
              background-color: var(--neutralWhite);
            }
          }
        }
        /* 따로 */
        .news_l {
          flex: 810;
          border: 2px solid var(--neutralWhite);
        }
        .news_r {
          flex: 574;
          border: 2px solid var(--neutralWhite);
        }
      }
    }
    .thumb_seciton {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      /* 공통 스타일 */
      .thumb_box {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        height: 350px;
        border-radius: 16px;
        overflow: hidden;
        .cate_title {
          width: 100%;
          height: 47px;
          background-color: var(--neutralBlack);
          p {
            align-content: center;
            align-items: center;
            font-size: 1.125em;
            font-weight: 700;
            height: 100%;
            padding-left: 16px;
            color: var(--neutralWhite);
          }
        }
        .cate_list {
          width: 100%;
          height: 287px;
        }
      }
    }
    .board_section {
      display: flex;
      gap: 16px;
      /* 공통스타일 */
      .board_list {
        flex: 456;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 1px solid var(--primaryMain);
        border-radius: 8px;
        overflow: hidden;
        .board_title {
          padding: 0px 10px;
          width: 100%;
          height: 48px;
          background-color: var(--primaryMain);
          p {
            align-content: center;
            font-size: 1.125em;
            height: 100%;
            font-weight: 700;
            color: var(--neutralWhite);
          }
        }
        .list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          height: 335px;
          padding: 10px;
          li {
            border: 1px solid var(--neutralGray);
            height: 100%;
            border-radius: 8px;
            a {
              display: flex;
              gap: 10px;
              width: 100%;
              height: 100%;
              padding: 8px;
            }
            a:hover {
              background-color: var(--neutralWhite);
            }
            span {
              align-content: center;
            }
            .number {
              width: 25px;
              height: 25px;
              text-align: center;
              align-content: center;
              align-items: center;
              color: var(--neutralWhite);
              border-radius: 8px;
              background-color: var(--primaryMain);
            }
          }
        }
      }
    }
    .game_section {
      display: flex;
      background-color: var(--neutralBlack);
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      overflow: hidden;
      gap: 16px;
      /* 공통스타일 */
      .game_list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        overflow: hidden;
        .section_title {
          display: flex;
          justify-content: space-between;
          padding: 0px 10px;
          width: 100%;
          height: 48px;
          background-color: var(--primaryMain);
          p {
            align-content: center;
            font-size: 1.125em;
            height: 100%;
            font-weight: 700;
            color: var(--neutralWhite);
          }
        }
      }
      .game_small {
        flex: 810;
        border-left: 1px solid rgb(244, 244, 244, 0.1);
        .list_box {
          display: flex;
          flex-direction: column;
          gap: 16px;
          li {
            height: 165px;
            border-bottom: 1px solid rgb(244, 244, 244, 0.1);
            a {
              display: flex;
              padding: 8px;
              width: 100%;
              height: 100%;
              gap: 16px;
              .thumb_img {
                flex: 260;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
              .info_box {
                flex: 534;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .info {
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  .name {
                    font-size: 1.125em;
                    font-weight: 700;
                  }
                  .text {
                    font-size: 1em;
                    font-weight: 400;
                    line-height: 160%;
                  }
                }
                .tags {
                  display: flex;
                  gap: 10px;
                  span {
                    padding: 4px;
                    text-align: center;
                    align-content: center;
                    border-radius: 2px;
                    font-size: 0.875em;
                    color: var(--neutralBlack);
                    background-color: var(--neutralWhite);
                  }
                }
              }
            }
            a:hover {
              background-color: #272727;
              transition-duration: 0.3s;
            }
          }
        }
      }
      .game_large {
        flex: 574;
        .list_box {
          display: flex;
          flex-direction: column;
          gap: 16px;
          li {
            height: 527px;
            border-bottom: 1px solid rgb(244, 244, 244, 0.1);
            a {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
              gap: 16px;
              .thumb_large {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 346px;
                img {
                  height: 100%;
                  object-fit: contain;
                }
              }
              .info_box {
                height: 165px;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 10px;
                .info {
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  .name {
                    font-size: 1.125em;
                    font-weight: 700;
                  }
                  .text {
                    font-size: 1em;
                    font-weight: 400;
                    line-height: 160%;
                  }
                }
                .tags {
                  display: flex;
                  gap: 10px;
                  span {
                    padding: 4px;
                    text-align: center;
                    align-content: center;
                    border-radius: 2px;
                    font-size: 0.875em;
                    color: var(--neutralBlack);
                    background-color: var(--neutralWhite);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1400px) {
    .inner{
      padding: 0px 16px;
    }
  }
  @media (max-width: 1024px) {
    .inner {
      max-width: 736px;
      .hero_section {
        height: auto;
        .slide_area {
          flex-direction: column;
          height: auto;
          .main_slide {
            width: 100%;
            height: 500px;
            flex: none;
          }
        }
        .news_area {
          flex-direction: column;
          height: auto;
        }
      }
      .game_section {
        flex-direction: column;
        .game_small {
          flex: none;
          width: 100%;
        }
        .game_large {
          flex: none;
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 736px) {
    .inner {
      max-width: 328px;
      .hero_section {
        height: auto;
        .slide_area {
          flex-direction: column;
          height: auto;
          .main_slide {
            flex: none;
            width: 100%;
            height: 400px;
          }
          .top_contents {
            flex: none;
            .contents_item {
              flex-direction: column;
              gap: 16px;
              height: 268px;
              .contents_title {
                flex: none;
                height: 100px;
                order: 2;
              }
              .contents_img {
                flex: none;
                order: 1;
                height: 152px;
              }
            }
          }
        }
        .news_area {
          flex-direction: column;
          height: auto;
          .news_tab {
            .tab_btns {
              width: 100%;
              display: flex;
              button {
                width: 100%;
              }
            }
          }
          .news_list {
            height: auto;
            li {
              height: 113px;
              a {
                flex-direction: column;
                div {
                  width: 100%;
                }
              }
            }
          }
          .news_l {
            flex: none;
            height: 677px;
          }
          .news_r {
            flex: none;
            height: auto;
          }
        }
      }
      .game_section {
        flex-direction: column;
        .game_small {
          flex: none;
          width: 100%;
          .list_box {
            li {
              height: 265px;
              a {
                flex-direction: column;
                .thumb_img {
                  flex: none;
                  height: 165px;
                }
                .info_box {
                  height: 84px;
                  padding: 10px;
                  flex: none;
                  .info {
                    .text {
                      display: none;
                    }
                  }
                }
              }
            }
          }
        }
        .game_large {
          flex: none;
          width: 100%;
          li {
            a {
              .info_box {
                .info {
                  .text {
                    display: -webkit-box;
                    height: 80px;
                    overflow: hidden;
                    white-space: wrap;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3; /* 표시할 줄 수 */
                    -webkit-box-orient: vertical;
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
