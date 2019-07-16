import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
from{
    transform : rotate(0deg);
}
to{
    transform : rotate(360deg);
}
`;

// const Image = styled.img`
//   animation: ${spin} 4s infinite linear;
// `;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;
const Spinner = () => {
  return <Image alt={` Show Poster`} src={`/assets/img/posters/bm.jpg`} />;
};

export default Spinner;
