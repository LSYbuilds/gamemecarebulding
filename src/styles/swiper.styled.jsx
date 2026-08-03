import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
export const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    color: #fff;
    width: auto;
    height: 100%;
    div {
      width: 100%;
      .slide_item_box {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        .imgbox {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .slide_title {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 0px;
          left: 0px;
          padding: 8px 16px;
          height: 66px;
          width: 100%;
          background-color: var(--neutralBlack);
          p {
            font-size: 1.25em;
            font-weight: 700;
            color: var(--neutralWhite);
          }
        }
      }
    }
    /* div {
      position: relative;
      width: 100%;
      height: 100%;
      .imgbox {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
        }
      }
     
    } */
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #000;
  }
`;

export const ThumbSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    color: #fff;
    height: 100%;
    div {
      width: 100%;
      height: 100%;
      .cate_item {
        position: relative;
        width: 100%;
        height: 100%;
        .cate_img {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .cate_text {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 75px;
          background-color: rgb(25, 25, 25, 0.5);
          padding: 12px;
          p {
            color: var(--neutralWhite);
            font-size: 1.125em;
            font-weight: 600;
          }
        }
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: 40%;
    left: 3%;
    transform: translate(-50%, 0%);
    width: 50px;
    height: 50px;
    border-radius: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    background-image: url(/images/icon/chevron-left.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
    svg {
      display: none;
    }
  }
  .swiper-button-prev:hover {
    background-color: #fff;
    transition-duration: 0.2s;
  }
  .swiper-button-next {
    position: absolute;
    top: 40%;
    right: 0%;
    transform: translate(-50%, 0%);
    width: 50px;
    height: 50px;
    border-radius: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    background-image: url(/images/icon/chevron-right.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
    svg {
      display: none;
    }
  }
  .swiper-button-next:hover {
    background-color: #fff;
    transition-duration: 0.2s;
  }
`;

export const TopnewsSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    color: #fff;
    height: 100%;
    div {
      width: 100%;
      height: 100%;

      .topitem {
        width: 100%;
        height: 100%;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        overflow: hidden;
      }
      .topitem > a {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        .item_img {
          width: 100%;
          height: 300px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
        .text_box {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 150px;
          color: var(--neutralWhite);
          background-color: var(--neutralBlack);
          .type {
            align-content: center;
            text-align: end;
            padding-right: 16px;
            height: 30px;
            background-color: var(--primaryMain);
          }
          .text {
            height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 16px;
            span {
              display: block;
            }
            span:nth-child(1) {
              font-size: 1.25em;
            }
            span:nth-child(2) {
              text-align: end;
            }
          }
        }
      }
      .topitem > a:hover {
        img {
          width: 101%;
          height: 101%;
          object-fit: cover;
          object-position: center;
          transition-duration: 0.3s;
        }
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: 40%;
    left: 3%;
    transform: translate(-50%, 0%);
    width: 50px;
    height: 50px;
    border-radius: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    background-image: url(/images/icon/chevron-left.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
    svg {
      display: none;
    }
  }
  .swiper-button-prev:hover {
    background-color: #fff;
    transition-duration: 0.2s;
  }
  .swiper-button-next {
    position: absolute;
    top: 40%;
    right: 0%;
    transform: translate(-50%, 0%);
    width: 50px;
    height: 50px;
    border-radius: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    background-image: url(/images/icon/chevron-right.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
    svg {
      display: none;
    }
  }
  .swiper-button-next:hover {
    background-color: #fff;
    transition-duration: 0.2s;
  }
`;

export const TopGameSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    color: #fff;
    height: 100%;
    div {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      overflow: hidden;
      .top_item_box {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        .imgbox {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
        .slide_title {
          position: absolute;
          bottom: 0px;
          left: 0px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          justify-content: space-between;
          width: 100%;
          height: auto;
          background-color: rgb(25, 25, 25, 0.5);
          padding: 8px 16px;
          color: var(--neutralWhite);
          p:nth-child(2) {
            display: flex;
            gap: 8px;
            font-size: 0.825em;
            text-align: end;
          }
        }
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: 40%;
    left: 3%;
    transform: translate(-50%, 0%);
    width: 50px;
    height: 50px;
    border-radius: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    background-image: url(/images/icon/chevron-left.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
    svg {
      display: none;
    }
  }
  .swiper-button-prev:hover {
    background-color: #fff;
    transition-duration: 0.2s;
  }
  .swiper-button-next {
    position: absolute;
    top: 40%;
    right: 0%;
    transform: translate(-50%, 0%);
    width: 50px;
    height: 50px;
    border-radius: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    background-image: url(/images/icon/chevron-right.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
    svg {
      display: none;
    }
  }
  .swiper-button-next:hover {
    background-color: #fff;
    transition-duration: 0.2s;
  }
`;
