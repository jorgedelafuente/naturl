import React from 'react';
import styled from 'styled-components';

export const FormButton = styled.button`
  &:hover {
    background: -moz-linear-gradient(
      left,
      rgba(14, 14, 14, 1) 0%,
      rgba(125, 126, 125, 1) 100%
    );
    background: -webkit-linear-gradient(
      left,
      rgba(14, 14, 14, 1) 0%,
      rgba(125, 126, 125, 1) 100%
    );
    background: linear-gradient(
      to right,
      rgba(14, 14, 14, 1) 0%,
      rgba(125, 126, 125, 1) 100%
    );
  }

  width: 100%;
  height: 40px;
  border: 0;
  margin: 10px 0;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 40px;
  cursor: pointer;

  background: -moz-linear-gradient(
    left,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  );
`;

export const Button = () => {
  return <div>{/* text */}</div>;
};

// export default Button;
