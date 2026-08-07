import styled from "@emotion/styled";

export const NewsWrap = styled.div`
  .inner {
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
  }

  @media (max-width: 1400px) {
    .inner {
      padding: 0px 16px;
    }
  }
  @media (max-width: 1024px) {
    .inner {
      max-width: 736px;
    }
  }
  @media (max-width: 736px) {
    .inner {
      min-width: 328px;
      max-width: 736px;
    }
  }
`;

export const NewsAllWarp = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  .top_title {
    display: flex;
    gap: 16px;
    width: 100%;
    height: 45px;
    span {
      align-content: center;
      height: 100%;
      font-size: 1.5em;
      font-weight: 700;
    }
  }
  .topnews {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    .top_title {
      height: 45px;
    }
    .topnews_slide {
      width: 100%;
      height: 450px;
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
  .news_list_section {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    .new_slice {
      flex: 1046;
      display: flex;
      flex-direction: column;
    }
    .asiad_box {
      flex: 338;
      display: flex;
      flex-direction: column;
    }
    .news_list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      li {
        height: 200px;
        a {
          display: flex;
          gap: 16px;
          width: 100%;
          height: 100%;
          .thumb_img {
            position: relative;
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
            .tag {
              position: absolute;
              bottom: 0px;
              right: 0px;
              padding: 8px;
              background-color: var(--seconGreen);
              color: var(--neutralWhite);
              font-size: 0.875em;
            }
          }
          .news_thumb_info {
            flex: 692;
            display: flex;
            flex-direction: column;
            gap: 16px;
            .info_tag {
              display: flex;
              gap: 16px;
              height: 25px;
              span {
                display: block;
                height: 100%;
                align-content: center;
                text-align: center;
                padding: 0px 16px;
                border: 4px;
                font-size: 0.875em;
                background-color: var(--neutralGray);
              }
            }
            .text_box {
              display: flex;
              flex-direction: column;
              gap: 16px;
              .title {
                font-size: 1.125em;
                font-weight: 600;
              }
              .text {
                line-height: 160%;
              }
            }
            .nametime {
              margin-top: auto;
              span:nth-child(3) {
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .news_list_section {
      flex-direction: column;
      .new_slice {
        flex: none;
      }
      .aside_box {
        flex: none;
      }
      .news_list li a .news_thumb_info .text_box .text {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
  @media (max-width: 736px) {
    .topnews {
      .topnews_slide {
        height: 400px;
        border-radius: 16px;
        overflow: hidden;
      }
    }
    .news_list_section {
      flex-direction: column;
      .new_slice {
        flex: none;
      }
      .aside_box {
        flex: none;
      }
      .news_list li {
        height: 392px;
      }
      .news_list li a {
        flex-direction: column;
        .thumb_img {
          flex: none;
          height: 188px;
        }
        .news_thumb_info {
          flex: none;
          height: 188px;
        }
      }
      .news_list li a .news_thumb_info .text_box .text {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
`;
