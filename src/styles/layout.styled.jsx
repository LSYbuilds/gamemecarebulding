import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${(props) => (props.path ? "274px" : "226px")};

  @media (max-width: 736px) {
    padding-top: 206px;
  }
`;
