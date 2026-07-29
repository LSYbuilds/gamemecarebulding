import styled from "@emotion/styled";

export const MiniBoard_wrap = styled.section`
  display: flex;
  flex-direction: ${({path}) => path === "/news" ? "column":""};
  gap: 16px;
  /* 공통스타일 */
  .board_list {
     ${({path}) => path === "/news" ? "":"flex:456"}
    /* flex: 456; */
    display: flex;
    flex-direction: column;
    /* background-color: ${({ path }) =>
    path === "/news" ?  "red" : "none"}; */
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
      ${({path}) => path === "/news" ? "auto":"335px"};
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
`;
