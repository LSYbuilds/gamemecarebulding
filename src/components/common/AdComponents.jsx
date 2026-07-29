import React, { useState } from "react";
import styled from "styled-components";

export const AdWrap = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const AdComponents = () => {
  return (
    <AdWrap>
      <img
        src="https://tpc.googlesyndication.com/daca_images/simgad/17694881751468954509"
        alt="광고이미지"
      />
    </AdWrap>
  );
};

export default AdComponents;
