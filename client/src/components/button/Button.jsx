import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

function Button({ text, bgColor, color }) {
  return <MyButton bgColor={bgColor} color={color}>{text}</MyButton>;
}

export default Button;
