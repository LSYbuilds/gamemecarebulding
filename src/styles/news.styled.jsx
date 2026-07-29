import styled from "@emotion/styled";

export const NewsWrap = styled.div`
  .inner {
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
  }
`;

export const NewsAllWarp = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .topnews{
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    .top_title{
        height: 45px;
    }
    .topnews_slide{
        width: 100%;
        height: 450px;
    }
  }
`;
