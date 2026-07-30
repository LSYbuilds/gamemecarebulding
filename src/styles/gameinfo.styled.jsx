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
    .gamelist_section {
      display: flex;
      gap: 16px;
      justify-content: space-between;
      .side_cate {
        flex: 220;
        display: flex;
        flex-direction: column;
        box-shadow: inset 0 0 0 1px var(--primaryMain);

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
          li {
            display: flex;
            height: 42px;
            padding: 0px 16px;
            gap: 8px;
            align-items: center;
            svg{
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
      }
    }
  }
`;
