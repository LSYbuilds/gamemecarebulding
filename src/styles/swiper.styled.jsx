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
    background-color: red;
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
