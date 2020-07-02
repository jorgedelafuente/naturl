import React from 'react';
import styled from 'styled-components';

export const FormContainer = styled.div`
  min-width: 340px;
  width: 20%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 5px 0px #cecece;
  border-radius: 3px;
  margin-top: 5%;
  .Logo {
    margin: 0 auto;
  }

  label > span {
    font-weight: bold;
  }
  input {
    margin-top: 5px;
    display: block;
  }

  label,
  input {
    display: block;
    width: 100%;
  }

  .InputGroup {
    padding: 10px 0;
  }
  .InputGroup > input {
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid #cecece;
    font-weight: bold;
    color: #666;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .InputGroup > input::placeholder {
    font-family: 'Lato';
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    outline: none;
  }

  .Links {
    display: flex;
    justify-content: center;
  }
`;
