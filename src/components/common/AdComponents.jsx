import React, { useState } from "react";
import styled from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL;

export const AdWrap = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${PUBLIC_URL}/images/banner/PC_banner.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 1024px) {
    background-image: url(${PUBLIC_URL}/images/banner/tb_banner.jpg);
  }
  @media (max-width: 736px) {
    background-size: cover;
    background-image: url(${PUBLIC_URL}/images/banner/m_banner.jpg);
  }
`;

const AdComponents = () => {
  return <AdWrap></AdWrap>;
};

export default AdComponents;
